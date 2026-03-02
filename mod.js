// Single Player Trading Market - Refactored v0.8
// Original by Sappho, expanded and refactored
// Adds Horadric Cube recipes simulating multiplayer trading economy

const cubemainFilename = "global\\excel\\cubemain.txt";
const cubemain = D2RMM.readTsv(cubemainFilename);
const uniqueitemsFilename = 'global\\excel\\uniqueitems.txt';
const uniqueitems = D2RMM.readTsv(uniqueitemsFilename);
const setitemsFilename = 'global\\excel\\setitems.txt';
const setitems = D2RMM.readTsv(setitemsFilename);

// ============================================================
// HELPER FUNCTIONS
// ============================================================

function addRecipe(desc, inputs, outputs, opts) {
  // Calculate numinputs accounting for qty= modifiers
  let numInputs = 0;
  for (const inp of inputs) {
    const qtyMatch = inp.match(/qty=(\d+)/);
    numInputs += qtyMatch ? parseInt(qtyMatch[1]) : 1;
  }
  const recipe = {
    description: desc,
    enabled: 1,
    version: 100,
    numinputs: numInputs,
    '*eol': 0,
  };
  inputs.forEach((inp, i) => { recipe[`input ${i + 1}`] = inp; });
  if (Array.isArray(outputs)) {
    recipe.output = outputs[0];
    if (outputs[1]) recipe['output b'] = outputs[1];
    if (outputs[2]) recipe['output c'] = outputs[2];
  } else {
    recipe.output = outputs;
  }
  if (opts) {
    if (opts.lvl) { recipe.lvl = opts.lvl; recipe.ilvl = opts.ilvl || opts.lvl; }
    if (opts.mods) {
      opts.mods.forEach((mod, i) => {
        recipe[`mod ${i + 1}`] = mod.name;
        recipe[`mod ${i + 1} min`] = mod.min;
        recipe[`mod ${i + 1} max`] = mod.max;
      });
    }
  }
  cubemain.rows.push(recipe);
}

function L100() { return { lvl: 100, ilvl: 100 }; }


// ============================================================
// ALLOW REDROPS
// ============================================================
if (config.allowRedrop) {
  uniqueitems.rows.forEach((row) => { row.nolimit = 1; });
}
D2RMM.writeTsv(uniqueitemsFilename, uniqueitems);


// ============================================================
// SERVICES MARKET
// ============================================================
if (config.servicesMarket) {
  addRecipe("Lazruk Quest", ["weap,nru,nos", "r23", "vps", "isc", "tsc"], "useitem", { mods: [{"name":"sock","min":6,"max":6}] });
  addRecipe("Lazruk Quest", ["shld,nru,nos", "r23", "vps", "isc", "tsc"], "useitem", { mods: [{"name":"sock","min":4,"max":4}] });
  addRecipe("Lazruk Quest", ["tors,nru,nos", "r23", "vps", "isc", "tsc"], "useitem", { mods: [{"name":"sock","min":4,"max":4}] });
  addRecipe("Lazruk Quest", ["helm,nru,nos", "r23", "vps", "isc", "tsc"], "useitem", { mods: [{"name":"sock","min":3,"max":3}] });
  addRecipe("Removes and preserves socketed items", ["any,sock", "toa", "wms"], "useitem,rem", L100());

  // NEW: Charm Rerolling Service
  addRecipe("Reroll Grand Charm", ["cm3", "r21", "gpv"], "cm3,mag", L100());
  addRecipe("Reroll Small Charm", ["cm1", "r20", "gpv"], "cm1,mag", L100());

  // NEW: Imbue Service (Charsi simulation)
  addRecipe("Imbue Weapon", ["weap,nor,nos", "r23", "gpv"], "useitem,rar", L100());
  addRecipe("Imbue Armor", ["tors,nor,nos", "r23", "gpv"], "useitem,rar", L100());
  addRecipe("Imbue Helm", ["helm,nor,nos", "r23", "gpv"], "useitem,rar", L100());
  addRecipe("Imbue Shield", ["shld,nor,nos", "r23", "gpv"], "useitem,rar", L100());

  // NEW: Repair + Recharge
  addRecipe("Repair and Recharge", ["any,rep", "r20", "r09"], "useitem", L100());

  // NEW: Bulk Full Rejuvenation Potions
  addRecipe("Bulk Full Rejuvs", ["r20,qty=3", "vps"], ["rvl", "rvl", "rvl"], L100());
}

// ============================================================
// RUNE ECONOMY
// ============================================================
if (config.ecoRunes) {
  addRecipe("Lem Cheap", ["r20,qty=3", "yps"], ["r19", "r18", "r17"]);
  addRecipe("Lem Fix", ["r20,qty=2"], "r21");
  addRecipe("Pul Break", ["r21"], ["r20", "r20"]);
  addRecipe("Pul Lem -> Um", ["r21", "r20"], "r22");
  addRecipe("Um -> Pul Lem", ["r22"], ["r21", "r20"]);
  addRecipe("Pul Um -> Mal", ["r22", "r21"], "r23");
  addRecipe("Mal -> Um Pul", ["r23"], ["r22", "r21"]);
  addRecipe("Mal Um -> Ist", ["r23", "r22"], "r24");
  addRecipe("Ist -> Mal Um", ["r24"], ["r23", "r22"]);
  addRecipe("Ist Mal -> Gul", ["r23", "r24"], "r25");
  addRecipe("Gul -> Ist Mal", ["r25"], ["r24", "r23"]);
  addRecipe("3 Ist -> Vex", ["r24,qty=3"], "r26");
  addRecipe("Vex -> 3 Ist", ["r26"], ["r24", "r24", "r24"]);
  addRecipe("1 Vex 2 Ist -> Ohm", ["r26", "r24,qty=2"], "r27");
  addRecipe("Ohm -> 1 Vex 2 Ist", ["r27"], ["r26", "r24", "r24"]);
  addRecipe("Ohm Vex Ist -> Lo", ["r24", "r26", "r27"], "r28");
  addRecipe("Lo -> Ohm Vex Ist", ["r28"], ["r27", "r26", "r24"]);
  addRecipe("3 Ohm -> Sur", ["r27,qty=3"], "r29");
  addRecipe("Sur -> 3 Ohm", ["r29"], ["r27", "r27", "r27"]);
  addRecipe("Ber -> Sur Lo Vex", ["r30"], ["r29", "r28", "r26"]);
  addRecipe("Sur Lo Vex -> Ber", ["r26", "r28", "r29"], "r30");
  addRecipe("Jah -> Ber Lo", ["r31"], ["r30", "r28"]);
  addRecipe("Ber Lo -> Jah", ["r28", "r30"], "r31");
  addRecipe("Cham -> Vex Gul Ist", ["r32"], ["r26", "r25", "r24"]);
  addRecipe("Vex Gul Ist -> Cham", ["r25,", "r24", "r26"], "r32");
  addRecipe("Zod -> Ohm Vex Gul", ["r33"], ["r27", "r26", "r25"]);
  addRecipe("Ohm Vex Gul -> Zod", ["r25,", "r26", "r27"], "r33");
}

// ============================================================
// GEM MARKET
// ============================================================
if (config.gemMarket) {
  addRecipe("Lem Cash", ["r20", "yps"], ["gpw", "gpg", "gpy"]);
  addRecipe("10 r01 -> Um", ["r01,qty=10", "vps"], "r22");
  addRecipe("10 r02 -> Um", ["r02,qty=10", "vps"], "r22");
  addRecipe("10 r03 -> Um", ["r03,qty=10", "vps"], "r22");
  addRecipe("10 r04 -> Um", ["r04,qty=10", "vps"], "r22");
  addRecipe("10 r05 -> Um", ["r05,qty=10", "vps"], "r22");
  addRecipe("10 r06 -> Um", ["r06,qty=10", "vps"], "r22");
  addRecipe("10 r07 -> Um", ["r07,qty=10", "vps"], "r22");
  addRecipe("10 r08 -> Um", ["r08,qty=10", "vps"], "r22");
  addRecipe("10 r09 -> Um", ["r09,qty=10", "vps"], "r22");
  addRecipe("10 r10 -> Um", ["r10,qty=10", "vps"], "r22");
  addRecipe("10 r11 -> Um", ["r11,qty=10", "vps"], "r22");
  addRecipe("10 r12 -> Um", ["r12,qty=10", "vps"], "r22");
  addRecipe("10 r13 -> Um", ["r13,qty=10", "vps"], "r22");
  addRecipe("10 r14 -> Um", ["r14,qty=10", "vps"], "r22");
  addRecipe("10 r15 -> Um", ["r15,qty=10", "vps"], "r22");
  addRecipe("10 r16 -> Um", ["r16,qty=10", "vps"], "r22");
  addRecipe("10 r17 -> Um", ["r17,qty=10", "vps"], "r22");
  addRecipe("10 r18 -> Um", ["r18,qty=10", "vps"], "r22");
  addRecipe("10 Diamond -> Pul", ["gpw,qty=10", "vps"], "r21");
  addRecipe("10 Emerald -> Pul", ["gpg,qty=10", "vps"], "r21");
  addRecipe("10 Sapphire -> Pul", ["gpb,qty=10", "vps"], "r21");
  addRecipe("10 Topaz -> Pul", ["gpy,qty=10", "vps"], "r21");
  addRecipe("10 Ruby -> Um", ["gpr,qty=10", "vps"], "r22");
  addRecipe("10 Skull -> Um", ["skz,qty=10", "vps"], "r22");
  addRecipe("10 Amethyst -> Mal", ["gpv,qty=10", "vps"], "r23");
  addRecipe("Lem -> 3 P Sapphires", ["r20", "vps", "isc"], ["gpb", "gpb", "gpb"]);
  addRecipe("Lem -> 3 P Skulls", ["r20", "yps", "isc"], ["skz", "skz", "skz"]);
  addRecipe("Lem -> 3 P Rubies", ["r20", "wms", "isc"], ["gpr", "gpr", "gpr"]);
  addRecipe("Pul -> 3 P Amethysts", ["r21", "vps", "isc"], ["gpv", "gpv", "gpv"]);
  addRecipe("Lem -> 3 Hel", ["r20", "yps", "tsc"], ["r15", "r15", "r15"]);
}

// ============================================================
// ENDGAME MARKET (Torches, Keys, Ubers)
// ============================================================
if (config.torchMarket) {
  addRecipe("Vex -> Ancient 1", ["r26", "r01", "wms"], "ua1", L100());
  addRecipe("Vex -> Ancient 2", ["r26", "r02", "wms"], "ua2", L100());
  addRecipe("Vex -> Ancient 3", ["r26", "r03", "wms"], "ua3", L100());
  addRecipe("Vex -> Ancient 4", ["r26", "r04", "wms"], "ua4", L100());
  addRecipe("Vex -> Ancient 5", ["r26", "r05", "wms"], "ua5", L100());
  addRecipe("Ancient 1 -> Vex", ["ua1", "wms"], "r26");
  addRecipe("Ancient 2 -> Vex", ["ua2", "wms"], "r26");
  addRecipe("Ancient 3 -> Vex", ["ua3", "wms"], "r26");
  addRecipe("Ancient 4 -> Vex", ["ua4", "wms"], "r26");
  addRecipe("Ancient 5 -> Vex", ["ua5", "wms"], "r26");
  addRecipe("Defender's Bile -> r29", ["yps", "Defender's Bile"], "r29");
  addRecipe("Guardian's Thunder -> r29", ["yps", "Guardian's Thunder"], "r29");
  addRecipe("Protector's Frost -> r29", ["yps", "Protector's Frost"], "r29");
  addRecipe("Defender's Fire -> r29", ["yps", "Defender's Fire"], "r29");
  addRecipe("Protector's Stone -> r29", ["yps", "Protector's Stone"], "r29");
  addRecipe("Guardian's Light -> r29", ["yps", "Guardian's Light"], "r29");
  addRecipe("Torch -> Vex Um", ["Hellfire Torch", "yps"], ["r26", "r22"]);
  addRecipe("Keys -> Ist", ["pk1", "pk2", "pk3", "wms"], "r24");
  addRecipe("Ist -> Keys", ["r24", "wms"], ["pk1", "pk2", "pk3"]);
  addRecipe("Key 1 + Pul = Key 2", ["pk1", "r21", "wms"], "pk2");
  addRecipe("Key 2 + Pul = Key 3", ["pk2", "r21", "wms"], "pk3");
  addRecipe("Key 3 + Pul = Key 1", ["pk3", "r21", "wms"], "pk1");
  addRecipe("Annihilus -> r27", ["yps", "Annihilus"], ["r27", "r26"]);

  // NEW: Key Bundle Deal (discount vs buying individually)
  addRecipe("Key Bundle (2 Ist)", ["r24,qty=2", "vps"], ["pk1", "pk2", "pk3"]);

  // NEW: Essences Market
  addRecipe("Buy Twisted Essence", ["r21", "vps", "isc"], "tes", L100());
  addRecipe("Buy Charged Essence", ["r21", "vps", "tsc"], "ceh", L100());
  addRecipe("Buy Burning Essence", ["r21", "vps", "wms"], "bet", L100());
  addRecipe("Buy Festering Essence", ["r21", "vps", "gpv"], "fed", L100());
  addRecipe("Sell Twisted Essence", ["tes", "yps"], "r20");
  addRecipe("Sell Charged Essence", ["ceh", "yps"], "r20");
  addRecipe("Sell Burning Essence", ["bet", "yps"], "r20");
  addRecipe("Sell Festering Essence", ["fed", "yps"], "r20");

  // NEW: Uber Organs Market
  addRecipe("Buy Mephisto Brain", ["r26", "vps", "isc"], "mbr", L100());
  addRecipe("Buy Diablo Horn", ["r26", "vps", "tsc"], "dhn", L100());
  addRecipe("Buy Baal Eye", ["r26", "vps", "wms"], "bey", L100());
  addRecipe("Sell Mephisto Brain", ["mbr", "yps"], "r24");
  addRecipe("Sell Diablo Horn", ["dhn", "yps"], "r24");
  addRecipe("Sell Baal Eye", ["bey", "yps"], "r24");
}

// ============================================================
// MAGIC MARKET (Charms)
// ============================================================
if (config.magicMarket) {
  addRecipe("Pul for Fine Small Charm", ["cm1", "r21", "glw", "vps"], "cm1,mag,pre=256", L100());
  addRecipe("Gul for Shimmering Small Charm", ["cm1", "r25", "glw", "vps"], "cm1,mag,pre=322", L100());
  addRecipe("Um for Small Charm of Good Luck", ["cm1", "r22", "glw", "vps"], "cm1,mag,suf=291", L100());
  addRecipe("Mal for Small Charm of Vita", ["cm1", "r23", "glw", "vps"], "cm1,mag,suf=349", L100());
  addRecipe("Lem for Small Charm of Inertia", ["cm1", "r20", "glw", "vps"], "cm1,mag,suf=401", L100());
  addRecipe("r22 --> Bow", ["cm3", "r01", "r22", "vps"], "cm3,mag,pre=430", L100());
  addRecipe("r20 --> Passives", ["cm3", "r01", "r20", "vps"], "cm3,mag,pre=431", L100());
  addRecipe("r24 --> Javelin", ["cm3", "r01", "r24", "vps"], "cm3,mag,pre=432", L100());
  addRecipe("r22 --> Fire", ["cm3", "r02", "r22", "vps"], "cm3,mag,pre=442", L100());
  addRecipe("r25 --> Lightning", ["cm3", "r02", "r25", "vps"], "cm3,mag,pre=443", L100());
  addRecipe("r23 --> Cold", ["cm3", "r02", "r23", "vps"], "cm3,mag,pre=444", L100());
  addRecipe("r20 --> Curses", ["cm3", "r03", "r20", "vps"], "cm3,mag,pre=454", L100());
  addRecipe("r23 --> Poison and Bone", ["cm3", "r03", "r23", "vps"], "cm3,mag,pre=455", L100());
  addRecipe("r22 --> Summoning (Necro)", ["cm3", "r03", "r22", "vps"], "cm3,mag,pre=456", L100());
  addRecipe("r25 --> Combat Arts (Pal)", ["cm3", "r04", "r25", "vps"], "cm3,mag,pre=466", L100());
  addRecipe("r23 --> Offensive", ["cm3", "r04", "r23", "vps"], "cm3,mag,pre=467", L100());
  addRecipe("r20 --> Defensive", ["cm3", "r04", "r20", "vps"], "cm3,mag,pre=468", L100());
  addRecipe("r20 --> Combat Masteries", ["cm3", "r05", "r20", "vps"], "cm3,mag,pre=478", L100());
  addRecipe("r21 --> Combat Skills (Barb)", ["cm3", "r05", "r21", "vps"], "cm3,mag,pre=479", L100());
  addRecipe("r22 --> Shouts", ["cm3", "r05", "r22", "vps"], "cm3,mag,pre=480", L100());
  addRecipe("r20 --> Summoning (Druid)", ["cm3", "r06", "r20", "vps"], "cm3,mag,pre=490", L100());
  addRecipe("r22 --> Shapeshifting", ["cm3", "r06", "r22", "vps"], "cm3,mag,pre=491", L100());
  addRecipe("r23 --> Elemental", ["cm3", "r06", "r23", "vps"], "cm3,mag,pre=492", L100());
  addRecipe("r23 --> Traps", ["cm3", "r07", "r23", "vps"], "cm3,mag,pre=502", L100());
  addRecipe("r21 --> Disciplines", ["cm3", "r07", "r21", "vps"], "cm3,mag,pre=503", L100());
  addRecipe("r22 --> Martial Arts", ["cm3", "r07", "r22", "vps"], "cm3,mag,pre=504", L100());
  addRecipe("r25 --> Chaos", ["cm3", "r08", "r25", "vps"], "cm3,mag,pre=700", L100());
  addRecipe("r26 --> Eldritch", ["cm3", "r08", "r26", "vps"], "cm3,mag,pre=701", L100());
  addRecipe("r24 --> Demons", ["cm3", "r08", "r24", "vps"], "cm3,mag,pre=702", L100());
}

// ============================================================
// CLASSIC SUNDER CHARMS
// ============================================================
if (config.classicSunder) {
  addRecipe("r22 -> Cold Rupture", ["vps", "r22", "cm3", "glb"], "Cold Rupture", L100());
  addRecipe("Cold Rupture -> r21", ["yps", "Cold Rupture"], "r21");
  addRecipe("r22 -> Flame Rift", ["vps", "r22", "cm3", "glr"], "Flame Rift", L100());
  addRecipe("Flame Rift -> r21", ["yps", "Flame Rift"], "r21");
  addRecipe("r22 -> Crack of the Heavens", ["vps", "r22", "cm3", "glw"], "Crack of the Heavens", L100());
  addRecipe("Crack of the Heavens -> r21", ["yps", "Crack of the Heavens"], "r21");
  addRecipe("r22 -> Rotting Fissure", ["vps", "r22", "cm3", "glg"], "Rotting Fissure", L100());
  addRecipe("Rotting Fissure -> r21", ["yps", "Rotting Fissure"], "r21");
  addRecipe("r22 -> Bone Break", ["vps", "r22", "cm3", "skl"], "Bone Break", L100());
  addRecipe("Bone Break -> r21", ["yps", "Bone Break"], "r21");
  addRecipe("r22 -> Black Cleft", ["vps", "r22", "cm3", "gzv"], "Black Cleft", L100());
  addRecipe("Black Cleft -> r21", ["yps", "Black Cleft"], "r21");
}

// ============================================================
// UNIQUE AND SET ITEM MARKET
// ============================================================
if (config.uniqueMarket) {
  addRecipe("Ist -> Rainbow Facet", ["r24", "jew", "vps"], "jew,uni", L100());
  addRecipe("Rainbow Facet -> Mal", ["jew,uni", "yps"], "r23");
  addRecipe("r22 -> Natalya's Totem", ["vps", "r22", "xh9", "tsc"], "Natalya's Totem", L100());
  addRecipe("Natalya's Totem -> r21", ["yps", "Natalya's Totem"], "r21");
  addRecipe("r23 -> Natalya's Mark", ["vps", "r23", "7qr", "tsc"], "Natalya's Mark", L100());
  addRecipe("Natalya's Mark -> r22", ["yps", "Natalya's Mark"], "r22");
  addRecipe("r22 -> Natalya's Soul", ["vps", "r22", "xmb", "tsc"], "Natalya's Soul", L100());
  addRecipe("Natalya's Soul -> r21", ["yps", "Natalya's Soul"], "r21");
  addRecipe("r23 -> Aldur's Advance", ["vps", "r23", "xtb", "tsc"], "Aldur's Advance", L100());
  addRecipe("Aldur's Advance -> r22", ["yps", "Aldur's Advance"], "r22");
  addRecipe("r22 -> Immortal King's Will", ["vps", "r22", "ba5", "tsc"], "Immortal King's Will", L100());
  addRecipe("Immortal King's Will -> r21", ["yps", "Immortal King's Will"], "r21");
  addRecipe("r24 -> Immortal King's Soul Cage", ["vps", "r24", "uar", "tsc"], "Immortal King's Soul Cage", L100());
  addRecipe("Immortal King's Soul Cage -> r23", ["yps", "Immortal King's Soul Cage"], "r23");
  addRecipe("r22 -> Tal Rasha's Fire-Spun Cloth", ["vps", "r22", "zmb", "tsc"], "Tal Rasha's Fire-Spun Cloth", L100());
  addRecipe("Tal Rasha's Fire-Spun Cloth -> r21", ["yps", "Tal Rasha's Fire-Spun Cloth"], "r21");
  addRecipe("r23 -> Tal Rasha's Adjudication", ["vps", "r23", "amu", "tsc"], "Tal Rasha's Adjudication", L100());
  addRecipe("Tal Rasha's Adjudication -> r22", ["yps", "Tal Rasha's Adjudication"], "r22");
  addRecipe("r23 -> Tal Rasha's Lidless Eye", ["vps", "r23", "oba", "tsc"], "Tal Rasha's Lidless Eye", L100());
  addRecipe("Tal Rasha's Lidless Eye -> r22", ["yps", "Tal Rasha's Lidless Eye"], "r22");
  addRecipe("r24 -> Tal Rasha's Howling Wind", ["vps", "r24", "uth", "tsc"], "Tal Rasha's Howling Wind", L100());
  addRecipe("Tal Rasha's Howling Wind -> r23", ["yps", "Tal Rasha's Howling Wind"], "r23");
  addRecipe("r22 -> Tal Rasha's Horadric Crest", ["vps", "r22", "xsk", "tsc"], "Tal Rasha's Horadric Crest", L100());
  addRecipe("Tal Rasha's Horadric Crest -> r21", ["yps", "Tal Rasha's Horadric Crest"], "r21");
  addRecipe("r23 -> Griswold's Valor", ["vps", "r23", "urn", "tsc"], "Griswold's Valor", L100());
  addRecipe("Griswold's Valor -> r22", ["yps", "Griswold's Valor"], "r22");
  addRecipe("r24 -> Griswolds's Redemption", ["vps", "r24", "7ws", "r23"], "Griswolds's Redemption", L100());
  addRecipe("Griswolds's Redemption -> r24", ["yps", "Griswolds's Redemption"], "r24");
  addRecipe("r23 -> Griswold's Honor", ["vps", "r23", "paf", "tsc"], "Griswold's Honor", L100());
  addRecipe("Griswold's Honor -> r22", ["yps", "Griswold's Honor"], "r22");
  addRecipe("r22 -> Trang-Oul's Guise", ["vps", "r22", "uh9", "tsc"], "Trang-Oul's Guise", L100());
  addRecipe("Trang-Oul's Guise -> r21", ["yps", "Trang-Oul's Guise"], "r21");
  addRecipe("r22 -> Trang-Oul's Wing", ["vps", "r22", "ne9", "tsc"], "Trang-Oul's Wing", L100());
  addRecipe("Trang-Oul's Wing -> r21", ["yps", "Trang-Oul's Wing"], "r21");
  addRecipe("r22 -> Trang-Oul's Claws", ["vps", "r22", "xmg", "tsc"], "Trang-Oul's Claws", L100());
  addRecipe("Trang-Oul's Claws -> r21", ["yps", "Trang-Oul's Claws"], "r21");
  addRecipe("r22 -> Trang-Oul's Girth", ["vps", "r22", "utc", "tsc"], "Trang-Oul's Girth", L100());
  addRecipe("Trang-Oul's Girth -> r21", ["yps", "Trang-Oul's Girth"], "r21");
  addRecipe("r23 -> M'avina's True Sight", ["vps", "r23", "ci3", "tsc"], "M'avina's True Sight", L100());
  addRecipe("M'avina's True Sight -> r22", ["yps", "M'avina's True Sight"], "r22");
  addRecipe("r22 -> M'avina's Caster", ["vps", "r22", "amc", "tsc"], "M'avina's Caster", L100());
  addRecipe("M'avina's Caster -> r20", ["yps", "M'avina's Caster"], "r20");
  addRecipe("r22 -> Guillaume's Face", ["vps", "r22", "xhm", "tsc"], "Guillaume's Face", L100());
  addRecipe("Guillaume's Face -> r21", ["yps", "Guillaume's Face"], "r21");
  addRecipe("r22 -> Bul-Kathos' Sacred Charge", ["vps", "r22", "7gd", "tsc"], "Bul-Kathos' Sacred Charge", L100());
  addRecipe("Bul-Kathos' Sacred Charge -> r21", ["yps", "Bul-Kathos' Sacred Charge"], "r21");
  addRecipe("r22 -> Bul-Kathos' Tribal Guardian", ["vps", "r22", "7wd", "tsc"], "Bul-Kathos' Tribal Guardian", L100());
  addRecipe("Bul-Kathos' Tribal Guardian -> r21", ["yps", "Bul-Kathos' Tribal Guardian"], "r21");
  addRecipe("r22 -> Cow King's Hoofs", ["vps", "r22", "vbt", "tsc"], "Cow King's Hoofs", L100());
  addRecipe("Cow King's Hoofs -> r20", ["yps", "Cow King's Hoofs"], "r20");
  addRecipe("r22 -> Naj's Puzzler", ["vps", "r22", "6cs", "tsc"], "Naj's Puzzler", L100());
  addRecipe("Naj's Puzzler -> r21", ["yps", "Naj's Puzzler"], "r21");
  addRecipe("r24 -> Horazon's Countenance", ["vps", "r24", "usk", "tsc"], "Horazon's Countenance", L100());
  addRecipe("Horazon's Countenance -> r23", ["yps", "Horazon's Countenance"], "r23");
  addRecipe("r24 -> Horazon's Dominion", ["vps", "r24", "xpl", "tsc"], "Horazon's Dominion", L100());
  addRecipe("Horazon's Dominion -> r23", ["yps", "Horazon's Dominion"], "r23");
  addRecipe("r24 -> Horazon's Hold", ["vps", "r24", "xlg", "tsc"], "Horazon's Hold", L100());
  addRecipe("Horazon's Hold -> r23", ["yps", "Horazon's Hold"], "r23");
  addRecipe("r24 -> Horazon's Legacy", ["vps", "r24", "utb", "tsc"], "Horazon's Legacy", L100());
  addRecipe("Horazon's Legacy -> r23", ["yps", "Horazon's Legacy"], "r23");
  addRecipe("r24 -> Horazon's Secrets", ["vps", "r24", "wad", "tsc"], "Horazon's Secrets", L100());
  addRecipe("Horazon's Secrets -> r23", ["yps", "Horazon's Secrets"], "r23");
  addRecipe("r22 -> Iros Torch", ["vps", "r22", "wnd", "isc"], "Iros Torch", L100());
  addRecipe("Iros Torch -> r21", ["yps", "Iros Torch"], "r21");
  addRecipe("r22 -> Gull", ["vps", "r22", "dgr", "isc"], "Gull", L100());
  addRecipe("Gull -> r21", ["yps", "Gull"], "r21");
  addRecipe("r22 -> Greyform", ["vps", "r22", "qui", "isc"], "Greyform", L100());
  addRecipe("Greyform -> r20", ["yps", "Greyform"], "r20");
  addRecipe("r22 -> The Hand of Broc", ["vps", "r22", "lgl", "isc"], "The Hand of Broc", L100());
  addRecipe("The Hand of Broc -> r20", ["yps", "The Hand of Broc"], "r20");
  addRecipe("r22 -> Bloodfist", ["vps", "r22", "vgl", "isc"], "Bloodfist", L100());
  addRecipe("Bloodfist -> r20", ["yps", "Bloodfist"], "r20");
  addRecipe("r23 -> Chance Guards", ["vps", "r23", "mgl", "isc"], "Chance Guards", L100());
  addRecipe("Chance Guards -> r22", ["yps", "Chance Guards"], "r22");
  addRecipe("r23 -> Magefist", ["vps", "r23", "tgl", "isc"], "Magefist", L100());
  addRecipe("Magefist -> r22", ["yps", "Magefist"], "r22");
  addRecipe("r22 -> Hotspur", ["vps", "r22", "lbt", "isc"], "Hotspur", L100());
  addRecipe("Hotspur -> r21", ["yps", "Hotspur"], "r21");
  addRecipe("r24 -> Nagelring", ["vps", "r24", "rin", "isc"], "Nagelring", L100());
  addRecipe("Nagelring -> r22", ["yps", "Nagelring"], "r22");
  addRecipe("r28 -> The Stone of Jordan", ["vps", "r28", "rin", "isc"], "The Stone of Jordan", L100());
  addRecipe("The Stone of Jordan -> r27", ["yps", "The Stone of Jordan"], "r27");
  addRecipe("r22 -> Blade of Ali Baba", ["vps", "r22", "9fc", "isc"], "Blade of Ali Baba", L100());
  addRecipe("Blade of Ali Baba -> r21", ["yps", "Blade of Ali Baba"], "r21");
  addRecipe("r24 -> Stormspike", ["vps", "r24", "9bl", "isc"], "Stormspike", L100());
  addRecipe("Stormspike -> r23", ["yps", "Stormspike"], "r23");
  addRecipe("r26 -> Hone Sundan,eth", ["vps", "r26", "9st", "isc"], "Hone Sundan,eth", L100());
  addRecipe("Hone Sundan,eth -> r25", ["yps", "Hone Sundan,eth"], "r25");
  addRecipe("r23 -> Ribcracker,eth", ["vps", "r23", "8ls", "isc"], "Ribcracker,eth", L100());
  addRecipe("Ribcracker,eth -> r22", ["yps", "Ribcracker,eth"], "r22");
  addRecipe("r22 -> Ribcracker", ["vps", "r22", "8ls", "isc"], "Ribcracker", L100());
  addRecipe("Ribcracker -> r21", ["yps", "Ribcracker"], "r21");
  addRecipe("r22 -> Warpspear", ["vps", "r22", "8bs", "isc"], "Warpspear", L100());
  addRecipe("Warpspear -> r20", ["yps", "Warpspear"], "r20");
  addRecipe("r22 -> Whichwild String", ["vps", "r22", "8s8", "isc"], "Whichwild String", L100());
  addRecipe("Whichwild String -> r21", ["yps", "Whichwild String"], "r21");
  addRecipe("r24 -> Crown of Thieves", ["vps", "r24", "xrn", "isc"], "Crown of Thieves", L100());
  addRecipe("Crown of Thieves -> r23", ["yps", "Crown of Thieves"], "r23");
  addRecipe("r30 -> Vampiregaze,eth", ["vps", "r30", "xh9", "isc"], "Vampiregaze,eth", L100());
  addRecipe("Vampiregaze,eth -> r29", ["yps", "Vampiregaze,eth"], "r29");
  addRecipe("r24 -> Vampiregaze", ["vps", "r24", "xh9", "isc"], "Vampiregaze", L100());
  addRecipe("Vampiregaze -> r23", ["yps", "Vampiregaze"], "r23");
  addRecipe("r24 -> Skin of the Vipermagi", ["vps", "r24", "xea", "isc"], "Skin of the Vipermagi", L100());
  addRecipe("Skin of the Vipermagi -> r23", ["yps", "Skin of the Vipermagi"], "r23");
  addRecipe("r22 -> Shaftstop", ["vps", "r22", "xhn", "isc"], "Shaftstop", L100());
  addRecipe("Shaftstop -> r21", ["yps", "Shaftstop"], "r21");
  addRecipe("r22 -> Duriel's Shell", ["vps", "r22", "xrs", "isc"], "Duriel's Shell", L100());
  addRecipe("Duriel's Shell -> r20", ["yps", "Duriel's Shell"], "r20");
  addRecipe("r22 -> Skullder's Ire", ["vps", "r22", "xpl", "isc"], "Skullder's Ire", L100());
  addRecipe("Skullder's Ire -> r21", ["yps", "Skullder's Ire"], "r21");
  addRecipe("r22 -> Guardian Angel", ["vps", "r22", "xlt", "isc"], "Guardian Angel", L100());
  addRecipe("Guardian Angel -> r20", ["yps", "Guardian Angel"], "r20");
  addRecipe("r24 -> Mosers Blessed Circle", ["vps", "r24", "xml", "isc"], "Mosers Blessed Circle", L100());
  addRecipe("Mosers Blessed Circle -> r23", ["yps", "Mosers Blessed Circle"], "r23");
  addRecipe("r22 -> Lidless Wall", ["vps", "r22", "xsh", "isc"], "Lidless Wall", L100());
  addRecipe("Lidless Wall -> r21", ["yps", "Lidless Wall"], "r21");
  addRecipe("r22 -> Infernostride", ["vps", "r22", "xlb", "isc"], "Infernostride", L100());
  addRecipe("Infernostride -> r21", ["yps", "Infernostride"], "r21");
  addRecipe("r24 -> Waterwalk", ["vps", "r24", "xvb", "isc"], "Waterwalk", L100());
  addRecipe("Waterwalk -> r23", ["yps", "Waterwalk"], "r23");
  addRecipe("r23 -> Silkweave", ["vps", "r23", "xmb", "isc"], "Silkweave", L100());
  addRecipe("Silkweave -> r22", ["yps", "Silkweave"], "r22");
  addRecipe("r26 -> Wartraveler", ["vps", "r26", "xtb", "isc"], "Wartraveler", L100());
  addRecipe("Wartraveler -> r25", ["yps", "Wartraveler"], "r25");
  addRecipe("r24 -> Gorerider", ["vps", "r24", "xhb", "isc"], "Gorerider", L100());
  addRecipe("Gorerider -> r23", ["yps", "Gorerider"], "r23");
  addRecipe("r24 -> String of Ears", ["vps", "r24", "zlb", "isc"], "String of Ears", L100());
  addRecipe("String of Ears -> r23", ["yps", "String of Ears"], "r23");
  addRecipe("r24 -> Thudergod's Vigor", ["vps", "r24", "zhb", "isc"], "Thudergod's Vigor", L100());
  addRecipe("Thudergod's Vigor -> r23", ["yps", "Thudergod's Vigor"], "r23");
  addRecipe("r24 -> Harlequin Crest", ["vps", "r24", "uap", "isc"], "Harlequin Crest", L100());
  addRecipe("Harlequin Crest -> r23", ["yps", "Harlequin Crest"], "r23");
  addRecipe("r22 -> The Gladiator's Bane", ["vps", "r22", "utu", "isc"], "The Gladiator's Bane", L100());
  addRecipe("The Gladiator's Bane -> r21", ["yps", "The Gladiator's Bane"], "r21");
  addRecipe("r22 -> Arkaine's Valor", ["vps", "r22", "upl", "isc"], "Arkaine's Valor", L100());
  addRecipe("Arkaine's Valor -> r21", ["yps", "Arkaine's Valor"], "r21");
  addRecipe("r23 -> Stormshield", ["vps", "r23", "uit", "isc"], "Stormshield", L100());
  addRecipe("Stormshield -> r22", ["yps", "Stormshield"], "r22");
  addRecipe("r24 -> Schaefer's Hammer", ["vps", "r24", "7wh", "r23"], "Schaefer's Hammer", L100());
  addRecipe("Schaefer's Hammer -> r24", ["yps", "Schaefer's Hammer"], "r24");
  addRecipe("r24 -> The Cranium Basher", ["vps", "r24", "7gm", "isc"], "The Cranium Basher", L100());
  addRecipe("The Cranium Basher -> r23", ["yps", "The Cranium Basher"], "r23");
  addRecipe("r24 -> The Grandfather", ["vps", "r24", "7gd", "r23"], "The Grandfather", L100());
  addRecipe("The Grandfather -> r24", ["yps", "The Grandfather"], "r24");
  addRecipe("r22 -> Wizardspike", ["vps", "r22", "7dg", "isc"], "Wizardspike", L100());
  addRecipe("Wizardspike -> r21", ["yps", "Wizardspike"], "r21");
  addRecipe("r22 -> Eaglehorn", ["vps", "r22", "6l7", "isc"], "Eaglehorn", L100());
  addRecipe("Eaglehorn -> r21", ["yps", "Eaglehorn"], "r21");
  addRecipe("r27 -> Windforce", ["vps", "r27", "6lw", "isc"], "Windforce", L100());
  addRecipe("Windforce -> r26", ["yps", "Windforce"], "r26");
  addRecipe("r26 -> Bul Katho's Wedding Band", ["vps", "r26", "rin", "isc"], "Bul Katho's Wedding Band", L100());
  addRecipe("Bul Katho's Wedding Band -> r25", ["yps", "Bul Katho's Wedding Band"], "r25");
  addRecipe("r26 -> Mara's Kaleidoscope", ["vps", "r26", "amu", "isc"], "Mara's Kaleidoscope", L100());
  addRecipe("Mara's Kaleidoscope -> r25", ["yps", "Mara's Kaleidoscope"], "r25");
  addRecipe("r20 -> Atma's Scarab", ["vps", "r20", "amu", "r19"], "Atma's Scarab", L100());
  addRecipe("Atma's Scarab -> r19", ["yps", "Atma's Scarab"], "r19");
  addRecipe("r23 -> Highlord's Wrath", ["vps", "r23", "amu", "isc"], "Highlord's Wrath", L100());
  addRecipe("Highlord's Wrath -> r22", ["yps", "Highlord's Wrath"], "r22");
  addRecipe("r25 -> Arreat's Face", ["vps", "r25", "baa", "isc"], "Arreat's Face", L100());
  addRecipe("Arreat's Face -> r23", ["yps", "Arreat's Face"], "r23");
  addRecipe("r22 -> Homunculus", ["vps", "r22", "nea", "isc"], "Homunculus", L100());
  addRecipe("Homunculus -> r21", ["yps", "Homunculus"], "r21");
  addRecipe("r23 -> Titan's Revenge", ["vps", "r23", "yps", "isc"], "Titan's Revenge", L100());
  addRecipe("Titan's Revenge -> r22", ["yps", "Titan's Revenge"], "r22");
  addRecipe("r31 -> Titan's Revenge,eth", ["vps", "r31", "yps", "isc"], "Titan's Revenge,eth", L100());
  addRecipe("Titan's Revenge,eth -> r30", ["yps", "Titan's Revenge,eth"], "r30");
  addRecipe("r22 -> Lycander's Aim", ["vps", "r22", "am7", "isc"], "Lycander's Aim", L100());
  addRecipe("Lycander's Aim -> r21", ["yps", "Lycander's Aim"], "r21");
  addRecipe("r23 -> The Oculus", ["vps", "r23", "oba", "isc"], "The Oculus", L100());
  addRecipe("The Oculus -> r22", ["yps", "The Oculus"], "r22");
  addRecipe("r24 -> Herald of Zakarum", ["vps", "r24", "pa9", "r23"], "Herald of Zakarum", L100());
  addRecipe("Herald of Zakarum -> r24", ["yps", "Herald of Zakarum"], "r24");
  addRecipe("r22 -> Cutthroat1", ["vps", "r22", "9tw", "isc"], "Cutthroat1", L100());
  addRecipe("Cutthroat1 -> r21", ["yps", "Cutthroat1"], "r21");
  addRecipe("r23 -> Jalal's Mane", ["vps", "r23", "dra", "isc"], "Jalal's Mane", L100());
  addRecipe("Jalal's Mane -> r22", ["yps", "Jalal's Mane"], "r22");
  addRecipe("r22 -> The Scalper", ["vps", "r22", "9ta", "isc"], "The Scalper", L100());
  addRecipe("The Scalper -> r20", ["yps", "The Scalper"], "r20");
  addRecipe("r22 -> Deathbit", ["vps", "r22", "9tk", "isc"], "Deathbit", L100());
  addRecipe("Deathbit -> r20", ["yps", "Deathbit"], "r20");
  addRecipe("r22 -> Warshrike", ["vps", "r22", "7bk", "isc"], "Warshrike", L100());
  addRecipe("Warshrike -> r21", ["yps", "Warshrike"], "r21");
  addRecipe("r28 -> Tomb Reaver,eth", ["vps", "r28", "7pa", "isc"], "Tomb Reaver,eth", L100());
  addRecipe("Tomb Reaver,eth -> r27", ["yps", "Tomb Reaver,eth"], "r27");
  addRecipe("r23 -> Tomb Reaver", ["vps", "r23", "7pa", "isc"], "Tomb Reaver", L100());
  addRecipe("Tomb Reaver -> r22", ["yps", "Tomb Reaver"], "r22");
  addRecipe("r28 -> Deaths's Web", ["vps", "r28", "7gw", "isc"], "Deaths's Web", L100());
  addRecipe("Deaths's Web -> r27", ["yps", "Deaths's Web"], "r27");
  addRecipe("r24 -> Azurewrath", ["vps", "r24", "7cr", "r23"], "Azurewrath", L100());
  addRecipe("Azurewrath -> r24", ["yps", "Azurewrath"], "r24");
  addRecipe("r21 -> Seraph's Hymn", ["vps", "r21", "amu", "r20"], "Seraph's Hymn", L100());
  addRecipe("Seraph's Hymn -> r20", ["yps", "Seraph's Hymn"], "r20");
  addRecipe("r22 -> Fleshripper", ["vps", "r22", "7kr", "isc"], "Fleshripper", L100());
  addRecipe("Fleshripper -> r21", ["yps", "Fleshripper"], "r21");
  addRecipe("r22 -> Jadetalon", ["vps", "r22", "7wb", "isc"], "Jadetalon", L100());
  addRecipe("Jadetalon -> r21", ["yps", "Jadetalon"], "r21");
  addRecipe("r26 -> Shadowdancer", ["vps", "r26", "uhb", "isc"], "Shadowdancer", L100());
  addRecipe("Shadowdancer -> r25", ["yps", "Shadowdancer"], "r25");
  addRecipe("r24 -> Tyrael's Might", ["vps", "r24", "uar", "isc"], "Tyrael's Might", L100());
  addRecipe("Tyrael's Might -> r23", ["yps", "Tyrael's Might"], "r23");
  addRecipe("r27 -> Runemaster,eth", ["vps", "r27", "72a", "isc"], "Runemaster,eth", L100());
  addRecipe("Runemaster,eth -> r26", ["yps", "Runemaster,eth"], "r26");
  addRecipe("r22 -> Runemaster", ["vps", "r22", "72a", "isc"], "Runemaster", L100());
  addRecipe("Runemaster -> r21", ["yps", "Runemaster"], "r21");
  addRecipe("r24 -> Deathcleaver", ["vps", "r24", "7wa", "isc"], "Deathcleaver", L100());
  addRecipe("Deathcleaver -> r23", ["yps", "Deathcleaver"], "r23");
  addRecipe("r22 -> Leviathan", ["vps", "r22", "uld", "isc"], "Leviathan", L100());
  addRecipe("Leviathan -> r21", ["yps", "Leviathan"], "r21");
  addRecipe("r21 -> Wisp", ["vps", "r21", "rin", "isc"], "Wisp", L100());
  addRecipe("Wisp -> r19", ["yps", "Wisp"], "r19");
  addRecipe("r24 -> Lacerator,eth", ["vps", "r24", "7b8", "isc"], "Lacerator,eth", L100());
  addRecipe("Lacerator,eth -> r23", ["yps", "Lacerator,eth"], "r23");
  addRecipe("r26 -> Mang Song's Lesson", ["vps", "r26", "6ws", "isc"], "Mang Song's Lesson", L100());
  addRecipe("Mang Song's Lesson -> r25", ["yps", "Mang Song's Lesson"], "r25");
  addRecipe("r28 -> The Reaper's Toll,eth", ["vps", "r28", "7s8", "isc"], "The Reaper's Toll,eth", L100());
  addRecipe("The Reaper's Toll,eth -> r27", ["yps", "The Reaper's Toll,eth"], "r27");
  addRecipe("r23 -> The Reaper's Toll", ["vps", "r23", "7s8", "isc"], "The Reaper's Toll", L100());
  addRecipe("The Reaper's Toll -> r22", ["yps", "The Reaper's Toll"], "r22");
  addRecipe("r22 -> Widowmaker", ["vps", "r22", "6sw", "isc"], "Widowmaker", L100());
  addRecipe("Widowmaker -> r20", ["yps", "Widowmaker"], "r20");
  addRecipe("r22 -> Bloodraven's Charge", ["vps", "r22", "amb", "isc"], "Bloodraven's Charge", L100());
  addRecipe("Bloodraven's Charge -> r20", ["yps", "Bloodraven's Charge"], "r20");
  addRecipe("r30 -> Griffon's Eye", ["vps", "r30", "ci3", "isc"], "Griffon's Eye", L100());
  addRecipe("Griffon's Eye -> r29", ["yps", "Griffon's Eye"], "r29");
  addRecipe("r23 -> Thunderstroke", ["vps", "r23", "amf", "isc"], "Thunderstroke", L100());
  addRecipe("Thunderstroke -> r22", ["yps", "Thunderstroke"], "r22");
  addRecipe("r25 -> Boneflame", ["vps", "r25", "nee", "isc"], "Boneflame", L100());
  addRecipe("Boneflame -> r23", ["yps", "Boneflame"], "r23");
  addRecipe("r26 -> Nightwing's Veil", ["vps", "r26", "uhm", "r24"], "Nightwing's Veil", L100());
  addRecipe("Nightwing's Veil -> r25", ["yps", "Nightwing's Veil"], "r25");
  addRecipe("r27 -> Crown of Ages", ["vps", "r27", "urn", "isc"], "Crown of Ages", L100());
  addRecipe("Crown of Ages -> r26", ["yps", "Crown of Ages"], "r26");
  addRecipe("r31 -> Andariel's Visage,eth", ["vps", "r31", "usk", "r30"], "Andariel's Visage,eth", L100());
  addRecipe("Andariel's Visage,eth -> r31", ["yps", "Andariel's Visage,eth"], "r31");
  addRecipe("r25 -> Andariel's Visage", ["vps", "r25", "usk", "isc"], "Andariel's Visage", L100());
  addRecipe("Andariel's Visage -> r24", ["yps", "Andariel's Visage"], "r24");
  addRecipe("r24 -> Dragonscale", ["vps", "r24", "pae", "r23"], "Dragonscale", L100());
  addRecipe("Dragonscale -> r24", ["yps", "Dragonscale"], "r24");
  addRecipe("r22 -> Ravenlore", ["vps", "r22", "dre", "isc"], "Ravenlore", L100());
  addRecipe("Ravenlore -> r21", ["yps", "Ravenlore"], "r21");
  addRecipe("r22 -> Boneshade", ["vps", "r22", "7bw", "isc"], "Boneshade", L100());
  addRecipe("Boneshade -> r21", ["yps", "Boneshade"], "r21");
  addRecipe("r28 -> Fathom", ["vps", "r28", "obf", "isc"], "Fathom", L100());
  addRecipe("Fathom -> r27", ["yps", "Fathom"], "r27");
  addRecipe("r23 -> Wolfhowl", ["vps", "r23", "bac", "isc"], "Wolfhowl", L100());
  addRecipe("Wolfhowl -> r22", ["yps", "Wolfhowl"], "r22");
  addRecipe("r27 -> Kira's Guardian", ["vps", "r27", "ci2", "isc"], "Kira's Guardian", L100());
  addRecipe("Kira's Guardian -> r26", ["yps", "Kira's Guardian"], "r26");
  addRecipe("r23 -> Ormus' Robes", ["vps", "r23", "uui", "isc"], "Ormus' Robes", L100());
  addRecipe("Ormus' Robes -> r22", ["yps", "Ormus' Robes"], "r22");
  addRecipe("r23 -> Gheed's Fortune", ["vps", "r23", "cm3", "isc"], "Gheed's Fortune", L100());
  addRecipe("Gheed's Fortune -> r22", ["yps", "Gheed's Fortune"], "r22");
  addRecipe("r24 -> Stormlash", ["vps", "r24", "7fl", "r23"], "Stormlash", L100());
  addRecipe("Stormlash -> r24", ["yps", "Stormlash"], "r24");
  addRecipe("r24 -> Dracul's Grasp", ["vps", "r24", "uvg", "isc"], "Dracul's Grasp", L100());
  addRecipe("Dracul's Grasp -> r23", ["yps", "Dracul's Grasp"], "r23");
  addRecipe("r24 -> Templar's Might", ["vps", "r24", "uar", "r23"], "Templar's Might", L100());
  addRecipe("Templar's Might -> r24", ["yps", "Templar's Might"], "r24");
  addRecipe("r24 -> Eschuta's temper", ["vps", "r24", "obc", "r23"], "Eschuta's temper", L100());
  addRecipe("Eschuta's temper -> r24", ["yps", "Eschuta's temper"], "r24");
  addRecipe("r24 -> Sandstorm Trek", ["vps", "r24", "uvb", "isc"], "Sandstorm Trek", L100());
  addRecipe("Sandstorm Trek -> r23", ["yps", "Sandstorm Trek"], "r23");
  addRecipe("r24 -> Marrowwalk", ["vps", "r24", "umb", "isc"], "Marrowwalk", L100());
  addRecipe("Marrowwalk -> r23", ["yps", "Marrowwalk"], "r23");
  addRecipe("r24 -> Heaven's Light", ["vps", "r24", "7sc", "r21"], "Heaven's Light", L100());
  addRecipe("Heaven's Light -> r23", ["yps", "Heaven's Light"], "r23");
  addRecipe("r25 -> Arachnid Mesh", ["vps", "r25", "ulc", "isc"], "Arachnid Mesh", L100());
  addRecipe("Arachnid Mesh -> r24", ["yps", "Arachnid Mesh"], "r24");
  addRecipe("r25 -> Metalgrid", ["vps", "r25", "amu", "isc"], "Metalgrid", L100());
  addRecipe("Metalgrid -> r23", ["yps", "Metalgrid"], "r23");
  addRecipe("r24 -> Verdugo's Hearty Cord", ["vps", "r24", "umc", "isc"], "Verdugo's Hearty Cord", L100());
  addRecipe("Verdugo's Hearty Cord -> r23", ["yps", "Verdugo's Hearty Cord"], "r23");
  addRecipe("r20 -> Carrion Wind", ["vps", "r20", "rin", "r19"], "Carrion Wind", L100());
  addRecipe("Carrion Wind -> r18", ["yps", "Carrion Wind"], "r18");
  addRecipe("r26 -> Giantskull", ["vps", "r26", "uh9", "isc"], "Giantskull", L100());
  addRecipe("Giantskull -> r24", ["yps", "Giantskull"], "r24");
  addRecipe("r24 -> Ironward", ["vps", "r24", "7ws", "isc"], "Ironward", L100());
  addRecipe("Ironward -> r23", ["yps", "Ironward"], "r23");
  addRecipe("r23 -> Arioc's Needle", ["vps", "r23", "7sr", "isc"], "Arioc's Needle", L100());
  addRecipe("Arioc's Needle -> r22", ["yps", "Arioc's Needle"], "r22");
  addRecipe("r24 -> Bonehew", ["vps", "r24", "7o7", "isc"], "Bonehew", L100());
  addRecipe("Bonehew -> r23", ["yps", "Bonehew"], "r23");
  addRecipe("r23 -> Ondal's Wisdom", ["vps", "r23", "6cs", "isc"], "Ondal's Wisdom", L100());
  addRecipe("Ondal's Wisdom -> r22", ["yps", "Ondal's Wisdom"], "r22");
  addRecipe("r24 -> The Reedeemer", ["vps", "r24", "7sc", "isc"], "The Reedeemer", L100());
  addRecipe("The Reedeemer -> r23", ["yps", "The Reedeemer"], "r23");
  addRecipe("r24 -> Headhunter's Glory", ["vps", "r24", "ush", "isc"], "Headhunter's Glory", L100());
  addRecipe("Headhunter's Glory -> r23", ["yps", "Headhunter's Glory"], "r23");
  addRecipe("r27 -> Steelrend", ["vps", "r27", "uhg", "isc"], "Steelrend", L100());
  addRecipe("Steelrend -> r26", ["yps", "Steelrend"], "r26");
  addRecipe("r27 -> Ars Al'Diablolos", ["vps", "r27", "waf", "isc"], "Ars Al'Diablolos", L100());
  addRecipe("Ars Al'Diablolos -> r26", ["yps", "Ars Al'Diablolos"], "r26");
  addRecipe("r27 -> Ars Tor'Baalos", ["vps", "r27", "wae", "isc"], "Ars Tor'Baalos", L100());
  addRecipe("Ars Tor'Baalos -> r26", ["yps", "Ars Tor'Baalos"], "r26");
  addRecipe("r27 -> Ars Dul'Mephistos", ["vps", "r27", "wac", "isc"], "Ars Dul'Mephistos", L100());
  addRecipe("Ars Dul'Mephistos -> r26", ["yps", "Ars Dul'Mephistos"], "r26");
  addRecipe("r24 -> Measured Wrath", ["vps", "r24", "wa6", "r23"], "Measured Wrath", L100());
  addRecipe("Measured Wrath -> r24", ["yps", "Measured Wrath"], "r24");
  addRecipe("r26 -> Dreadfang", ["vps", "r26", "72h", "isc"], "Dreadfang", L100());
  addRecipe("Dreadfang -> r25", ["yps", "Dreadfang"], "r25");
  addRecipe("r22 -> Wraithstep", ["vps", "r22", "utb", "isc"], "Wraithstep", L100());
  addRecipe("Wraithstep -> r21", ["yps", "Wraithstep"], "r21");
  addRecipe("r23 -> Bloodpact Shard", ["vps", "r23", "7di", "isc"], "Bloodpact Shard", L100());
  addRecipe("Bloodpact Shard -> r22", ["yps", "Bloodpact Shard"], "r22");
  addRecipe("r29 -> Sling", ["vps", "r29", "rin", "r26"], "Sling", L100());
  addRecipe("Sling -> r28", ["yps", "Sling"], "r28");
  addRecipe("r29 -> Opalvein", ["vps", "r29", "rin", "isc"], "Opalvein", L100());
  addRecipe("Opalvein -> r28", ["yps", "Opalvein"], "r28");
  addRecipe("r30 -> Entropy Locket", ["vps", "r30", "amu", "isc"], "Entropy Locket", L100());
  addRecipe("Entropy Locket -> r29", ["yps", "Entropy Locket"], "r29");
  addRecipe("r24 -> Gheed's Wager", ["vps", "r24", "utc", "r23"], "Gheed's Wager", L100());
  addRecipe("Gheed's Wager -> r24", ["yps", "Gheed's Wager"], "r24");
  addRecipe("r30 -> Unique Warlock Helm", ["vps", "r30", "xsk", "isc"], "Unique Warlock Helm", L100());
  addRecipe("Unique Warlock Helm -> r29", ["yps", "Unique Warlock Helm"], "r29");
  addRecipe("r29 -> Crafted Cold Rupture", ["vps", "r29", "cm3", "gpb"], "Crafted Cold Rupture", L100());
  addRecipe("Crafted Cold Rupture -> r28", ["yps", "Crafted Cold Rupture"], "r28");
  addRecipe("r29 -> Crafted Flame Rift", ["vps", "r29", "cm3", "gpr"], "Crafted Flame Rift", L100());
  addRecipe("Crafted Flame Rift -> r28", ["yps", "Crafted Flame Rift"], "r28");
  addRecipe("r29 -> Crafted Crack of the Heavens", ["vps", "r29", "cm3", "gpw"], "Crafted Crack of the Heavens", L100());
  addRecipe("Crafted Crack of the Heavens -> r28", ["yps", "Crafted Crack of the Heavens"], "r28");
  addRecipe("r29 -> Crafted Rotting Fissure", ["vps", "r29", "cm3", "gpg"], "Crafted Rotting Fissure", L100());
  addRecipe("Crafted Rotting Fissure -> r28", ["yps", "Crafted Rotting Fissure"], "r28");
  addRecipe("r29 -> Crafted Bone Break", ["vps", "r29", "cm3", "skz"], "Crafted Bone Break", L100());
  addRecipe("Crafted Bone Break -> r28", ["yps", "Crafted Bone Break"], "r28");
  addRecipe("r29 -> Crafted Black Cleft", ["vps", "r29", "cm3", "gpv"], "Crafted Black Cleft", L100());
  addRecipe("Crafted Black Cleft -> r28", ["yps", "Crafted Black Cleft"], "r28");
  addRecipe("r24 -> toa", ["vps", "r24", "wms", "isc"], "toa", L100());
  addRecipe("toa -> r23", ["yps", "toa"], "r23");

  // NEW: Ethereal Unique Weapons (premium eth variants)
  addRecipe("Buy Eth Titan's Revenge", ["r31", "am7", "vps", "isc"], "am7,uni,eth", L100());
  addRecipe("Sell Eth Titan's Revenge", ["am7,uni,eth", "yps"], "r30");
  addRecipe("Buy Eth Death's Web", ["r31", "7gw", "vps", "isc"], "7gw,uni,eth", L100());
  addRecipe("Sell Eth Death's Web", ["7gw,uni,eth", "yps"], "r30");
  addRecipe("Buy Eth Tomb Reaver", ["r28", "7cr", "vps", "tsc"], "7cr,uni,eth", L100());
  addRecipe("Sell Eth Tomb Reaver", ["7cr,uni,eth", "yps"], "r27");
  addRecipe("Buy Eth Death Cleaver", ["r27", "72a", "vps", "tsc"], "72a,uni,eth", L100());
  addRecipe("Sell Eth Death Cleaver", ["72a,uni,eth", "yps"], "r26");
  addRecipe("Buy Eth Reaper's Toll", ["r27", "7s8", "vps", "tsc"], "7s8,uni,eth", L100());
  addRecipe("Sell Eth Reaper's Toll", ["7s8,uni,eth", "yps"], "r26");
  addRecipe("Buy Eth Sandstorm Trek", ["r25", "xtb", "vps", "tsc"], "xtb,uni,eth", L100());
  addRecipe("Sell Eth Sandstorm Trek", ["xtb,uni,eth", "yps"], "r24");
  addRecipe("Buy Eth Gladiator's Bane", ["r23", "upl", "vps", "tsc"], "upl,uni,eth", L100());
  addRecipe("Sell Eth Gladiator's Bane", ["upl,uni,eth", "yps"], "r22");
  addRecipe("Buy Eth Duriel's Shell", ["r25", "upl", "vps", "isc"], "upl,uni,eth", L100());
  addRecipe("Sell Eth Duriel's Shell", ["upl,uni,eth", "yps"], "r24");
  addRecipe("Buy Eth Herald of Zakarum", ["r28", "paf", "vps", "isc"], "paf,uni,eth", L100());
  addRecipe("Sell Eth Herald of Zakarum", ["paf,uni,eth", "yps"], "r27");
  addRecipe("Buy Eth Shaftstop", ["r23", "ult", "vps", "tsc"], "ult,uni,eth", L100());
  addRecipe("Sell Eth Shaftstop", ["ult,uni,eth", "yps"], "r22");
  addRecipe("Buy Eth Hone Sundan", ["r22", "7s7", "vps", "isc"], "7s7,uni,eth", L100());
  addRecipe("Sell Eth Hone Sundan", ["7s7,uni,eth", "yps"], "r21");
}

// ============================================================
// JUNK ITEM MARKET
// ============================================================
if (config.junkMarket) {
  addRecipe("r21 -> Civerb's Ward", ["vps", "r21", "lrg", "tsc"], "Civerb's Ward", L100());
  addRecipe("Civerb's Ward -> gpg", ["yps", "Civerb's Ward"], "gpg");
  addRecipe("r21 -> Civerb's Icon", ["vps", "r21", "amu", "glv"], "Civerb's Icon", L100());
  addRecipe("Civerb's Icon -> gpg", ["yps", "Civerb's Icon"], "gpg");
  addRecipe("r21 -> Civerb's Cudgel", ["vps", "r21", "gsc", "tsc"], "Civerb's Cudgel", L100());
  addRecipe("Civerb's Cudgel -> gpg", ["yps", "Civerb's Cudgel"], "gpg");
  addRecipe("r21 -> Hsarus' Iron Heel", ["vps", "r21", "mbt", "tsc"], "Hsarus' Iron Heel", L100());
  addRecipe("Hsarus' Iron Heel -> gpg", ["yps", "Hsarus' Iron Heel"], "gpg");
  addRecipe("r21 -> Hsarus' Iron Fist", ["vps", "r21", "buc", "tsc"], "Hsarus' Iron Fist", L100());
  addRecipe("Hsarus' Iron Fist -> gpg", ["yps", "Hsarus' Iron Fist"], "gpg");
  addRecipe("r21 -> Hsarus' Iron Stay", ["vps", "r21", "mbl", "tsc"], "Hsarus' Iron Stay", L100());
  addRecipe("Hsarus' Iron Stay -> gpg", ["yps", "Hsarus' Iron Stay"], "gpg");
  addRecipe("r21 -> Cleglaw's Tooth", ["vps", "r21", "lsd", "tsc"], "Cleglaw's Tooth", L100());
  addRecipe("Cleglaw's Tooth -> gpg", ["yps", "Cleglaw's Tooth"], "gpg");
  addRecipe("r21 -> Cleglaw's Claw", ["vps", "r21", "sml", "tsc"], "Cleglaw's Claw", L100());
  addRecipe("Cleglaw's Claw -> gpg", ["yps", "Cleglaw's Claw"], "gpg");
  addRecipe("r21 -> Cleglaw's Pincers", ["vps", "r21", "mgl", "tsc"], "Cleglaw's Pincers", L100());
  addRecipe("Cleglaw's Pincers -> gpg", ["yps", "Cleglaw's Pincers"], "gpg");
  addRecipe("r21 -> Iratha's Collar", ["vps", "r21", "amu", "glr"], "Iratha's Collar", L100());
  addRecipe("Iratha's Collar -> gpg", ["yps", "Iratha's Collar"], "gpg");
  addRecipe("r21 -> Iratha's Cuff", ["vps", "r21", "tgl", "tsc"], "Iratha's Cuff", L100());
  addRecipe("Iratha's Cuff -> gpg", ["yps", "Iratha's Cuff"], "gpg");
  addRecipe("r21 -> Iratha's Coil", ["vps", "r21", "crn", "tsc"], "Iratha's Coil", L100());
  addRecipe("Iratha's Coil -> gpg", ["yps", "Iratha's Coil"], "gpg");
  addRecipe("r21 -> Iratha's Cord", ["vps", "r21", "tbl", "tsc"], "Iratha's Cord", L100());
  addRecipe("Iratha's Cord -> gpg", ["yps", "Iratha's Cord"], "gpg");
  addRecipe("r21 -> Isenhart's Lightbrand", ["vps", "r21", "bsd", "tsc"], "Isenhart's Lightbrand", L100());
  addRecipe("Isenhart's Lightbrand -> gpg", ["yps", "Isenhart's Lightbrand"], "gpg");
  addRecipe("r21 -> Isenhart's Parry", ["vps", "r21", "gts", "tsc"], "Isenhart's Parry", L100());
  addRecipe("Isenhart's Parry -> gpg", ["yps", "Isenhart's Parry"], "gpg");
  addRecipe("r21 -> Isenhart's Case", ["vps", "r21", "brs", "tsc"], "Isenhart's Case", L100());
  addRecipe("Isenhart's Case -> gpg", ["yps", "Isenhart's Case"], "gpg");
  addRecipe("r21 -> Isenhart's Horns", ["vps", "r21", "fhl", "tsc"], "Isenhart's Horns", L100());
  addRecipe("Isenhart's Horns -> gpg", ["yps", "Isenhart's Horns"], "gpg");
  addRecipe("r21 -> Vidala's Barb", ["vps", "r21", "lbb", "glb"], "Vidala's Barb", L100());
  addRecipe("Vidala's Barb -> gpg", ["yps", "Vidala's Barb"], "gpg");
  addRecipe("r21 -> Vidala's Fetlock", ["vps", "r21", "tbt", "tsc"], "Vidala's Fetlock", L100());
  addRecipe("Vidala's Fetlock -> gpg", ["yps", "Vidala's Fetlock"], "gpg");
  addRecipe("r21 -> Vidala's Ambush", ["vps", "r21", "lea", "tsc"], "Vidala's Ambush", L100());
  addRecipe("Vidala's Ambush -> gpg", ["yps", "Vidala's Ambush"], "gpg");
  addRecipe("r21 -> Vidala's Snare", ["vps", "r21", "amu", "tsc"], "Vidala's Snare", L100());
  addRecipe("Vidala's Snare -> gpg", ["yps", "Vidala's Snare"], "gpg");
  addRecipe("r21 -> Milabrega's Orb", ["vps", "r21", "kit", "tsc"], "Milabrega's Orb", L100());
  addRecipe("Milabrega's Orb -> gpg", ["yps", "Milabrega's Orb"], "gpg");
  addRecipe("r21 -> Milabrega's Rod", ["vps", "r21", "wsp", "tsc"], "Milabrega's Rod", L100());
  addRecipe("Milabrega's Rod -> gpg", ["yps", "Milabrega's Rod"], "gpg");
  addRecipe("r19 -> Milabrega's Diadem", ["vps", "r19", "crn", "tsc"], "Milabrega's Diadem", L100());
  addRecipe("Milabrega's Diadem -> gpg", ["yps", "Milabrega's Diadem"], "gpg");
  addRecipe("r21 -> Milabrega's Robe", ["vps", "r21", "aar", "tsc"], "Milabrega's Robe", L100());
  addRecipe("Milabrega's Robe -> gpg", ["yps", "Milabrega's Robe"], "gpg");
  addRecipe("r21 -> Cathan's Rule", ["vps", "r21", "bst", "gly"], "Cathan's Rule", L100());
  addRecipe("Cathan's Rule -> gpg", ["yps", "Cathan's Rule"], "gpg");
  addRecipe("r21 -> Cathan's Mesh", ["vps", "r21", "chn", "tsc"], "Cathan's Mesh", L100());
  addRecipe("Cathan's Mesh -> gpg", ["yps", "Cathan's Mesh"], "gpg");
  addRecipe("r21 -> Cathan's Visage", ["vps", "r21", "msk", "tsc"], "Cathan's Visage", L100());
  addRecipe("Cathan's Visage -> gpg", ["yps", "Cathan's Visage"], "gpg");
  addRecipe("r21 -> Cathan's Sigil", ["vps", "r21", "amu", "gly"], "Cathan's Sigil", L100());
  addRecipe("Cathan's Sigil -> gpg", ["yps", "Cathan's Sigil"], "gpg");
  addRecipe("r21 -> Cathan's Seal", ["vps", "r21", "rin", "tsc"], "Cathan's Seal", L100());
  addRecipe("Cathan's Seal -> gpg", ["yps", "Cathan's Seal"], "gpg");
  addRecipe("r21 -> Tancred's Crowbill", ["vps", "r21", "mpi", "tsc"], "Tancred's Crowbill", L100());
  addRecipe("Tancred's Crowbill -> gpg", ["yps", "Tancred's Crowbill"], "gpg");
  addRecipe("r21 -> Tancred's Spine", ["vps", "r21", "ful", "tsc"], "Tancred's Spine", L100());
  addRecipe("Tancred's Spine -> gpg", ["yps", "Tancred's Spine"], "gpg");
  addRecipe("r21 -> Tancred's Hobnails", ["vps", "r21", "lbt", "tsc"], "Tancred's Hobnails", L100());
  addRecipe("Tancred's Hobnails -> gpg", ["yps", "Tancred's Hobnails"], "gpg");
  addRecipe("r21 -> Tancred's Weird", ["vps", "r21", "amu", "glw"], "Tancred's Weird", L100());
  addRecipe("Tancred's Weird -> gpg", ["yps", "Tancred's Weird"], "gpg");
  addRecipe("r21 -> Tancred's Skull", ["vps", "r21", "bhm", "tsc"], "Tancred's Skull", L100());
  addRecipe("Tancred's Skull -> gpg", ["yps", "Tancred's Skull"], "gpg");
  addRecipe("r21 -> Sigon's Gage", ["vps", "r21", "hgl", "tsc"], "Sigon's Gage", L100());
  addRecipe("Sigon's Gage -> gpg", ["yps", "Sigon's Gage"], "gpg");
  addRecipe("r21 -> Sigon's Visor", ["vps", "r21", "ghm", "tsc"], "Sigon's Visor", L100());
  addRecipe("Sigon's Visor -> gpg", ["yps", "Sigon's Visor"], "gpg");
  addRecipe("r21 -> Sigon's Shelter", ["vps", "r21", "gth", "tsc"], "Sigon's Shelter", L100());
  addRecipe("Sigon's Shelter -> gpg", ["yps", "Sigon's Shelter"], "gpg");
  addRecipe("r21 -> Sigon's Sabot", ["vps", "r21", "hbt", "tsc"], "Sigon's Sabot", L100());
  addRecipe("Sigon's Sabot -> gpg", ["yps", "Sigon's Sabot"], "gpg");
  addRecipe("r21 -> Sigon's Wrap", ["vps", "r21", "hbl", "tsc"], "Sigon's Wrap", L100());
  addRecipe("Sigon's Wrap -> gpg", ["yps", "Sigon's Wrap"], "gpg");
  addRecipe("r21 -> Sigon's Guard", ["vps", "r21", "tow", "tsc"], "Sigon's Guard", L100());
  addRecipe("Sigon's Guard -> gpg", ["yps", "Sigon's Guard"], "gpg");
  addRecipe("r21 -> Infernal Cranium", ["vps", "r21", "cap", "tsc"], "Infernal Cranium", L100());
  addRecipe("Infernal Cranium -> gpg", ["yps", "Infernal Cranium"], "gpg");
  addRecipe("r21 -> Infernal Torch", ["vps", "r21", "gwn", "tsc"], "Infernal Torch", L100());
  addRecipe("Infernal Torch -> gpg", ["yps", "Infernal Torch"], "gpg");
  addRecipe("r20 -> Infernal Sign", ["vps", "r20", "tbl", "tsc"], "Infernal Sign", L100());
  addRecipe("Infernal Sign -> gpg", ["yps", "Infernal Sign"], "gpg");
  addRecipe("r21 -> Berserker's Headgear", ["vps", "r21", "hlm", "tsc"], "Berserker's Headgear", L100());
  addRecipe("Berserker's Headgear -> gpg", ["yps", "Berserker's Headgear"], "gpg");
  addRecipe("r21 -> Berserker's Hauberk", ["vps", "r21", "spl", "tsc"], "Berserker's Hauberk", L100());
  addRecipe("Berserker's Hauberk -> gpg", ["yps", "Berserker's Hauberk"], "gpg");
  addRecipe("r21 -> Berserker's Hatchet", ["vps", "r21", "2ax", "tsc"], "Berserker's Hatchet", L100());
  addRecipe("Berserker's Hatchet -> gpg", ["yps", "Berserker's Hatchet"], "gpg");
  addRecipe("r21 -> Death's Hand", ["vps", "r21", "lgl", "tsc"], "Death's Hand", L100());
  addRecipe("Death's Hand -> gpg", ["yps", "Death's Hand"], "gpg");
  addRecipe("r21 -> Death's Guard", ["vps", "r21", "lbl", "tsc"], "Death's Guard", L100());
  addRecipe("Death's Guard -> gpg", ["yps", "Death's Guard"], "gpg");
  addRecipe("r21 -> Death's Touch", ["vps", "r21", "wsd", "tsc"], "Death's Touch", L100());
  addRecipe("Death's Touch -> gpg", ["yps", "Death's Touch"], "gpg");
  addRecipe("r21 -> Angelic Sickle", ["vps", "r21", "sbr", "tsc"], "Angelic Sickle", L100());
  addRecipe("Angelic Sickle -> gpg", ["yps", "Angelic Sickle"], "gpg");
  addRecipe("r21 -> Angelic Mantle", ["vps", "r21", "rng", "tsc"], "Angelic Mantle", L100());
  addRecipe("Angelic Mantle -> gpg", ["yps", "Angelic Mantle"], "gpg");
  addRecipe("r20 -> Angelic Halo", ["vps", "r20", "rin", "tsc"], "Angelic Halo", L100());
  addRecipe("Angelic Halo -> gpg", ["yps", "Angelic Halo"], "gpg");
  addRecipe("r19 -> Angelic Wings", ["vps", "r19", "amu", "gpw"], "Angelic Wings", L100());
  addRecipe("Angelic Wings -> gpg", ["yps", "Angelic Wings"], "gpg");
  addRecipe("r21 -> Arctic Horn", ["vps", "r21", "swb", "tsc"], "Arctic Horn", L100());
  addRecipe("Arctic Horn -> gpg", ["yps", "Arctic Horn"], "gpg");
  addRecipe("r21 -> Arctic Furs", ["vps", "r21", "qui", "tsc"], "Arctic Furs", L100());
  addRecipe("Arctic Furs -> gpg", ["yps", "Arctic Furs"], "gpg");
  addRecipe("r21 -> Arctic Binding", ["vps", "r21", "vbl", "tsc"], "Arctic Binding", L100());
  addRecipe("Arctic Binding -> gpg", ["yps", "Arctic Binding"], "gpg");
  addRecipe("r20 -> Arctic Mitts", ["vps", "r20", "tgl", "tsc"], "Arctic Mitts", L100());
  addRecipe("Arctic Mitts -> gpg", ["yps", "Arctic Mitts"], "gpg");
  addRecipe("r20 -> Arcanna's Sign", ["vps", "r20", "amu", "tsc"], "Arcanna's Sign", L100());
  addRecipe("Arcanna's Sign -> gpg", ["yps", "Arcanna's Sign"], "gpg");
  addRecipe("r21 -> Arcanna's Deathwand", ["vps", "r21", "wst", "tsc"], "Arcanna's Deathwand", L100());
  addRecipe("Arcanna's Deathwand -> gpg", ["yps", "Arcanna's Deathwand"], "gpg");
  addRecipe("r21 -> Arcanna's Head", ["vps", "r21", "skp", "tsc"], "Arcanna's Head", L100());
  addRecipe("Arcanna's Head -> gpg", ["yps", "Arcanna's Head"], "gpg");
  addRecipe("r21 -> Arcanna's Flesh", ["vps", "r21", "ltp", "tsc"], "Arcanna's Flesh", L100());
  addRecipe("Arcanna's Flesh -> gpg", ["yps", "Arcanna's Flesh"], "gpg");
  addRecipe("r21 -> Natalya's Shadow", ["vps", "r21", "ucl", "tsc"], "Natalya's Shadow", L100());
  addRecipe("Natalya's Shadow -> gpg", ["yps", "Natalya's Shadow"], "gpg");
  addRecipe("r21 -> Aldur's Stony Gaze", ["vps", "r21", "dr8", "tsc"], "Aldur's Stony Gaze", L100());
  addRecipe("Aldur's Stony Gaze -> gpg", ["yps", "Aldur's Stony Gaze"], "gpg");
  addRecipe("r21 -> Aldur's Deception", ["vps", "r21", "uul", "tsc"], "Aldur's Deception", L100());
  addRecipe("Aldur's Deception -> gpg", ["yps", "Aldur's Deception"], "gpg");
  addRecipe("r21 -> Aldur's Gauntlet", ["vps", "r21", "9mt", "tsc"], "Aldur's Gauntlet", L100());
  addRecipe("Aldur's Gauntlet -> gpg", ["yps", "Aldur's Gauntlet"], "gpg");
  addRecipe("r21 -> Immortal King's Detail", ["vps", "r21", "zhb", "tsc"], "Immortal King's Detail", L100());
  addRecipe("Immortal King's Detail -> gpg", ["yps", "Immortal King's Detail"], "gpg");
  addRecipe("r21 -> Immortal King's Forge", ["vps", "r21", "xhg", "tsc"], "Immortal King's Forge", L100());
  addRecipe("Immortal King's Forge -> gpg", ["yps", "Immortal King's Forge"], "gpg");
  addRecipe("r21 -> Immortal King's Pillar", ["vps", "r21", "xhb", "tsc"], "Immortal King's Pillar", L100());
  addRecipe("Immortal King's Pillar -> gpg", ["yps", "Immortal King's Pillar"], "gpg");
  addRecipe("r21 -> Immortal King's Stone Crusher", ["vps", "r21", "7m7", "tsc"], "Immortal King's Stone Crusher", L100());
  addRecipe("Immortal King's Stone Crusher -> gpg", ["yps", "Immortal King's Stone Crusher"], "gpg");
  addRecipe("r21 -> Griswold's Heart", ["vps", "r21", "xar", "tsc"], "Griswold's Heart", L100());
  addRecipe("Griswold's Heart -> gpg", ["yps", "Griswold's Heart"], "gpg");
  addRecipe("r21 -> Trang-Oul's Scales", ["vps", "r21", "xul", "tsc"], "Trang-Oul's Scales", L100());
  addRecipe("Trang-Oul's Scales -> gpg", ["yps", "Trang-Oul's Scales"], "gpg");
  addRecipe("r21 -> M'avina's Embrace", ["vps", "r21", "uld", "tsc"], "M'avina's Embrace", L100());
  addRecipe("M'avina's Embrace -> gpg", ["yps", "M'avina's Embrace"], "gpg");
  addRecipe("r21 -> M'avina's Icy Clutch", ["vps", "r21", "xtg", "tsc"], "M'avina's Icy Clutch", L100());
  addRecipe("M'avina's Icy Clutch -> gpg", ["yps", "M'avina's Icy Clutch"], "gpg");
  addRecipe("r21 -> M'avina's Tenet", ["vps", "r21", "zvb", "tsc"], "M'avina's Tenet", L100());
  addRecipe("M'avina's Tenet -> gpg", ["yps", "M'avina's Tenet"], "gpg");
  addRecipe("r19 -> Telling of Beads", ["vps", "r19", "amu", "tsc"], "Telling of Beads", L100());
  addRecipe("Telling of Beads -> gpg", ["yps", "Telling of Beads"], "gpg");
  addRecipe("r21 -> Laying of Hands", ["vps", "r21", "ulg", "tsc"], "Laying of Hands", L100());
  addRecipe("Laying of Hands -> gpg", ["yps", "Laying of Hands"], "gpg");
  addRecipe("r21 -> Rite of Passage", ["vps", "r21", "xlb", "tsc"], "Rite of Passage", L100());
  addRecipe("Rite of Passage -> gpg", ["yps", "Rite of Passage"], "gpg");
  addRecipe("r21 -> Spiritual Custodian", ["vps", "r21", "uui", "tsc"], "Spiritual Custodian", L100());
  addRecipe("Spiritual Custodian -> gpg", ["yps", "Spiritual Custodian"], "gpg");
  addRecipe("r21 -> Credendum", ["vps", "r21", "umc", "tsc"], "Credendum", L100());
  addRecipe("Credendum -> gpg", ["yps", "Credendum"], "gpg");
  addRecipe("r21 -> Dangoon's Teaching", ["vps", "r21", "7ma", "tsc"], "Dangoon's Teaching", L100());
  addRecipe("Dangoon's Teaching -> gpg", ["yps", "Dangoon's Teaching"], "gpg");
  addRecipe("r21 -> Heaven's Taebaek", ["vps", "r21", "uts", "tsc"], "Heaven's Taebaek", L100());
  addRecipe("Heaven's Taebaek -> gpg", ["yps", "Heaven's Taebaek"], "gpg");
  addRecipe("r21 -> Haemosu's Adament", ["vps", "r21", "xrs", "tsc"], "Haemosu's Adament", L100());
  addRecipe("Haemosu's Adament -> gpg", ["yps", "Haemosu's Adament"], "gpg");
  addRecipe("r21 -> Ondal's Almighty", ["vps", "r21", "uhm", "tsc"], "Ondal's Almighty", L100());
  addRecipe("Ondal's Almighty -> gpg", ["yps", "Ondal's Almighty"], "gpg");
  addRecipe("r21 -> Wilhelm's Pride", ["vps", "r21", "ztb", "tsc"], "Wilhelm's Pride", L100());
  addRecipe("Wilhelm's Pride -> gpg", ["yps", "Wilhelm's Pride"], "gpg");
  addRecipe("r21 -> Magnus' Skin", ["vps", "r21", "xvg", "tsc"], "Magnus' Skin", L100());
  addRecipe("Magnus' Skin -> gpg", ["yps", "Magnus' Skin"], "gpg");
  addRecipe("r21 -> Wihtstan's Guard", ["vps", "r21", "xml", "tsc"], "Wihtstan's Guard", L100());
  addRecipe("Wihtstan's Guard -> gpg", ["yps", "Wihtstan's Guard"], "gpg");
  addRecipe("r20 -> Hwanin's Splendor", ["vps", "r20", "xrn", "tsc"], "Hwanin's Splendor", L100());
  addRecipe("Hwanin's Splendor -> gpg", ["yps", "Hwanin's Splendor"], "gpg");
  addRecipe("r21 -> Hwanin's Refuge", ["vps", "r21", "xcl", "tsc"], "Hwanin's Refuge", L100());
  addRecipe("Hwanin's Refuge -> gpg", ["yps", "Hwanin's Refuge"], "gpg");
  addRecipe("r20 -> Hwanin's Seal", ["vps", "r20", "mbl", "tsc"], "Hwanin's Seal", L100());
  addRecipe("Hwanin's Seal -> gpg", ["yps", "Hwanin's Seal"], "gpg");
  addRecipe("r21 -> Hwanin's Justice", ["vps", "r21", "9vo", "tsc"], "Hwanin's Justice", L100());
  addRecipe("Hwanin's Justice -> gpg", ["yps", "Hwanin's Justice"], "gpg");
  addRecipe("r21 -> Sazabi's Cobalt Redeemer", ["vps", "r21", "7ls", "tsc"], "Sazabi's Cobalt Redeemer", L100());
  addRecipe("Sazabi's Cobalt Redeemer -> gpg", ["yps", "Sazabi's Cobalt Redeemer"], "gpg");
  addRecipe("r21 -> Sazabi's Ghost Liberator", ["vps", "r21", "upl", "tsc"], "Sazabi's Ghost Liberator", L100());
  addRecipe("Sazabi's Ghost Liberator -> gpg", ["yps", "Sazabi's Ghost Liberator"], "gpg");
  addRecipe("r21 -> Sazabi's Mental Sheath", ["vps", "r21", "xhl", "tsc"], "Sazabi's Mental Sheath", L100());
  addRecipe("Sazabi's Mental Sheath -> gpg", ["yps", "Sazabi's Mental Sheath"], "gpg");
  addRecipe("r21 -> Cow King's Horns", ["vps", "r21", "xap", "tsc"], "Cow King's Horns", L100());
  addRecipe("Cow King's Horns -> gpg", ["yps", "Cow King's Horns"], "gpg");
  addRecipe("r21 -> Cow King's Hide", ["vps", "r21", "stu", "tsc"], "Cow King's Hide", L100());
  addRecipe("Cow King's Hide -> gpg", ["yps", "Cow King's Hide"], "gpg");
  addRecipe("r21 -> Naj's Light Plate", ["vps", "r21", "ult", "tsc"], "Naj's Light Plate", L100());
  addRecipe("Naj's Light Plate -> gpg", ["yps", "Naj's Light Plate"], "gpg");
  addRecipe("r21 -> Naj's Circlet", ["vps", "r21", "ci0", "tsc"], "Naj's Circlet", L100());
  addRecipe("Naj's Circlet -> gpg", ["yps", "Naj's Circlet"], "gpg");
  addRecipe("r20 -> McAuley's Paragon", ["vps", "r20", "cap", "tsc"], "McAuley's Paragon", L100());
  addRecipe("McAuley's Paragon -> gpg", ["yps", "McAuley's Paragon"], "gpg");
  addRecipe("r21 -> McAuley's Riprap", ["vps", "r21", "vbt", "tsc"], "McAuley's Riprap", L100());
  addRecipe("McAuley's Riprap -> gpg", ["yps", "McAuley's Riprap"], "gpg");
  addRecipe("r21 -> McAuley's Taboo", ["vps", "r21", "vgl", "tsc"], "McAuley's Taboo", L100());
  addRecipe("McAuley's Taboo -> gpg", ["yps", "McAuley's Taboo"], "gpg");
  addRecipe("r21 -> McAuley's Superstition", ["vps", "r21", "bwn", "tsc"], "McAuley's Superstition", L100());
  addRecipe("McAuley's Superstition -> gpg", ["yps", "McAuley's Superstition"], "gpg");
  addRecipe("r20 -> Warlord's Lust", ["vps", "r20", "ghm", "tsc"], "Warlord's Lust", L100());
  addRecipe("Warlord's Lust -> gpg", ["yps", "Warlord's Lust"], "gpg");
  addRecipe("r20 -> Warlord's Mantle", ["vps", "r20", "ful", "tsc"], "Warlord's Mantle", L100());
  addRecipe("Warlord's Mantle -> gpg", ["yps", "Warlord's Mantle"], "gpg");
  addRecipe("r20 -> Warlord's Crushers", ["vps", "r20", "hbt", "tsc"], "Warlord's Crushers", L100());
  addRecipe("Warlord's Crushers -> gpg", ["yps", "Warlord's Crushers"], "gpg");
  addRecipe("r20 -> Warlord's Authority", ["vps", "r20", "hbl", "tsc"], "Warlord's Authority", L100());
  addRecipe("Warlord's Authority -> gpg", ["yps", "Warlord's Authority"], "gpg");
  addRecipe("r22 -> Bane's Oathmaker", ["vps", "r22", "kri", "tsc"], "Bane's Oathmaker", L100());
  addRecipe("Bane's Oathmaker -> gpg", ["yps", "Bane's Oathmaker"], "gpg");
  addRecipe("r22 -> Bane's Wraithskin", ["vps", "r22", "hla", "tsc"], "Bane's Wraithskin", L100());
  addRecipe("Bane's Wraithskin -> gpg", ["yps", "Bane's Wraithskin"], "gpg");
  addRecipe("r22 -> Bane's Authority", ["vps", "r22", "vbl", "tsc"], "Bane's Authority", L100());
  addRecipe("Bane's Authority -> gpg", ["yps", "Bane's Authority"], "gpg");
  addRecipe("r21 -> The Gnasher", ["vps", "r21", "hax", "isc"], "The Gnasher", L100());
  addRecipe("The Gnasher -> gpy", ["yps", "The Gnasher"], "gpy");
  addRecipe("r21 -> Deathspade", ["vps", "r21", "axe", "isc"], "Deathspade", L100());
  addRecipe("Deathspade -> gpy", ["yps", "Deathspade"], "gpy");
  addRecipe("r21 -> Bladebone", ["vps", "r21", "2ax", "isc"], "Bladebone", L100());
  addRecipe("Bladebone -> gpy", ["yps", "Bladebone"], "gpy");
  addRecipe("r21 -> Mindrend", ["vps", "r21", "mpi", "isc"], "Mindrend", L100());
  addRecipe("Mindrend -> gpy", ["yps", "Mindrend"], "gpy");
  addRecipe("r21 -> Rakescar", ["vps", "r21", "wax", "isc"], "Rakescar", L100());
  addRecipe("Rakescar -> gpy", ["yps", "Rakescar"], "gpy");
  addRecipe("r21 -> Fechmars Axe", ["vps", "r21", "lax", "isc"], "Fechmars Axe", L100());
  addRecipe("Fechmars Axe -> gpy", ["yps", "Fechmars Axe"], "gpy");
  addRecipe("r21 -> Goreshovel", ["vps", "r21", "bax", "isc"], "Goreshovel", L100());
  addRecipe("Goreshovel -> gpy", ["yps", "Goreshovel"], "gpy");
  addRecipe("r21 -> The Chieftan", ["vps", "r21", "btx", "isc"], "The Chieftan", L100());
  addRecipe("The Chieftan -> gpy", ["yps", "The Chieftan"], "gpy");
  addRecipe("r21 -> Brainhew", ["vps", "r21", "gax", "isc"], "Brainhew", L100());
  addRecipe("Brainhew -> gpy", ["yps", "Brainhew"], "gpy");
  addRecipe("r21 -> The Humongous", ["vps", "r21", "gix", "isc"], "The Humongous", L100());
  addRecipe("The Humongous -> gpy", ["yps", "The Humongous"], "gpy");
  addRecipe("r21 -> Maelstromwrath", ["vps", "r21", "ywn", "isc"], "Maelstromwrath", L100());
  addRecipe("Maelstromwrath -> gpy", ["yps", "Maelstromwrath"], "gpy");
  addRecipe("r21 -> Gravenspine", ["vps", "r21", "bwn", "isc"], "Gravenspine", L100());
  addRecipe("Gravenspine -> gpy", ["yps", "Gravenspine"], "gpy");
  addRecipe("r21 -> Umes Lament", ["vps", "r21", "gwn", "isc"], "Umes Lament", L100());
  addRecipe("Umes Lament -> gpy", ["yps", "Umes Lament"], "gpy");
  addRecipe("r21 -> Felloak", ["vps", "r21", "clb", "isc"], "Felloak", L100());
  addRecipe("Felloak -> gpy", ["yps", "Felloak"], "gpy");
  addRecipe("r21 -> Knell Striker", ["vps", "r21", "scp", "isc"], "Knell Striker", L100());
  addRecipe("Knell Striker -> gpy", ["yps", "Knell Striker"], "gpy");
  addRecipe("r21 -> Rusthandle", ["vps", "r21", "gsc", "isc"], "Rusthandle", L100());
  addRecipe("Rusthandle -> gpy", ["yps", "Rusthandle"], "gpy");
  addRecipe("r21 -> Stormeye", ["vps", "r21", "wsp", "isc"], "Stormeye", L100());
  addRecipe("Stormeye -> gpy", ["yps", "Stormeye"], "gpy");
  addRecipe("r21 -> Stoutnail", ["vps", "r21", "spc", "isc"], "Stoutnail", L100());
  addRecipe("Stoutnail -> gpy", ["yps", "Stoutnail"], "gpy");
  addRecipe("r21 -> Crushflange", ["vps", "r21", "mac", "isc"], "Crushflange", L100());
  addRecipe("Crushflange -> gpy", ["yps", "Crushflange"], "gpy");
  addRecipe("r21 -> Bloodrise", ["vps", "r21", "mst", "isc"], "Bloodrise", L100());
  addRecipe("Bloodrise -> gpy", ["yps", "Bloodrise"], "gpy");
  addRecipe("r21 -> The Generals Tan Do Li Ga", ["vps", "r21", "fla", "isc"], "The Generals Tan Do Li Ga", L100());
  addRecipe("The Generals Tan Do Li Ga -> gpy", ["yps", "The Generals Tan Do Li Ga"], "gpy");
  addRecipe("r21 -> Ironstone", ["vps", "r21", "whm", "isc"], "Ironstone", L100());
  addRecipe("Ironstone -> gpy", ["yps", "Ironstone"], "gpy");
  addRecipe("r21 -> Bonesob", ["vps", "r21", "mau", "isc"], "Bonesob", L100());
  addRecipe("Bonesob -> gpy", ["yps", "Bonesob"], "gpy");
  addRecipe("r21 -> Steeldriver", ["vps", "r21", "gma", "isc"], "Steeldriver", L100());
  addRecipe("Steeldriver -> gpy", ["yps", "Steeldriver"], "gpy");
  addRecipe("r21 -> Rixots Keen", ["vps", "r21", "ssd", "isc"], "Rixots Keen", L100());
  addRecipe("Rixots Keen -> gpy", ["yps", "Rixots Keen"], "gpy");
  addRecipe("r21 -> Blood Crescent", ["vps", "r21", "scm", "isc"], "Blood Crescent", L100());
  addRecipe("Blood Crescent -> gpy", ["yps", "Blood Crescent"], "gpy");
  addRecipe("r21 -> Krintizs Skewer", ["vps", "r21", "sbr", "isc"], "Krintizs Skewer", L100());
  addRecipe("Krintizs Skewer -> gpy", ["yps", "Krintizs Skewer"], "gpy");
  addRecipe("r21 -> Gleamscythe", ["vps", "r21", "flc", "isc"], "Gleamscythe", L100());
  addRecipe("Gleamscythe -> gpy", ["yps", "Gleamscythe"], "gpy");
  addRecipe("r21 -> Azurewrath", ["vps", "r21", "crs", "isc"], "Azurewrath", L100());
  addRecipe("Azurewrath -> gpy", ["yps", "Azurewrath"], "gpy");
  addRecipe("r21 -> Griswolds Edge", ["vps", "r21", "bsd", "isc"], "Griswolds Edge", L100());
  addRecipe("Griswolds Edge -> gpy", ["yps", "Griswolds Edge"], "gpy");
  addRecipe("r21 -> Hellplague", ["vps", "r21", "lsd", "isc"], "Hellplague", L100());
  addRecipe("Hellplague -> gpy", ["yps", "Hellplague"], "gpy");
  addRecipe("r21 -> Culwens Point", ["vps", "r21", "wsd", "isc"], "Culwens Point", L100());
  addRecipe("Culwens Point -> gpy", ["yps", "Culwens Point"], "gpy");
  addRecipe("r21 -> Shadowfang", ["vps", "r21", "2hs", "isc"], "Shadowfang", L100());
  addRecipe("Shadowfang -> gpy", ["yps", "Shadowfang"], "gpy");
  addRecipe("r21 -> Soulflay", ["vps", "r21", "clm", "isc"], "Soulflay", L100());
  addRecipe("Soulflay -> gpy", ["yps", "Soulflay"], "gpy");
  addRecipe("r21 -> Kinemils Awl", ["vps", "r21", "gis", "isc"], "Kinemils Awl", L100());
  addRecipe("Kinemils Awl -> gpy", ["yps", "Kinemils Awl"], "gpy");
  addRecipe("r21 -> Blacktongue", ["vps", "r21", "bsw", "isc"], "Blacktongue", L100());
  addRecipe("Blacktongue -> gpy", ["yps", "Blacktongue"], "gpy");
  addRecipe("r21 -> Ripsaw", ["vps", "r21", "flb", "isc"], "Ripsaw", L100());
  addRecipe("Ripsaw -> gpy", ["yps", "Ripsaw"], "gpy");
  addRecipe("r21 -> The Patriarch", ["vps", "r21", "gsd", "isc"], "The Patriarch", L100());
  addRecipe("The Patriarch -> gpy", ["yps", "The Patriarch"], "gpy");
  addRecipe("r21 -> The Diggler", ["vps", "r21", "dir", "isc"], "The Diggler", L100());
  addRecipe("The Diggler -> gpy", ["yps", "The Diggler"], "gpy");
  addRecipe("r21 -> The Jade Tan Do", ["vps", "r21", "kri", "isc"], "The Jade Tan Do", L100());
  addRecipe("The Jade Tan Do -> gpy", ["yps", "The Jade Tan Do"], "gpy");
  addRecipe("r21 -> Irices Shard", ["vps", "r21", "bld", "isc"], "Irices Shard", L100());
  addRecipe("Irices Shard -> gpy", ["yps", "Irices Shard"], "gpy");
  addRecipe("r21 -> The Dragon Chang", ["vps", "r21", "spr", "isc"], "The Dragon Chang", L100());
  addRecipe("The Dragon Chang -> gpy", ["yps", "The Dragon Chang"], "gpy");
  addRecipe("r21 -> Razortine", ["vps", "r21", "tri", "isc"], "Razortine", L100());
  addRecipe("Razortine -> gpy", ["yps", "Razortine"], "gpy");
  addRecipe("r21 -> Bloodthief", ["vps", "r21", "brn", "isc"], "Bloodthief", L100());
  addRecipe("Bloodthief -> gpy", ["yps", "Bloodthief"], "gpy");
  addRecipe("r21 -> Lance of Yaggai", ["vps", "r21", "spt", "isc"], "Lance of Yaggai", L100());
  addRecipe("Lance of Yaggai -> gpy", ["yps", "Lance of Yaggai"], "gpy");
  addRecipe("r21 -> The Tannr Gorerod", ["vps", "r21", "pik", "isc"], "The Tannr Gorerod", L100());
  addRecipe("The Tannr Gorerod -> gpy", ["yps", "The Tannr Gorerod"], "gpy");
  addRecipe("r21 -> Dimoaks Hew", ["vps", "r21", "bar", "isc"], "Dimoaks Hew", L100());
  addRecipe("Dimoaks Hew -> gpy", ["yps", "Dimoaks Hew"], "gpy");
  addRecipe("r21 -> Steelgoad", ["vps", "r21", "vou", "isc"], "Steelgoad", L100());
  addRecipe("Steelgoad -> gpy", ["yps", "Steelgoad"], "gpy");
  addRecipe("r21 -> Soul Harvest", ["vps", "r21", "scy", "isc"], "Soul Harvest", L100());
  addRecipe("Soul Harvest -> gpy", ["yps", "Soul Harvest"], "gpy");
  addRecipe("r21 -> The Battlebranch", ["vps", "r21", "pax", "isc"], "The Battlebranch", L100());
  addRecipe("The Battlebranch -> gpy", ["yps", "The Battlebranch"], "gpy");
  addRecipe("r21 -> Woestave", ["vps", "r21", "hal", "isc"], "Woestave", L100());
  addRecipe("Woestave -> gpy", ["yps", "Woestave"], "gpy");
  addRecipe("r21 -> The Grim Reaper", ["vps", "r21", "wsc", "isc"], "The Grim Reaper", L100());
  addRecipe("The Grim Reaper -> gpy", ["yps", "The Grim Reaper"], "gpy");
  addRecipe("r21 -> Bane Ash", ["vps", "r21", "sst", "isc"], "Bane Ash", L100());
  addRecipe("Bane Ash -> gpy", ["yps", "Bane Ash"], "gpy");
  addRecipe("r21 -> Serpent Lord", ["vps", "r21", "lst", "isc"], "Serpent Lord", L100());
  addRecipe("Serpent Lord -> gpy", ["yps", "Serpent Lord"], "gpy");
  addRecipe("r21 -> Lazarus Spire", ["vps", "r21", "cst", "isc"], "Lazarus Spire", L100());
  addRecipe("Lazarus Spire -> gpy", ["yps", "Lazarus Spire"], "gpy");
  addRecipe("r21 -> The Salamander", ["vps", "r21", "bst", "isc"], "The Salamander", L100());
  addRecipe("The Salamander -> gpy", ["yps", "The Salamander"], "gpy");
  addRecipe("r21 -> The Iron Jang Bong", ["vps", "r21", "wst", "isc"], "The Iron Jang Bong", L100());
  addRecipe("The Iron Jang Bong -> gpy", ["yps", "The Iron Jang Bong"], "gpy");
  addRecipe("r21 -> Pluckeye", ["vps", "r21", "sbw", "isc"], "Pluckeye", L100());
  addRecipe("Pluckeye -> gpy", ["yps", "Pluckeye"], "gpy");
  addRecipe("r21 -> Witherstring", ["vps", "r21", "hbw", "isc"], "Witherstring", L100());
  addRecipe("Witherstring -> gpy", ["yps", "Witherstring"], "gpy");
  addRecipe("r21 -> Rimeraven", ["vps", "r21", "lbw", "isc"], "Rimeraven", L100());
  addRecipe("Rimeraven -> gpy", ["yps", "Rimeraven"], "gpy");
  addRecipe("r21 -> Piercerib", ["vps", "r21", "cbw", "isc"], "Piercerib", L100());
  addRecipe("Piercerib -> gpy", ["yps", "Piercerib"], "gpy");
  addRecipe("r21 -> Pullspite", ["vps", "r21", "sbb", "isc"], "Pullspite", L100());
  addRecipe("Pullspite -> gpy", ["yps", "Pullspite"], "gpy");
  addRecipe("r21 -> Wizendraw", ["vps", "r21", "lbb", "isc"], "Wizendraw", L100());
  addRecipe("Wizendraw -> gpy", ["yps", "Wizendraw"], "gpy");
  addRecipe("r21 -> Hellclap", ["vps", "r21", "swb", "isc"], "Hellclap", L100());
  addRecipe("Hellclap -> gpy", ["yps", "Hellclap"], "gpy");
  addRecipe("r21 -> Blastbark", ["vps", "r21", "lwb", "isc"], "Blastbark", L100());
  addRecipe("Blastbark -> gpy", ["yps", "Blastbark"], "gpy");
  addRecipe("r21 -> Leadcrow", ["vps", "r21", "lxb", "isc"], "Leadcrow", L100());
  addRecipe("Leadcrow -> gpy", ["yps", "Leadcrow"], "gpy");
  addRecipe("r21 -> Ichorsting", ["vps", "r21", "mxb", "isc"], "Ichorsting", L100());
  addRecipe("Ichorsting -> gpy", ["yps", "Ichorsting"], "gpy");
  addRecipe("r21 -> Hellcast", ["vps", "r21", "hxb", "isc"], "Hellcast", L100());
  addRecipe("Hellcast -> gpy", ["yps", "Hellcast"], "gpy");
  addRecipe("r21 -> Doomspittle", ["vps", "r21", "rxb", "isc"], "Doomspittle", L100());
  addRecipe("Doomspittle -> gpy", ["yps", "Doomspittle"], "gpy");
  addRecipe("r21 -> War Bonnet", ["vps", "r21", "cap", "isc"], "War Bonnet", L100());
  addRecipe("War Bonnet -> gpy", ["yps", "War Bonnet"], "gpy");
  addRecipe("r21 -> Tarnhelm", ["vps", "r21", "skp", "isc"], "Tarnhelm", L100());
  addRecipe("Tarnhelm -> gpy", ["yps", "Tarnhelm"], "gpy");
  addRecipe("r21 -> Coif of Glory", ["vps", "r21", "hlm", "isc"], "Coif of Glory", L100());
  addRecipe("Coif of Glory -> gpy", ["yps", "Coif of Glory"], "gpy");
  addRecipe("r21 -> Duskdeep", ["vps", "r21", "fhl", "isc"], "Duskdeep", L100());
  addRecipe("Duskdeep -> gpy", ["yps", "Duskdeep"], "gpy");
  addRecipe("r21 -> Wormskull", ["vps", "r21", "bhm", "isc"], "Wormskull", L100());
  addRecipe("Wormskull -> gpy", ["yps", "Wormskull"], "gpy");
  addRecipe("r21 -> Howltusk", ["vps", "r21", "ghm", "isc"], "Howltusk", L100());
  addRecipe("Howltusk -> gpy", ["yps", "Howltusk"], "gpy");
  addRecipe("r21 -> Undead Crown", ["vps", "r21", "crn", "isc"], "Undead Crown", L100());
  addRecipe("Undead Crown -> gpy", ["yps", "Undead Crown"], "gpy");
  addRecipe("r21 -> The Face of Horror", ["vps", "r21", "msk", "isc"], "The Face of Horror", L100());
  addRecipe("The Face of Horror -> gpy", ["yps", "The Face of Horror"], "gpy");
  addRecipe("r21 -> Blinkbats Form", ["vps", "r21", "lea", "isc"], "Blinkbats Form", L100());
  addRecipe("Blinkbats Form -> gpy", ["yps", "Blinkbats Form"], "gpy");
  addRecipe("r21 -> The Centurion", ["vps", "r21", "hla", "isc"], "The Centurion", L100());
  addRecipe("The Centurion -> gpy", ["yps", "The Centurion"], "gpy");
  addRecipe("r21 -> Twitchthroe", ["vps", "r21", "stu", "isc"], "Twitchthroe", L100());
  addRecipe("Twitchthroe -> gpy", ["yps", "Twitchthroe"], "gpy");
  addRecipe("r21 -> Darkglow", ["vps", "r21", "rng", "isc"], "Darkglow", L100());
  addRecipe("Darkglow -> gpy", ["yps", "Darkglow"], "gpy");
  addRecipe("r21 -> Hawkmail", ["vps", "r21", "scl", "isc"], "Hawkmail", L100());
  addRecipe("Hawkmail -> gpy", ["yps", "Hawkmail"], "gpy");
  addRecipe("r21 -> Sparking Mail", ["vps", "r21", "chn", "isc"], "Sparking Mail", L100());
  addRecipe("Sparking Mail -> gpy", ["yps", "Sparking Mail"], "gpy");
  addRecipe("r21 -> Venomsward", ["vps", "r21", "brs", "isc"], "Venomsward", L100());
  addRecipe("Venomsward -> gpy", ["yps", "Venomsward"], "gpy");
  addRecipe("r21 -> Iceblink", ["vps", "r21", "spl", "isc"], "Iceblink", L100());
  addRecipe("Iceblink -> gpy", ["yps", "Iceblink"], "gpy");
  addRecipe("r21 -> Boneflesh", ["vps", "r21", "plt", "isc"], "Boneflesh", L100());
  addRecipe("Boneflesh -> gpy", ["yps", "Boneflesh"], "gpy");
  addRecipe("r21 -> Rockfleece", ["vps", "r21", "fld", "isc"], "Rockfleece", L100());
  addRecipe("Rockfleece -> gpy", ["yps", "Rockfleece"], "gpy");
  addRecipe("r21 -> Rattlecage", ["vps", "r21", "gth", "isc"], "Rattlecage", L100());
  addRecipe("Rattlecage -> gpy", ["yps", "Rattlecage"], "gpy");
  addRecipe("r21 -> Goldskin", ["vps", "r21", "ful", "isc"], "Goldskin", L100());
  addRecipe("Goldskin -> gpy", ["yps", "Goldskin"], "gpy");
  addRecipe("r21 -> Victors Silk", ["vps", "r21", "aar", "isc"], "Victors Silk", L100());
  addRecipe("Victors Silk -> gpy", ["yps", "Victors Silk"], "gpy");
  addRecipe("r21 -> Heavenly Garb", ["vps", "r21", "ltp", "isc"], "Heavenly Garb", L100());
  addRecipe("Heavenly Garb -> gpy", ["yps", "Heavenly Garb"], "gpy");
  addRecipe("r21 -> Pelta Lunata", ["vps", "r21", "buc", "isc"], "Pelta Lunata", L100());
  addRecipe("Pelta Lunata -> gpy", ["yps", "Pelta Lunata"], "gpy");
  addRecipe("r21 -> Umbral Disk", ["vps", "r21", "sml", "isc"], "Umbral Disk", L100());
  addRecipe("Umbral Disk -> gpy", ["yps", "Umbral Disk"], "gpy");
  addRecipe("r21 -> Stormguild", ["vps", "r21", "lrg", "isc"], "Stormguild", L100());
  addRecipe("Stormguild -> gpy", ["yps", "Stormguild"], "gpy");
  addRecipe("r21 -> Wall of the Eyeless", ["vps", "r21", "bsh", "isc"], "Wall of the Eyeless", L100());
  addRecipe("Wall of the Eyeless -> gpy", ["yps", "Wall of the Eyeless"], "gpy");
  addRecipe("r21 -> Swordback Hold", ["vps", "r21", "spk", "isc"], "Swordback Hold", L100());
  addRecipe("Swordback Hold -> gpy", ["yps", "Swordback Hold"], "gpy");
  addRecipe("r21 -> Steelclash", ["vps", "r21", "kit", "isc"], "Steelclash", L100());
  addRecipe("Steelclash -> gpy", ["yps", "Steelclash"], "gpy");
  addRecipe("r21 -> Bverrit Keep", ["vps", "r21", "tow", "isc"], "Bverrit Keep", L100());
  addRecipe("Bverrit Keep -> gpy", ["yps", "Bverrit Keep"], "gpy");
  addRecipe("r21 -> The Ward", ["vps", "r21", "gts", "isc"], "The Ward", L100());
  addRecipe("The Ward -> gpy", ["yps", "The Ward"], "gpy");
  addRecipe("r21 -> Frostburn", ["vps", "r21", "hgl", "isc"], "Frostburn", L100());
  addRecipe("Frostburn -> gpy", ["yps", "Frostburn"], "gpy");
  addRecipe("r21 -> Gorefoot", ["vps", "r21", "vbt", "isc"], "Gorefoot", L100());
  addRecipe("Gorefoot -> gpy", ["yps", "Gorefoot"], "gpy");
  addRecipe("r21 -> Treads of Cthon", ["vps", "r21", "mbt", "isc"], "Treads of Cthon", L100());
  addRecipe("Treads of Cthon -> gpy", ["yps", "Treads of Cthon"], "gpy");
  addRecipe("r21 -> Goblin Toe", ["vps", "r21", "tbt", "isc"], "Goblin Toe", L100());
  addRecipe("Goblin Toe -> gpy", ["yps", "Goblin Toe"], "gpy");
  addRecipe("r21 -> Tearhaunch", ["vps", "r21", "hbt", "isc"], "Tearhaunch", L100());
  addRecipe("Tearhaunch -> gpy", ["yps", "Tearhaunch"], "gpy");
  addRecipe("r21 -> Lenyms Cord", ["vps", "r21", "lbl", "isc"], "Lenyms Cord", L100());
  addRecipe("Lenyms Cord -> gpy", ["yps", "Lenyms Cord"], "gpy");
  addRecipe("r21 -> Snakecord", ["vps", "r21", "vbl", "isc"], "Snakecord", L100());
  addRecipe("Snakecord -> gpy", ["yps", "Snakecord"], "gpy");
  addRecipe("r21 -> Nightsmoke", ["vps", "r21", "mbl", "isc"], "Nightsmoke", L100());
  addRecipe("Nightsmoke -> gpy", ["yps", "Nightsmoke"], "gpy");
  addRecipe("r21 -> Goldwrap", ["vps", "r21", "tbl", "isc"], "Goldwrap", L100());
  addRecipe("Goldwrap -> gpy", ["yps", "Goldwrap"], "gpy");
  addRecipe("r21 -> Bladebuckle", ["vps", "r21", "hbl", "isc"], "Bladebuckle", L100());
  addRecipe("Bladebuckle -> gpy", ["yps", "Bladebuckle"], "gpy");
  addRecipe("r19 -> Nokozan Relic", ["vps", "r19", "amu", "isc"], "Nokozan Relic", L100());
  addRecipe("Nokozan Relic -> gpy", ["yps", "Nokozan Relic"], "gpy");
  addRecipe("r21 -> The Eye of Etlich", ["vps", "r21", "amu", "isc"], "The Eye of Etlich", L100());
  addRecipe("The Eye of Etlich -> gpy", ["yps", "The Eye of Etlich"], "gpy");
  addRecipe("r21 -> The Mahim-Oak Curio", ["vps", "r21", "amu", "r19"], "The Mahim-Oak Curio", L100());
  addRecipe("The Mahim-Oak Curio -> gpy", ["yps", "The Mahim-Oak Curio"], "gpy");
  addRecipe("r21 -> Manald Heal", ["vps", "r21", "rin", "wms"], "Manald Heal", L100());
  addRecipe("Manald Heal -> gpy", ["yps", "Manald Heal"], "gpy");
  addRecipe("r21 -> Coldkill", ["vps", "r21", "9ha", "isc"], "Coldkill", L100());
  addRecipe("Coldkill -> gpy", ["yps", "Coldkill"], "gpy");
  addRecipe("r21 -> Butcher's Pupil", ["vps", "r21", "9ax", "isc"], "Butcher's Pupil", L100());
  addRecipe("Butcher's Pupil -> gpy", ["yps", "Butcher's Pupil"], "gpy");
  addRecipe("r21 -> Islestrike", ["vps", "r21", "92a", "isc"], "Islestrike", L100());
  addRecipe("Islestrike -> gpy", ["yps", "Islestrike"], "gpy");
  addRecipe("r21 -> Pompe's Wrath", ["vps", "r21", "9mp", "isc"], "Pompe's Wrath", L100());
  addRecipe("Pompe's Wrath -> gpy", ["yps", "Pompe's Wrath"], "gpy");
  addRecipe("r21 -> Guardian Naga", ["vps", "r21", "9wa", "isc"], "Guardian Naga", L100());
  addRecipe("Guardian Naga -> gpy", ["yps", "Guardian Naga"], "gpy");
  addRecipe("r21 -> Warlord's Trust", ["vps", "r21", "9la", "isc"], "Warlord's Trust", L100());
  addRecipe("Warlord's Trust -> gpy", ["yps", "Warlord's Trust"], "gpy");
  addRecipe("r21 -> Spellsteel", ["vps", "r21", "9ba", "isc"], "Spellsteel", L100());
  addRecipe("Spellsteel -> gpy", ["yps", "Spellsteel"], "gpy");
  addRecipe("r21 -> Stormrider", ["vps", "r21", "9bt", "isc"], "Stormrider", L100());
  addRecipe("Stormrider -> gpy", ["yps", "Stormrider"], "gpy");
  addRecipe("r21 -> Boneslayer Blade", ["vps", "r21", "9ga", "isc"], "Boneslayer Blade", L100());
  addRecipe("Boneslayer Blade -> gpy", ["yps", "Boneslayer Blade"], "gpy");
  addRecipe("r21 -> The Minataur", ["vps", "r21", "9gi", "isc"], "The Minataur", L100());
  addRecipe("The Minataur -> gpy", ["yps", "The Minataur"], "gpy");
  addRecipe("r21 -> Suicide Branch", ["vps", "r21", "9wn", "isc"], "Suicide Branch", L100());
  addRecipe("Suicide Branch -> gpy", ["yps", "Suicide Branch"], "gpy");
  addRecipe("r21 -> Carin Shard", ["vps", "r21", "9yw", "isc"], "Carin Shard", L100());
  addRecipe("Carin Shard -> gpy", ["yps", "Carin Shard"], "gpy");
  addRecipe("r21 -> Arm of King Leoric", ["vps", "r21", "9bw", "isc"], "Arm of King Leoric", L100());
  addRecipe("Arm of King Leoric -> gpy", ["yps", "Arm of King Leoric"], "gpy");
  addRecipe("r21 -> Blackhand Key", ["vps", "r21", "9gw", "isc"], "Blackhand Key", L100());
  addRecipe("Blackhand Key -> gpy", ["yps", "Blackhand Key"], "gpy");
  addRecipe("r21 -> Dark Clan Crusher", ["vps", "r21", "9cl", "isc"], "Dark Clan Crusher", L100());
  addRecipe("Dark Clan Crusher -> gpy", ["yps", "Dark Clan Crusher"], "gpy");
  addRecipe("r21 -> Zakarum's Hand", ["vps", "r21", "9sc", "isc"], "Zakarum's Hand", L100());
  addRecipe("Zakarum's Hand -> gpy", ["yps", "Zakarum's Hand"], "gpy");
  addRecipe("r21 -> The Fetid Sprinkler", ["vps", "r21", "9qs", "isc"], "The Fetid Sprinkler", L100());
  addRecipe("The Fetid Sprinkler -> gpy", ["yps", "The Fetid Sprinkler"], "gpy");
  addRecipe("r21 -> Hand of Blessed Light", ["vps", "r21", "9ws", "isc"], "Hand of Blessed Light", L100());
  addRecipe("Hand of Blessed Light -> gpy", ["yps", "Hand of Blessed Light"], "gpy");
  addRecipe("r21 -> Fleshrender", ["vps", "r21", "9sp", "isc"], "Fleshrender", L100());
  addRecipe("Fleshrender -> gpy", ["yps", "Fleshrender"], "gpy");
  addRecipe("r21 -> Sureshrill Frost", ["vps", "r21", "9ma", "isc"], "Sureshrill Frost", L100());
  addRecipe("Sureshrill Frost -> gpy", ["yps", "Sureshrill Frost"], "gpy");
  addRecipe("r21 -> Moonfall", ["vps", "r21", "9mt", "isc"], "Moonfall", L100());
  addRecipe("Moonfall -> gpy", ["yps", "Moonfall"], "gpy");
  addRecipe("r21 -> Baezil's Vortex", ["vps", "r21", "9fl", "isc"], "Baezil's Vortex", L100());
  addRecipe("Baezil's Vortex -> gpy", ["yps", "Baezil's Vortex"], "gpy");
  addRecipe("r21 -> Earthshaker", ["vps", "r21", "9wh", "isc"], "Earthshaker", L100());
  addRecipe("Earthshaker -> gpy", ["yps", "Earthshaker"], "gpy");
  addRecipe("r21 -> Bloodtree Stump", ["vps", "r21", "9m9", "isc"], "Bloodtree Stump", L100());
  addRecipe("Bloodtree Stump -> gpy", ["yps", "Bloodtree Stump"], "gpy");
  addRecipe("r21 -> The Gavel of Pain", ["vps", "r21", "9gm", "isc"], "The Gavel of Pain", L100());
  addRecipe("The Gavel of Pain -> gpy", ["yps", "The Gavel of Pain"], "gpy");
  addRecipe("r21 -> Bloodletter", ["vps", "r21", "9ss", "isc"], "Bloodletter", L100());
  addRecipe("Bloodletter -> gpy", ["yps", "Bloodletter"], "gpy");
  addRecipe("r21 -> Coldsteel Eye", ["vps", "r21", "9sm", "isc"], "Coldsteel Eye", L100());
  addRecipe("Coldsteel Eye -> gpy", ["yps", "Coldsteel Eye"], "gpy");
  addRecipe("r21 -> Hexfire", ["vps", "r21", "9sb", "isc"], "Hexfire", L100());
  addRecipe("Hexfire -> gpy", ["yps", "Hexfire"], "gpy");
  addRecipe("r21 -> Ginther's Rift", ["vps", "r21", "9cr", "isc"], "Ginther's Rift", L100());
  addRecipe("Ginther's Rift -> gpy", ["yps", "Ginther's Rift"], "gpy");
  addRecipe("r21 -> Headstriker", ["vps", "r21", "9bs", "isc"], "Headstriker", L100());
  addRecipe("Headstriker -> gpy", ["yps", "Headstriker"], "gpy");
  addRecipe("r21 -> Plague Bearer", ["vps", "r21", "9ls", "isc"], "Plague Bearer", L100());
  addRecipe("Plague Bearer -> gpy", ["yps", "Plague Bearer"], "gpy");
  addRecipe("r21 -> The Atlantian", ["vps", "r21", "9wd", "isc"], "The Atlantian", L100());
  addRecipe("The Atlantian -> gpy", ["yps", "The Atlantian"], "gpy");
  addRecipe("r21 -> Crainte Vomir", ["vps", "r21", "92h", "isc"], "Crainte Vomir", L100());
  addRecipe("Crainte Vomir -> gpy", ["yps", "Crainte Vomir"], "gpy");
  addRecipe("r21 -> Bing Sz Wang", ["vps", "r21", "9cm", "isc"], "Bing Sz Wang", L100());
  addRecipe("Bing Sz Wang -> gpy", ["yps", "Bing Sz Wang"], "gpy");
  addRecipe("r21 -> The Vile Husk", ["vps", "r21", "9gs", "isc"], "The Vile Husk", L100());
  addRecipe("The Vile Husk -> gpy", ["yps", "The Vile Husk"], "gpy");
  addRecipe("r21 -> Cloudcrack", ["vps", "r21", "9b9", "isc"], "Cloudcrack", L100());
  addRecipe("Cloudcrack -> gpy", ["yps", "Cloudcrack"], "gpy");
  addRecipe("r21 -> Todesfaelle Flamme", ["vps", "r21", "9fb", "isc"], "Todesfaelle Flamme", L100());
  addRecipe("Todesfaelle Flamme -> gpy", ["yps", "Todesfaelle Flamme"], "gpy");
  addRecipe("r21 -> Swordguard", ["vps", "r21", "9gd", "isc"], "Swordguard", L100());
  addRecipe("Swordguard -> gpy", ["yps", "Swordguard"], "gpy");
  addRecipe("r21 -> Spineripper", ["vps", "r21", "9dg", "isc"], "Spineripper", L100());
  addRecipe("Spineripper -> gpy", ["yps", "Spineripper"], "gpy");
  addRecipe("r21 -> Heart Carver", ["vps", "r21", "9di", "isc"], "Heart Carver", L100());
  addRecipe("Heart Carver -> gpy", ["yps", "Heart Carver"], "gpy");
  addRecipe("r21 -> Blackbog's Sharp", ["vps", "r21", "9kr", "isc"], "Blackbog's Sharp", L100());
  addRecipe("Blackbog's Sharp -> gpy", ["yps", "Blackbog's Sharp"], "gpy");
  addRecipe("r21 -> The Impaler", ["vps", "r21", "9sr", "isc"], "The Impaler", L100());
  addRecipe("The Impaler -> gpy", ["yps", "The Impaler"], "gpy");
  addRecipe("r21 -> Kelpie Snare", ["vps", "r21", "9tr", "isc"], "Kelpie Snare", L100());
  addRecipe("Kelpie Snare -> gpy", ["yps", "Kelpie Snare"], "gpy");
  addRecipe("r21 -> Soulfeast Tine", ["vps", "r21", "9br", "isc"], "Soulfeast Tine", L100());
  addRecipe("Soulfeast Tine -> gpy", ["yps", "Soulfeast Tine"], "gpy");
  addRecipe("r21 -> Hone Sundan", ["vps", "r21", "9st", "isc"], "Hone Sundan", L100());
  addRecipe("Hone Sundan -> gpy", ["yps", "Hone Sundan"], "gpy");
  addRecipe("r21 -> Spire of Honor", ["vps", "r21", "9p9", "isc"], "Spire of Honor", L100());
  addRecipe("Spire of Honor -> gpy", ["yps", "Spire of Honor"], "gpy");
  addRecipe("r21 -> The Meat Scraper", ["vps", "r21", "9b7", "isc"], "The Meat Scraper", L100());
  addRecipe("The Meat Scraper -> gpy", ["yps", "The Meat Scraper"], "gpy");
  addRecipe("r21 -> Blackleach Blade", ["vps", "r21", "9vo", "isc"], "Blackleach Blade", L100());
  addRecipe("Blackleach Blade -> gpy", ["yps", "Blackleach Blade"], "gpy");
  addRecipe("r21 -> Athena's Wrath", ["vps", "r21", "9s8", "isc"], "Athena's Wrath", L100());
  addRecipe("Athena's Wrath -> gpy", ["yps", "Athena's Wrath"], "gpy");
  addRecipe("r21 -> Pierre Tombale Couant", ["vps", "r21", "9pa", "isc"], "Pierre Tombale Couant", L100());
  addRecipe("Pierre Tombale Couant -> gpy", ["yps", "Pierre Tombale Couant"], "gpy");
  addRecipe("r21 -> Husoldal Evo", ["vps", "r21", "9h9", "isc"], "Husoldal Evo", L100());
  addRecipe("Husoldal Evo -> gpy", ["yps", "Husoldal Evo"], "gpy");
  addRecipe("r21 -> Grim's Burning Dead", ["vps", "r21", "9wc", "isc"], "Grim's Burning Dead", L100());
  addRecipe("Grim's Burning Dead -> gpy", ["yps", "Grim's Burning Dead"], "gpy");
  addRecipe("r21 -> Razorswitch", ["vps", "r21", "8ss", "isc"], "Razorswitch", L100());
  addRecipe("Razorswitch -> gpy", ["yps", "Razorswitch"], "gpy");
  addRecipe("r21 -> Chromatic Ire", ["vps", "r21", "8cs", "isc"], "Chromatic Ire", L100());
  addRecipe("Chromatic Ire -> gpy", ["yps", "Chromatic Ire"], "gpy");
  addRecipe("r21 -> Skullcollector", ["vps", "r21", "8ws", "isc"], "Skullcollector", L100());
  addRecipe("Skullcollector -> gpy", ["yps", "Skullcollector"], "gpy");
  addRecipe("r21 -> Skystrike", ["vps", "r21", "8sb", "isc"], "Skystrike", L100());
  addRecipe("Skystrike -> gpy", ["yps", "Skystrike"], "gpy");
  addRecipe("r21 -> Riphook", ["vps", "r21", "8hb", "isc"], "Riphook", L100());
  addRecipe("Riphook -> gpy", ["yps", "Riphook"], "gpy");
  addRecipe("r21 -> Kuko Shakaku", ["vps", "r21", "8lb", "isc"], "Kuko Shakaku", L100());
  addRecipe("Kuko Shakaku -> gpy", ["yps", "Kuko Shakaku"], "gpy");
  addRecipe("r21 -> Endlesshail", ["vps", "r21", "8cb", "isc"], "Endlesshail", L100());
  addRecipe("Endlesshail -> gpy", ["yps", "Endlesshail"], "gpy");
  addRecipe("r21 -> Cliffkiller", ["vps", "r21", "8l8", "isc"], "Cliffkiller", L100());
  addRecipe("Cliffkiller -> gpy", ["yps", "Cliffkiller"], "gpy");
  addRecipe("r21 -> Magewrath", ["vps", "r21", "8sw", "isc"], "Magewrath", L100());
  addRecipe("Magewrath -> gpy", ["yps", "Magewrath"], "gpy");
  addRecipe("r21 -> Godstrike Arch", ["vps", "r21", "8lw", "isc"], "Godstrike Arch", L100());
  addRecipe("Godstrike Arch -> gpy", ["yps", "Godstrike Arch"], "gpy");
  addRecipe("r21 -> Langer Briser", ["vps", "r21", "8lx", "isc"], "Langer Briser", L100());
  addRecipe("Langer Briser -> gpy", ["yps", "Langer Briser"], "gpy");
  addRecipe("r21 -> Pus Spiter", ["vps", "r21", "8mx", "isc"], "Pus Spiter", L100());
  addRecipe("Pus Spiter -> gpy", ["yps", "Pus Spiter"], "gpy");
  addRecipe("r21 -> Buriza-Do Kyanon", ["vps", "r21", "8hx", "isc"], "Buriza-Do Kyanon", L100());
  addRecipe("Buriza-Do Kyanon -> gpy", ["yps", "Buriza-Do Kyanon"], "gpy");
  addRecipe("r21 -> Demon Machine", ["vps", "r21", "8rx", "isc"], "Demon Machine", L100());
  addRecipe("Demon Machine -> gpy", ["yps", "Demon Machine"], "gpy");
  addRecipe("r21 -> Peasent Crown", ["vps", "r21", "xap", "isc"], "Peasent Crown", L100());
  addRecipe("Peasent Crown -> gpy", ["yps", "Peasent Crown"], "gpy");
  addRecipe("r21 -> Rockstopper", ["vps", "r21", "xkp", "isc"], "Rockstopper", L100());
  addRecipe("Rockstopper -> gpy", ["yps", "Rockstopper"], "gpy");
  addRecipe("r21 -> Stealskull", ["vps", "r21", "xlm", "isc"], "Stealskull", L100());
  addRecipe("Stealskull -> gpy", ["yps", "Stealskull"], "gpy");
  addRecipe("r21 -> Darksight Helm", ["vps", "r21", "xhl", "isc"], "Darksight Helm", L100());
  addRecipe("Darksight Helm -> gpy", ["yps", "Darksight Helm"], "gpy");
  addRecipe("r21 -> Valkiry Wing", ["vps", "r21", "xhm", "isc"], "Valkiry Wing", L100());
  addRecipe("Valkiry Wing -> gpy", ["yps", "Valkiry Wing"], "gpy");
  addRecipe("r21 -> Blackhorn's Face", ["vps", "r21", "xsk", "isc"], "Blackhorn's Face", L100());
  addRecipe("Blackhorn's Face -> gpy", ["yps", "Blackhorn's Face"], "gpy");
  addRecipe("r21 -> The Spirit Shroud", ["vps", "r21", "xui", "isc"], "The Spirit Shroud", L100());
  addRecipe("The Spirit Shroud -> gpy", ["yps", "The Spirit Shroud"], "gpy");
  addRecipe("r21 -> Skin of the Flayerd One", ["vps", "r21", "xla", "isc"], "Skin of the Flayerd One", L100());
  addRecipe("Skin of the Flayerd One -> gpy", ["yps", "Skin of the Flayerd One"], "gpy");
  addRecipe("r21 -> Ironpelt", ["vps", "r21", "xtu", "isc"], "Ironpelt", L100());
  addRecipe("Ironpelt -> gpy", ["yps", "Ironpelt"], "gpy");
  addRecipe("r21 -> Spiritforge", ["vps", "r21", "xng", "isc"], "Spiritforge", L100());
  addRecipe("Spiritforge -> gpy", ["yps", "Spiritforge"], "gpy");
  addRecipe("r21 -> Crow Caw", ["vps", "r21", "xcl", "isc"], "Crow Caw", L100());
  addRecipe("Crow Caw -> gpy", ["yps", "Crow Caw"], "gpy");
  addRecipe("r21 -> Toothrow", ["vps", "r21", "xld", "isc"], "Toothrow", L100());
  addRecipe("Toothrow -> gpy", ["yps", "Toothrow"], "gpy");
  addRecipe("r21 -> Atma's Wail", ["vps", "r21", "xth", "isc"], "Atma's Wail", L100());
  addRecipe("Atma's Wail -> gpy", ["yps", "Atma's Wail"], "gpy");
  addRecipe("r21 -> Black Hades", ["vps", "r21", "xul", "isc"], "Black Hades", L100());
  addRecipe("Black Hades -> gpy", ["yps", "Black Hades"], "gpy");
  addRecipe("r21 -> Corpsemourn", ["vps", "r21", "xar", "isc"], "Corpsemourn", L100());
  addRecipe("Corpsemourn -> gpy", ["yps", "Corpsemourn"], "gpy");
  addRecipe("r21 -> Que-Hegan's Wisdon", ["vps", "r21", "xtp", "isc"], "Que-Hegan's Wisdon", L100());
  addRecipe("Que-Hegan's Wisdon -> gpy", ["yps", "Que-Hegan's Wisdon"], "gpy");
  addRecipe("r21 -> Visceratuant", ["vps", "r21", "xuc", "isc"], "Visceratuant", L100());
  addRecipe("Visceratuant -> gpy", ["yps", "Visceratuant"], "gpy");
  addRecipe("r21 -> Stormchaser", ["vps", "r21", "xrg", "isc"], "Stormchaser", L100());
  addRecipe("Stormchaser -> gpy", ["yps", "Stormchaser"], "gpy");
  addRecipe("r21 -> Tiamat's Rebuke", ["vps", "r21", "xit", "isc"], "Tiamat's Rebuke", L100());
  addRecipe("Tiamat's Rebuke -> gpy", ["yps", "Tiamat's Rebuke"], "gpy");
  addRecipe("r21 -> Kerke's Sanctuary", ["vps", "r21", "xow", "isc"], "Kerke's Sanctuary", L100());
  addRecipe("Kerke's Sanctuary -> gpy", ["yps", "Kerke's Sanctuary"], "gpy");
  addRecipe("r21 -> Radimant's Sphere", ["vps", "r21", "xts", "isc"], "Radimant's Sphere", L100());
  addRecipe("Radimant's Sphere -> gpy", ["yps", "Radimant's Sphere"], "gpy");
  addRecipe("r21 -> Lance Guard", ["vps", "r21", "xpk", "isc"], "Lance Guard", L100());
  addRecipe("Lance Guard -> gpy", ["yps", "Lance Guard"], "gpy");
  addRecipe("r21 -> Venom Grip", ["vps", "r21", "xlg", "isc"], "Venom Grip", L100());
  addRecipe("Venom Grip -> gpy", ["yps", "Venom Grip"], "gpy");
  addRecipe("r21 -> Gravepalm", ["vps", "r21", "xvg", "isc"], "Gravepalm", L100());
  addRecipe("Gravepalm -> gpy", ["yps", "Gravepalm"], "gpy");
  addRecipe("r21 -> Ghoulhide", ["vps", "r21", "xmg", "isc"], "Ghoulhide", L100());
  addRecipe("Ghoulhide -> gpy", ["yps", "Ghoulhide"], "gpy");
  addRecipe("r21 -> Lavagout", ["vps", "r21", "xtg", "isc"], "Lavagout", L100());
  addRecipe("Lavagout -> gpy", ["yps", "Lavagout"], "gpy");
  addRecipe("r21 -> Hellmouth", ["vps", "r21", "xhg", "isc"], "Hellmouth", L100());
  addRecipe("Hellmouth -> gpy", ["yps", "Hellmouth"], "gpy");
  addRecipe("r21 -> Razortail", ["vps", "r21", "zvb", "isc"], "Razortail", L100());
  addRecipe("Razortail -> gpy", ["yps", "Razortail"], "gpy");
  addRecipe("r21 -> Gloomstrap", ["vps", "r21", "zmb", "isc"], "Gloomstrap", L100());
  addRecipe("Gloomstrap -> gpy", ["yps", "Gloomstrap"], "gpy");
  addRecipe("r21 -> Snowclash", ["vps", "r21", "ztb", "isc"], "Snowclash", L100());
  addRecipe("Snowclash -> gpy", ["yps", "Snowclash"], "gpy");
  addRecipe("r21 -> Veil of Steel", ["vps", "r21", "uhm", "isc"], "Veil of Steel", L100());
  addRecipe("Veil of Steel -> gpy", ["yps", "Veil of Steel"], "gpy");
  addRecipe("r21 -> Blackoak Shield", ["vps", "r21", "uml", "isc"], "Blackoak Shield", L100());
  addRecipe("Blackoak Shield -> gpy", ["yps", "Blackoak Shield"], "gpy");
  addRecipe("r21 -> Hellslayer", ["vps", "r21", "7bt", "isc"], "Hellslayer", L100());
  addRecipe("Hellslayer -> gpy", ["yps", "Hellslayer"], "gpy");
  addRecipe("r21 -> Messerschmidt's Reaver", ["vps", "r21", "7ga", "isc"], "Messerschmidt's Reaver", L100());
  addRecipe("Messerschmidt's Reaver -> gpy", ["yps", "Messerschmidt's Reaver"], "gpy");
  addRecipe("r21 -> Baranar's Star", ["vps", "r21", "7mt", "isc"], "Baranar's Star", L100());
  addRecipe("Baranar's Star -> gpy", ["yps", "Baranar's Star"], "gpy");
  addRecipe("r21 -> Lightsabre", ["vps", "r21", "7cr", "isc"], "Lightsabre", L100());
  addRecipe("Lightsabre -> gpy", ["yps", "Lightsabre"], "gpy");
  addRecipe("r21 -> Doombringer", ["vps", "r21", "7b7", "isc"], "Doombringer", L100());
  addRecipe("Doombringer -> gpy", ["yps", "Doombringer"], "gpy");
  addRecipe("r21 -> Stormspire", ["vps", "r21", "7wc", "isc"], "Stormspire", L100());
  addRecipe("Stormspire -> gpy", ["yps", "Stormspire"], "gpy");
  addRecipe("r20 -> The Cat's Eye", ["vps", "r20", "amu", "isc"], "The Cat's Eye", L100());
  addRecipe("The Cat's Eye -> gpy", ["yps", "The Cat's Eye"], "gpy");
  addRecipe("r21 -> The Rising Sun", ["vps", "r21", "amu", "gpw"], "The Rising Sun", L100());
  addRecipe("The Rising Sun -> gpy", ["yps", "The Rising Sun"], "gpy");
  addRecipe("r21 -> Crescent Moon", ["vps", "r21", "amu", "r18"], "Crescent Moon", L100());
  addRecipe("Crescent Moon -> gpy", ["yps", "Crescent Moon"], "gpy");
  addRecipe("r21 -> Dwarf Star", ["vps", "r21", "rin", "gpv"], "Dwarf Star", L100());
  addRecipe("Dwarf Star -> gpy", ["yps", "Dwarf Star"], "gpy");
  addRecipe("r21 -> Raven Frost", ["vps", "r21", "rin", "gpb"], "Raven Frost", L100());
  addRecipe("Raven Frost -> gpy", ["yps", "Raven Frost"], "gpy");
  addRecipe("r21 -> Saracen's Chance", ["vps", "r21", "amu", "r16"], "Saracen's Chance", L100());
  addRecipe("Saracen's Chance -> gpy", ["yps", "Saracen's Chance"], "gpy");
  addRecipe("r21 -> Lycander's Flank", ["vps", "r21", "am9", "isc"], "Lycander's Flank", L100());
  addRecipe("Lycander's Flank -> gpy", ["yps", "Lycander's Flank"], "gpy");
  addRecipe("r21 -> Bloodmoon", ["vps", "r21", "7sb", "isc"], "Bloodmoon", L100());
  addRecipe("Bloodmoon -> gpy", ["yps", "Bloodmoon"], "gpy");
  addRecipe("r21 -> Djinnslayer", ["vps", "r21", "7sm", "isc"], "Djinnslayer", L100());
  addRecipe("Djinnslayer -> gpy", ["yps", "Djinnslayer"], "gpy");
  addRecipe("r21 -> Gutsiphon", ["vps", "r21", "6rx", "isc"], "Gutsiphon", L100());
  addRecipe("Gutsiphon -> gpy", ["yps", "Gutsiphon"], "gpy");
  addRecipe("r21 -> Razoredge", ["vps", "r21", "7ha", "isc"], "Razoredge", L100());
  addRecipe("Razoredge -> gpy", ["yps", "Razoredge"], "gpy");
  addRecipe("r21 -> Demonlimb", ["vps", "r21", "7sp", "isc"], "Demonlimb", L100());
  addRecipe("Demonlimb -> gpy", ["yps", "Demonlimb"], "gpy");
  addRecipe("r20 -> Steelshade", ["vps", "r20", "ulm", "isc"], "Steelshade", L100());
  addRecipe("Steelshade -> gpy", ["yps", "Steelshade"], "gpy");
  addRecipe("r21 -> Nature's Peace", ["vps", "r21", "rin", "gpr"], "Nature's Peace", L100());
  addRecipe("Nature's Peace -> gpy", ["yps", "Nature's Peace"], "gpy");
  addRecipe("r21 -> Horizon's Tornado", ["vps", "r21", "7fl", "isc"], "Horizon's Tornado", L100());
  addRecipe("Horizon's Tornado -> gpy", ["yps", "Horizon's Tornado"], "gpy");
  addRecipe("r21 -> Stone Crusher", ["vps", "r21", "7wh", "isc"], "Stone Crusher", L100());
  addRecipe("Stone Crusher -> gpy", ["yps", "Stone Crusher"], "gpy");
  addRecipe("r21 -> Cerebus", ["vps", "r21", "drb", "isc"], "Cerebus", L100());
  addRecipe("Cerebus -> gpy", ["yps", "Cerebus"], "gpy");
  addRecipe("r21 -> Souldrain", ["vps", "r21", "umg", "isc"], "Souldrain", L100());
  addRecipe("Souldrain -> gpy", ["yps", "Souldrain"], "gpy");
  addRecipe("r21 -> Executioner's Justice", ["vps", "r21", "7gi", "isc"], "Executioner's Justice", L100());
  addRecipe("Executioner's Justice -> gpy", ["yps", "Executioner's Justice"], "gpy");
  addRecipe("r21 -> Stoneraven", ["vps", "r21", "amd", "isc"], "Stoneraven", L100());
  addRecipe("Stoneraven -> gpy", ["yps", "Stoneraven"], "gpy");
  addRecipe("r21 -> Gargoyle's Bite", ["vps", "r21", "7ts", "isc"], "Gargoyle's Bite", L100());
  addRecipe("Gargoyle's Bite -> gpy", ["yps", "Gargoyle's Bite"], "gpy");
  addRecipe("r21 -> Lacerator", ["vps", "r21", "7b8", "isc"], "Lacerator", L100());
  addRecipe("Lacerator -> gpy", ["yps", "Lacerator"], "gpy");
  addRecipe("r21 -> Viperfork", ["vps", "r21", "7br", "isc"], "Viperfork", L100());
  addRecipe("Viperfork -> gpy", ["yps", "Viperfork"], "gpy");
  addRecipe("r21 -> Ethereal Edge", ["vps", "r21", "7ba", "isc"], "Ethereal Edge", L100());
  addRecipe("Ethereal Edge -> gpy", ["yps", "Ethereal Edge"], "gpy");
  addRecipe("r21 -> Demonhorn's Edge", ["vps", "r21", "bad", "isc"], "Demonhorn's Edge", L100());
  addRecipe("Demonhorn's Edge -> gpy", ["yps", "Demonhorn's Edge"], "gpy");
  addRecipe("r21 -> Spiritkeeper", ["vps", "r21", "drd", "isc"], "Spiritkeeper", L100());
  addRecipe("Spiritkeeper -> gpy", ["yps", "Spiritkeeper"], "gpy");
  addRecipe("r21 -> Hellrack", ["vps", "r21", "6hx", "isc"], "Hellrack", L100());
  addRecipe("Hellrack -> gpy", ["yps", "Hellrack"], "gpy");
  addRecipe("r21 -> Alma Negra", ["vps", "r21", "pac", "isc"], "Alma Negra", L100());
  addRecipe("Alma Negra -> gpy", ["yps", "Alma Negra"], "gpy");
  addRecipe("r21 -> Darkforge Spawn", ["vps", "r21", "nef", "isc"], "Darkforge Spawn", L100());
  addRecipe("Darkforge Spawn -> gpy", ["yps", "Darkforge Spawn"], "gpy");
  addRecipe("r21 -> Ghostflame", ["vps", "r21", "7bl", "isc"], "Ghostflame", L100());
  addRecipe("Ghostflame -> gpy", ["yps", "Ghostflame"], "gpy");
  addRecipe("r21 -> Shadowkiller", ["vps", "r21", "7cs", "isc"], "Shadowkiller", L100());
  addRecipe("Shadowkiller -> gpy", ["yps", "Shadowkiller"], "gpy");
  addRecipe("r21 -> Gimmershred", ["vps", "r21", "7ta", "isc"], "Gimmershred", L100());
  addRecipe("Gimmershred -> gpy", ["yps", "Gimmershred"], "gpy");
  addRecipe("r21 -> Windhammer", ["vps", "r21", "7m7", "isc"], "Windhammer", L100());
  addRecipe("Windhammer -> gpy", ["yps", "Windhammer"], "gpy");
  addRecipe("r21 -> Demon's Arch", ["vps", "r21", "7s7", "isc"], "Demon's Arch", L100());
  addRecipe("Demon's Arch -> gpy", ["yps", "Demon's Arch"], "gpy");
  addRecipe("r21 -> Steelpillar", ["vps", "r21", "7p7", "isc"], "Steelpillar", L100());
  addRecipe("Steelpillar -> gpy", ["yps", "Steelpillar"], "gpy");
  addRecipe("r21 -> Darkfear", ["vps", "r21", "ulm", "isc"], "Darkfear", L100());
  addRecipe("Darkfear -> gpy", ["yps", "Darkfear"], "gpy");
  addRecipe("r21 -> Steel Carapice", ["vps", "r21", "uul", "isc"], "Steel Carapice", L100());
  addRecipe("Steel Carapice -> gpy", ["yps", "Steel Carapice"], "gpy");
  addRecipe("r21 -> Medusa's Gaze", ["vps", "r21", "uow", "isc"], "Medusa's Gaze", L100());
  addRecipe("Medusa's Gaze -> gpy", ["yps", "Medusa's Gaze"], "gpy");
  addRecipe("r21 -> Flamebellow", ["vps", "r21", "7gs", "isc"], "Flamebellow", L100());
  addRecipe("Flamebellow -> gpy", ["yps", "Flamebellow"], "gpy");
  addRecipe("r21 -> Spirit Ward", ["vps", "r21", "uts", "isc"], "Spirit Ward", L100());
  addRecipe("Spirit Ward -> gpy", ["yps", "Spirit Ward"], "gpy");
  addRecipe("r21 -> Halaberd's Reign", ["vps", "r21", "bae", "isc"], "Halaberd's Reign", L100());
  addRecipe("Halaberd's Reign -> gpy", ["yps", "Halaberd's Reign"], "gpy");
  addRecipe("r21 -> Spike Thorn", ["vps", "r21", "upk", "isc"], "Spike Thorn", L100());
  addRecipe("Spike Thorn -> gpy", ["yps", "Spike Thorn"], "gpy");
  addRecipe("r21 -> Frostwind", ["vps", "r21", "7ls", "isc"], "Frostwind", L100());
  addRecipe("Frostwind -> gpy", ["yps", "Frostwind"], "gpy");
  addRecipe("r21 -> Firelizard's Talons", ["vps", "r21", "7lw", "isc"], "Firelizard's Talons", L100());
  addRecipe("Firelizard's Talons -> gpy", ["yps", "Firelizard's Talons"], "gpy");
  addRecipe("r21 -> Nosferatu's Coil", ["vps", "r21", "uvc", "isc"], "Nosferatu's Coil", L100());
  addRecipe("Nosferatu's Coil -> gpy", ["yps", "Nosferatu's Coil"], "gpy");
  addRecipe("r21 -> Cranebeak", ["vps", "r21", "7mp", "isc"], "Cranebeak", L100());
  addRecipe("Cranebeak -> gpy", ["yps", "Cranebeak"], "gpy");
  addRecipe("r21 -> Nord's Tenderizer", ["vps", "r21", "7cl", "isc"], "Nord's Tenderizer", L100());
  addRecipe("Nord's Tenderizer -> gpy", ["yps", "Nord's Tenderizer"], "gpy");
  addRecipe("r21 -> Earthshifter", ["vps", "r21", "7gm", "isc"], "Earthshifter", L100());
  addRecipe("Earthshifter -> gpy", ["yps", "Earthshifter"], "gpy");
  addRecipe("r21 -> Wraithflight", ["vps", "r21", "7gl", "isc"], "Wraithflight", L100());
  addRecipe("Wraithflight -> gpy", ["yps", "Wraithflight"], "gpy");
}

// ============================================================
// JEWEL MARKET (NEW)
// ============================================================
if (config.jewelMarket) {
  // Specific Rainbow Facet types - uses disambiguators to target different facets
  addRecipe("Buy Fire Facet", ["r24", "jew", "vps", "glr"], "jew,uni", L100());
  addRecipe("Sell Fire Facet", ["jew,uni", "yps", "glr"], "r23");
  addRecipe("Buy Cold Facet", ["r24", "jew", "vps", "glb"], "jew,uni", L100());
  addRecipe("Sell Cold Facet", ["jew,uni", "yps", "glb"], "r23");
  addRecipe("Buy Lightning Facet", ["r25", "jew", "vps", "glw"], "jew,uni", L100());
  addRecipe("Sell Lightning Facet", ["jew,uni", "yps", "glw"], "r24");
  addRecipe("Buy Poison Facet", ["r24", "jew", "vps", "glg"], "jew,uni", L100());
  addRecipe("Sell Poison Facet", ["jew,uni", "yps", "glg"], "r23");

  // Rare Jewels with guaranteed mods
  addRecipe("Buy 15IAS/40ED Jewel", ["r30", "jew", "vps", "gpw"], "jew,rar", { lvl: 100, ilvl: 100, mods: [
    { name: "swing2", min: 15, max: 15 },
    { name: "dmg%", min: 40, max: 40 }
  ]});
  addRecipe("Sell 15IAS/40ED Jewel", ["jew,rar", "yps", "gpw"], "r28");
  addRecipe("Buy 15IAS/30ED Jewel", ["r27", "jew", "vps", "gpg"], "jew,rar", { lvl: 100, ilvl: 100, mods: [
    { name: "swing2", min: 15, max: 15 },
    { name: "dmg%", min: 30, max: 30 }
  ]});
  addRecipe("Sell 15IAS/30ED Jewel", ["jew,rar", "yps", "gpg"], "r26");
}

// ============================================================
// RARE ITEMS MARKET (NEW)
// ============================================================
if (config.rareMarket) {
  // +2 Sorc / 20 FCR Circlet
  addRecipe("Buy +2 Sorc 20FCR Circlet", ["r30", "ci3", "vps", "r02"], "ci3,rar", { lvl: 100, ilvl: 100, mods: [
    { name: "skilltab", min: 1, max: 1 },
    { name: "cast2", min: 20, max: 20 }
  ]});
  addRecipe("Sell +2 Sorc 20FCR Circlet", ["ci3,rar", "yps", "r02"], "r28");

  // +2 Pally / 20 FCR Circlet
  addRecipe("Buy +2 Pally 20FCR Circlet", ["r30", "ci3", "vps", "r04"], "ci3,rar", { lvl: 100, ilvl: 100, mods: [
    { name: "skilltab", min: 3, max: 3 },
    { name: "cast2", min: 20, max: 20 }
  ]});
  addRecipe("Sell +2 Pally 20FCR Circlet", ["ci3,rar", "yps", "r04"], "r28");

  // +2 Amazon / 20 FCR Circlet
  addRecipe("Buy +2 Amazon 20FCR Circlet", ["r28", "ci3", "vps", "r01"], "ci3,rar", { lvl: 100, ilvl: 100, mods: [
    { name: "skilltab", min: 0, max: 0 },
    { name: "cast2", min: 20, max: 20 }
  ]});
  addRecipe("Sell +2 Amazon 20FCR Circlet", ["ci3,rar", "yps", "r01"], "r27");

  // +2 Necro / 20 FCR Circlet
  addRecipe("Buy +2 Necro 20FCR Circlet", ["r28", "ci3", "vps", "r03"], "ci3,rar", { lvl: 100, ilvl: 100, mods: [
    { name: "skilltab", min: 2, max: 2 },
    { name: "cast2", min: 20, max: 20 }
  ]});
  addRecipe("Sell +2 Necro 20FCR Circlet", ["ci3,rar", "yps", "r03"], "r27");

  // +2 Druid / 20 FCR Circlet
  addRecipe("Buy +2 Druid 20FCR Circlet", ["r28", "ci3", "vps", "r06"], "ci3,rar", { lvl: 100, ilvl: 100, mods: [
    { name: "skilltab", min: 5, max: 5 },
    { name: "cast2", min: 20, max: 20 }
  ]});
  addRecipe("Sell +2 Druid 20FCR Circlet", ["ci3,rar", "yps", "r06"], "r27");

  // Tri-Res FRW Boots
  addRecipe("Buy Tri-Res FRW Boots", ["r27", "xtb", "vps", "gpw"], "xtb,rar", { lvl: 100, ilvl: 100, mods: [
    { name: "move2", min: 30, max: 30 },
    { name: "res-fire", min: 30, max: 40 },
    { name: "res-ltng", min: 30, max: 40 },
    { name: "res-cold", min: 30, max: 40 }
  ]});
  addRecipe("Sell Tri-Res FRW Boots", ["xtb,rar", "yps", "gpw"], "r26");

  // Dual Leech Ring
  addRecipe("Buy Dual Leech Ring", ["r25", "rin", "vps", "gpw"], "rin,rar", { lvl: 100, ilvl: 100, mods: [
    { name: "lifesteal", min: 5, max: 8 },
    { name: "manasteal", min: 4, max: 6 }
  ]});
  addRecipe("Sell Dual Leech Ring", ["rin,rar", "yps", "gpw"], "r24");

  // 2/20 Java Gloves
  addRecipe("Buy 2/20 Java Gloves", ["r27", "ulg", "vps", "gpg"], "ulg,rar", { lvl: 100, ilvl: 100, mods: [
    { name: "skilltab", min: 0, max: 0 },
    { name: "swing2", min: 20, max: 20 }
  ]});
  addRecipe("Sell 2/20 Java Gloves", ["ulg,rar", "yps", "gpg"], "r26");

  // +2 All Skills / 20 FCR Amulet
  addRecipe("Buy +2/20 FCR Amulet", ["r29", "amu", "vps", "gpw"], "amu,rar", { lvl: 100, ilvl: 100, mods: [
    { name: "allskills", min: 2, max: 2 },
    { name: "cast2", min: 20, max: 20 }
  ]});
  addRecipe("Sell +2/20 FCR Amulet", ["amu,rar", "yps", "gpw"], "r27");

  // MF/Tri-Res Rare Boots
  addRecipe("Buy MF Tri-Res Boots", ["r27", "xtb", "vps", "gpg"], "xtb,rar", { lvl: 100, ilvl: 100, mods: [
    { name: "mag%", min: 25, max: 35 },
    { name: "res-fire", min: 20, max: 30 },
    { name: "res-ltng", min: 20, max: 30 },
    { name: "res-cold", min: 20, max: 30 }
  ]});
  addRecipe("Sell MF Tri-Res Boots", ["xtb,rar", "yps", "gpg"], "r26");

  // FCR Ring
  addRecipe("Buy FCR Ring", ["r25", "rin", "vps", "gpg"], "rin,rar", { lvl: 100, ilvl: 100, mods: [
    { name: "cast2", min: 10, max: 10 },
    { name: "res-all", min: 10, max: 15 }
  ]});
  addRecipe("Sell FCR Ring", ["rin,rar", "yps", "gpg"], "r24");
}

// ============================================================
// CRAFTED ITEMS MARKET (NEW)
// ============================================================
if (config.craftedMarket) {
  // Caster Amulet - FCR + mana
  addRecipe("Buy Caster Amulet", ["r25", "amu", "vps", "glr"], "amu,rar", { lvl: 100, ilvl: 100, mods: [
    { name: "cast2", min: 10, max: 20 },
    { name: "mana", min: 40, max: 60 },
    { name: "regen-mana", min: 5, max: 10 }
  ]});
  addRecipe("Sell Caster Amulet", ["amu,rar", "yps", "glr"], "r24");

  // Caster Belt - FCR + FHR
  addRecipe("Buy Caster Belt", ["r23", "ulc", "vps", "glr"], "ulc,rar", { lvl: 100, ilvl: 100, mods: [
    { name: "cast2", min: 5, max: 10 },
    { name: "balance2", min: 10, max: 10 },
    { name: "mana", min: 20, max: 30 }
  ]});
  addRecipe("Sell Caster Belt", ["ulc,rar", "yps", "glr"], "r22");

  // Blood Gloves - CB + LL + IAS
  addRecipe("Buy Blood Gloves", ["r24", "ulg", "vps", "glr"], "ulg,rar", { lvl: 100, ilvl: 100, mods: [
    { name: "crush", min: 5, max: 10 },
    { name: "lifesteal", min: 3, max: 5 },
    { name: "swing2", min: 20, max: 20 }
  ]});
  addRecipe("Sell Blood Gloves", ["ulg,rar", "yps", "glr"], "r23");

  // Blood Ring - LL + ML + life
  addRecipe("Buy Blood Ring", ["r23", "rin", "vps", "glr"], "rin,rar", { lvl: 100, ilvl: 100, mods: [
    { name: "lifesteal", min: 3, max: 5 },
    { name: "manasteal", min: 3, max: 5 },
    { name: "hp", min: 20, max: 40 }
  ]});
  addRecipe("Sell Blood Ring", ["rin,rar", "yps", "glr"], "r22");

  // Blood Amulet - LL + life
  addRecipe("Buy Blood Amulet", ["r24", "amu", "vps", "glb"], "amu,rar", { lvl: 100, ilvl: 100, mods: [
    { name: "lifesteal", min: 5, max: 8 },
    { name: "hp", min: 30, max: 50 },
    { name: "cast2", min: 5, max: 10 }
  ]});
  addRecipe("Sell Blood Amulet", ["amu,rar", "yps", "glb"], "r23");

  // Hit Power Gloves - CB + knockback
  addRecipe("Buy Hit Power Gloves", ["r23", "ulg", "vps", "glb"], "ulg,rar", { lvl: 100, ilvl: 100, mods: [
    { name: "crush", min: 5, max: 10 },
    { name: "swing2", min: 20, max: 20 },
    { name: "hp", min: 20, max: 30 }
  ]});
  addRecipe("Sell Hit Power Gloves", ["ulg,rar", "yps", "glb"], "r22");

  // Safety Amulet - DR + PDR
  addRecipe("Buy Safety Amulet", ["r22", "amu", "vps", "glg"], "amu,rar", { lvl: 100, ilvl: 100, mods: [
    { name: "red-dmg%", min: 5, max: 10 },
    { name: "red-dmg", min: 3, max: 7 },
    { name: "hp", min: 20, max: 30 }
  ]});
  addRecipe("Sell Safety Amulet", ["amu,rar", "yps", "glg"], "r21");

  // Safety Shield - block + DR
  addRecipe("Buy Safety Shield", ["r22", "uit", "vps", "glg"], "uit,rar", { lvl: 100, ilvl: 100, mods: [
    { name: "red-dmg%", min: 5, max: 10 },
    { name: "block", min: 5, max: 10 },
    { name: "hp", min: 20, max: 30 }
  ]});
  addRecipe("Sell Safety Shield", ["uit,rar", "yps", "glg"], "r21");
}

// ============================================================
// GAMBLING MARKET (NEW)
// ============================================================
if (config.gamblingMarket) {
  // Mystery items - pay a rune, get a random unique of that type
  addRecipe("Mystery Ring", ["r23", "rin", "gpv"], "rin,uni", L100());
  addRecipe("Mystery Amulet", ["r23", "amu", "gpv"], "amu,uni", L100());
  addRecipe("Mystery Helm", ["r23", "helm", "gpv"], "useitem,uni", L100());
  addRecipe("Mystery Armor", ["r24", "tors", "gpv"], "useitem,uni", L100());
  addRecipe("Mystery Weapon", ["r24", "weap", "gpv"], "useitem,uni", L100());
  addRecipe("Mystery Shield", ["r23", "shld", "gpv"], "useitem,uni", L100());
  addRecipe("Mystery Gloves", ["r22", "glov", "gpv"], "useitem,uni", L100());
  addRecipe("Mystery Boots", ["r22", "boot", "gpv"], "useitem,uni", L100());
  addRecipe("Mystery Belt", ["r22", "belt", "gpv"], "useitem,uni", L100());

  // Gem Jackpot - cheap gems in, random perfect gems out
  addRecipe("Gem Jackpot", ["r21", "gcv,qty=3", "vps"], ["gpw", "gpr", "gpg"]);
}

// ============================================================
// RUNEWORD BASES MARKET
// ============================================================
if (config.baseMarket) {
  addRecipe("r26 -> 7wa,nor,sock=5", ["vps", "r26", "r01", "glw"], "7wa,nor,sock=5", L100());
  addRecipe("r24 -> 7wa,nor,eth,sock=4", ["vps", "r24", "r02", "glw"], "7wa,nor,eth,sock=4", L100());
  addRecipe("r28 -> 7wa,nor,eth,sock=5", ["vps", "r28", "r03", "glw"], "7wa,nor,eth,sock=5", L100());
  addRecipe("r26 -> 7wa,nor,eth,sock=6", ["vps", "r26", "r04", "glw"], "7wa,nor,eth,sock=6", L100());
  addRecipe("r26 -> 7wa,nor,eth", ["vps", "r26", "r05", "glw"], "7wa,nor,eth", L100());
  addRecipe("r24 -> 72a,nor,eth", ["vps", "r24", "r06", "glw"], "72a,nor,eth", L100());
  addRecipe("r22 -> 72a,nor,eth,sock=4", ["vps", "r22", "r07", "glw"], "72a,nor,eth,sock=4", L100());
  addRecipe("r24 -> 72a,nor,eth,sock=5", ["vps", "r24", "r08", "glw"], "72a,nor,eth,sock=5", L100());
  addRecipe("r22 -> 7fl,nor,eth,sock=4", ["vps", "r22", "r09", "glw"], "7fl,nor,eth,sock=4", L100());
  addRecipe("r21 -> 7ax,nor,eth,sock=4", ["vps", "r21", "r10", "glw"], "7ax,nor,eth,sock=4", L100());
  addRecipe("r22 -> crs,nor,eth,sock=5", ["vps", "r22", "r01", "glg"], "crs,nor,eth,sock=5", L100());
  addRecipe("r21 -> 7cr,nor,sock=3", ["vps", "r21", "r02", "glg"], "7cr,nor,sock=3", L100());
  addRecipe("r21 -> 7cr,nor,sock=4", ["vps", "r21", "r03", "glg"], "7cr,nor,sock=4", L100());
  addRecipe("r21 -> 7cr,nor,sock=5", ["vps", "r21", "r04", "glg"], "7cr,nor,sock=5", L100());
  addRecipe("r26 -> 7gm,nor,eth", ["vps", "r26", "r05", "glg"], "7gm,nor,eth", L100());
  addRecipe("r26 -> 7gm,nor,eth,sock=4", ["vps", "r26", "r06", "glg"], "7gm,nor,eth,sock=4", L100());
  addRecipe("r25 -> 7gm,nor,eth,sock=5", ["vps", "r25", "r07", "glg"], "7gm,nor,eth,sock=5", L100());
  addRecipe("r23 -> 7gm,nor,eth,sock=6", ["vps", "r23", "r08", "glg"], "7gm,nor,eth,sock=6", L100());
  addRecipe("r22 -> 7st,nor,eth", ["vps", "r22", "r09", "glg"], "7st,nor,eth", L100());
  addRecipe("r25 -> 7p7,nor,eth", ["vps", "r25", "r10", "glg"], "7p7,nor,eth", L100());
  addRecipe("r20 -> 7gs,nor,eth", ["vps", "r20", "r01", "gly"], "7gs,nor,eth", L100());
  addRecipe("r22 -> 7gs,nor,eth,sock=4", ["vps", "r22", "r02", "gly"], "7gs,nor,eth,sock=4", L100());
  addRecipe("r21 -> 7cm,nor,eth,sock=4", ["vps", "r21", "r03", "gly"], "7cm,nor,eth,sock=4", L100());
  addRecipe("r23 -> 7gd,nor,eth", ["vps", "r23", "r04", "gly"], "7gd,nor,eth", L100());
  addRecipe("r22 -> 7gd,nor,eth,sock=4", ["vps", "r22", "r05", "gly"], "7gd,nor,eth,sock=4", L100());
  addRecipe("r22 -> 7gd,nor,sock=5", ["vps", "r22", "r06", "gly"], "7gd,nor,sock=5", L100());
  addRecipe("r24 -> 7gd,nor,eth,sock=5", ["vps", "r24", "r07", "gly"], "7gd,nor,eth,sock=5", L100());
  addRecipe("r24 -> 7gd,nor,eth,sock=6", ["vps", "r24", "r08", "gly"], "7gd,nor,eth,sock=6", L100());
  addRecipe("r22 -> 7s8,nor,sock=4", ["vps", "r22", "r09", "gly"], "7s8,nor,sock=4", L100());
  addRecipe("r22 -> 7s8,nor,eth", ["vps", "r22", "r10", "gly"], "7s8,nor,eth", L100());
  addRecipe("r27 -> 7s8,nor,eth,sock=4", ["vps", "r27", "r01", "glb"], "7s8,nor,eth,sock=4", L100());
  addRecipe("r22 -> 7s8,nor,eth,sock=5", ["vps", "r22", "r02", "glb"], "7s8,nor,eth,sock=5", L100());
  addRecipe("r25 -> 7vo,nor,eth,sock=4", ["vps", "r25", "r03", "glb"], "7vo,nor,eth,sock=4", L100());
  addRecipe("r27 -> 7wc,nor,eth,sock=4", ["vps", "r27", "r04", "glb"], "7wc,nor,eth,sock=4", L100());
  addRecipe("r26 -> 7pa,nor,sock=4", ["vps", "r26", "r05", "glb"], "7pa,nor,sock=4", L100());
  addRecipe("r25 -> 7h7,nor,eth,sock=4", ["vps", "r25", "r06", "glb"], "7h7,nor,eth,sock=4", L100());
  addRecipe("r25 -> 7h7,nor,eth,sock=5", ["vps", "r25", "r07", "glb"], "7h7,nor,eth,sock=5", L100());
  addRecipe("r20 -> fla,nor,sock=3", ["vps", "r20", "r08", "glb"], "fla,nor,sock=3", L100());
  addRecipe("r20 -> fla,nor,sock=4", ["vps", "r20", "r09", "glb"], "fla,nor,sock=4", L100());
  addRecipe("r20 -> fla,nor,sock=5", ["vps", "r20", "r10", "glb"], "fla,nor,sock=5", L100());
  addRecipe("r22 -> fla,nor,eth,sock=4", ["vps", "r22", "r01", "glr"], "fla,nor,eth,sock=4", L100());
  addRecipe("r21 -> fla,nor,eth,sock=5", ["vps", "r21", "r02", "glr"], "fla,nor,eth,sock=5", L100());
  addRecipe("r20 -> crs,nor,sock=4", ["vps", "r20", "r03", "glr"], "crs,nor,sock=4", L100());
  addRecipe("r22 -> crs,nor,sock=5", ["vps", "r22", "r04", "glr"], "crs,nor,sock=5", L100());
  addRecipe("r20 -> crs,nor,sock=6", ["vps", "r20", "r05", "glr"], "crs,nor,sock=6", L100());
  addRecipe("r21 -> crs,nor,eth,sock=4", ["vps", "r21", "r06", "glr"], "crs,nor,eth,sock=4", L100());
  addRecipe("r24 -> crs,nor,eth,sock=5", ["vps", "r24", "r07", "glr"], "crs,nor,eth,sock=5", L100());
  addRecipe("r20 -> uh9,nor,sock=3", ["vps", "r20", "r08", "glr"], "uh9,nor,sock=3", L100());
  addRecipe("r20 -> xtp,nor,sock=3", ["vps", "r20", "r09", "glr"], "xtp,nor,sock=3", L100());
  addRecipe("r20 -> xtp,nor,sock=4", ["vps", "r20", "r10", "glr"], "xtp,nor,sock=4", L100());
  addRecipe("r20 -> utp,nor,sock=3", ["vps", "r20", "r01", "gzv"], "utp,nor,sock=3", L100());
  addRecipe("r20 -> utp,nor,sock=4", ["vps", "r20", "r02", "gzv"], "utp,nor,sock=4", L100());
  addRecipe("r20 -> uui,nor,sock=3", ["vps", "r20", "r03", "gzv"], "uui,nor,sock=3", L100());
  addRecipe("r20 -> uui,nor,sock=4", ["vps", "r20", "r04", "gzv"], "uui,nor,sock=4", L100());
  addRecipe("r24 -> uar,nor,eth,sock=3", ["vps", "r24", "r05", "gzv"], "uar,nor,eth,sock=3", L100());
  addRecipe("r24 -> uar,nor,eth,sock=4", ["vps", "r24", "r06", "gzv"], "uar,nor,eth,sock=4", L100());
  addRecipe("r21 -> uit,nor,sock=4", ["vps", "r21", "r07", "gzv"], "uit,nor,sock=4", L100());
  addRecipe("r21 -> uit,nor,eth", ["vps", "r21", "r08", "gzv"], "uit,nor,eth", L100());

  // NEW: Additional popular bases
  // Using new gem category page 'skl' (Flawless Skull)
  addRecipe("r21 -> Monarch 4os", ["vps", "r21", "r01", "skl"], "uit,nor,sock=4", L100());
  addRecipe("r23 -> Eth Monarch 4os", ["vps", "r23", "r02", "skl"], "uit,nor,eth,sock=4", L100());
  addRecipe("r24 -> Eth Dusk Shroud 3os", ["vps", "r24", "r03", "skl"], "uui,nor,eth,sock=3", L100());
  addRecipe("r24 -> Eth Archon Plate 3os", ["vps", "r24", "r04", "skl"], "utp,nor,eth,sock=3", L100());
  addRecipe("r25 -> Eth Archon Plate 4os", ["vps", "r25", "r05", "skl"], "utp,nor,eth,sock=4", L100());
  addRecipe("r21 -> Wyrmhide 3os", ["vps", "r21", "r06", "skl"], "uhl,nor,sock=3", L100());
  addRecipe("r27 -> Eth Berserker Axe 6os", ["vps", "r27", "r07", "skl"], "72a,nor,eth,sock=6", L100());
  addRecipe("r22 -> Eth Cryptic Axe 5os", ["vps", "r22", "r08", "skl"], "7cm,nor,eth,sock=5", L100());
  addRecipe("r22 -> Eth Giant Thresher", ["vps", "r22", "r09", "skl"], "7h7,nor,eth", L100());
  addRecipe("r20 -> Broad Sword 4os", ["vps", "r20", "r10", "skl"], "bsd,nor,sock=4", L100());
}

// ============================================================
// WRITE OUTPUT
// ============================================================
D2RMM.writeTsv(cubemainFilename, cubemain);

