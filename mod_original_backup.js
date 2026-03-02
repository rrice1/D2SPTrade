const cubemainFilename = "global\\excel\\cubemain.txt";
const cubemain = D2RMM.readTsv(cubemainFilename);

const uniqueitemsFilename = 'global\\excel\\uniqueitems.txt';
const uniqueitems = D2RMM.readTsv(uniqueitemsFilename);
const setitemsFilename = 'global\\excel\\setitems.txt';
const setitems = D2RMM.readTsv(setitemsFilename);


uniqueitems.rows.forEach((row) => {
    if (config.allowRedrop) {
      row.nolimit = 1;
    }
  });
  D2RMM.writeTsv(uniqueitemsFilename, uniqueitems);

const itemTypes = {
  'weap': { 'name': 'Weapon', 'min_sock': 1, 'max_sock': 6 },
  'shld': { 'name': 'Shield', 'min_sock': 1, 'max_sock': 4 },
  'tors': { 'name': 'Body Armor', 'min_sock': 1, 'max_sock': 4 },
  'helm': { 'name': 'Helm', 'min_sock': 1, 'max_sock': 3 },
};

if (config.servicesMarket) {
for (let i in itemTypes) {
  cubemain.rows.push({
    'description': `Lazruk Quest`,
    'enabled': 1,
    'version': 100,
    'numinputs': 5,
    'input 1': `${i},nru,nos`,
    'input 2': 'r23',
	'input 3': 'vps',
	'input 4': 'isc',
	'input 5': 'tsc',
    'output': 'useitem',
    'mod 1': 'sock',
    'mod 1 min': itemTypes[i]['max_sock'],
    'mod 1 max': itemTypes[i]['max_sock'],
    '*eol': 0,
  });
}
}



if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Lem Cheap",
    enabled: 1,
    version: 100,
    numinputs: 4,
    "input 1": "r20,qty=3",
    "input 2": "yps",
    "output": "r19",
    "output b": "r18",
    "output c": "r17",
    "*eol": 0,
  });
}


if (config.gemMarket) {
cubemain.rows.push({
    description:
      "Lem Cash",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "r20",
    "input 2": "yps",
    "output": "gpw",
    "output b": "gpg",
    "output c": "gpy",
    "*eol": 0,
  });
}


if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Lem Fix",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "r20,qty=2",
    "output": "r21",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Pul Break",
    enabled: 1,
    version: 100,
    numinputs: 1,
    "input 1": "r21",
    "output": "r20",
    "output b": "r20",
    "*eol": 0,
  });
}

if (config.gemMarket) {
  for (let i = 1; i <= 18; i++) {
    const runeCode = `r${String(i).padStart(2, "0")}`;
    cubemain.rows.push({
      description: `10 ${runeCode} -> Um`,
      enabled: 1,
      version: 100,
      numinputs: 11,
      "input 1": `${runeCode},qty=10`,
      "input 2": "vps",
      "output": "r22",
      "*eol": 0,
    });
  }
}

if (config.gemMarket) {
cubemain.rows.push({
    description:
      "10 Diamond -> Pul",
    enabled: 1,
    version: 100,
    numinputs: 11,
    "input 1": "gpw,qty=10",
    "input 2": "vps",
    "output": "r21",
    "*eol": 0,
  });
}

if (config.gemMarket) {
cubemain.rows.push({
    description:
      "10 Emerald -> Pul",
    enabled: 1,
    version: 100,
    numinputs: 11,
    "input 1": "gpg,qty=10",
    "input 2": "vps",
    "output": "r21",
    "*eol": 0,
  });
}

if (config.gemMarket) {
cubemain.rows.push({
    description:
      "10 Sapphire -> Pul",
    enabled: 1,
    version: 100,
    numinputs: 11,
    "input 1": "gpb,qty=10",
    "input 2": "vps",
    "output": "r21",
    "*eol": 0,
  });
}


if (config.gemMarket) {
cubemain.rows.push({
    description:
      "10 Topaz -> Pul",
    enabled: 1,
    version: 100,
    numinputs: 11,
    "input 1": "gpy,qty=10",
    "input 2": "vps",
    "output": "r21",
    "*eol": 0,
  });
}

if (config.gemMarket) {
cubemain.rows.push({
    description:
      "10 Ruby -> Um",
    enabled: 1,
    version: 100,
    numinputs: 11,
    "input 1": "gpr,qty=10",
    "input 2": "vps",
    "output": "r22",
    "*eol": 0,
  });
}


if (config.gemMarket) {
cubemain.rows.push({
    description:
      "10 Skull -> Um",
    enabled: 1,
    version: 100,
    numinputs: 11,
    "input 1": "skz,qty=10",
    "input 2": "vps",
    "output": "r22",
    "*eol": 0,
  });
}

if (config.gemMarket) {
cubemain.rows.push({
    description:
      "10 Amethyst -> Mal",
    enabled: 1,
    version: 100,
    numinputs: 11,
    "input 1": "gpv,qty=10",
    "input 2": "vps",
    "output": "r23",
    "*eol": 0,
  });
}

if (config.gemMarket) {
cubemain.rows.push({
    description:
      "Lem -> 3 P Sapphires",
    enabled: 1,
    version: 100,
    numinputs: 3,
    "input 1": "r20",
    "input 2": "vps",
    "input 3": "isc",
    "output": "gpb",
    "output b": "gpb",
    "output c": "gpb",
    "*eol": 0,
  });
}

if (config.gemMarket) {
cubemain.rows.push({
    description:
      "Lem -> 3 P Skulls",
    enabled: 1,
    version: 100,
    numinputs: 3,
    "input 1": "r20",
    "input 2": "yps",
    "input 3": "isc",
    "output": "skz",
    "output b": "skz",
    "output c": "skz",
    "*eol": 0,
  });
}

if (config.gemMarket) {
cubemain.rows.push({
    description:
      "Lem -> 3 P Rubies",
    enabled: 1,
    version: 100,
    numinputs: 3,
    "input 1": "r20",
    "input 2": "wms",
    "input 3": "isc",
    "output": "gpr",
    "output b": "gpr",
    "output c": "gpr",
    "*eol": 0,
  });
}


if (config.gemMarket) {
cubemain.rows.push({
    description:
      "Pul -> 3 P Amethysts",
    enabled: 1,
    version: 100,
    numinputs: 3,
    "input 1": "r21",
    "input 2": "vps",
    "input 3": "isc",
    "output": "gpv",
    "output b": "gpv",
    "output c": "gpv",
    "*eol": 0,
  });
}

if (config.gemMarket) {
cubemain.rows.push({
    description:
      "Lem -> 3 Hel",
    enabled: 1,
    version: 100,
    numinputs: 3,
    "input 1": "r20",
    "input 2": "yps",
    "input 3": "tsc",
    "output": "r15",
    "output b": "r15",
    "output c": "r15",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Pul Lem -> Um",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "r21",
    "input 2": "r20",
    "output": "r22",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Um -> Pul Lem",
    enabled: 1,
    version: 100,
    numinputs: 1,
    "input 1": "r22",
    "output": "r21",
    "output b": "r20",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Pul Um -> Mal",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "r22",
    "input 2": "r21",
    "output": "r23",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Mal -> Um Pul",
    enabled: 1,
    version: 100,
    numinputs: 1,
    "input 1": "r23",
    "output": "r22",
    "output b": "r21",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Mal Um -> Ist",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "r23",
    "input 2": "r22",
    "output": "r24",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Ist -> Mal Um",
    enabled: 1,
    version: 100,
    numinputs: 1,
    "input 1": "r24",
    "output": "r23",
    "output b": "r22",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Ist Mal -> Gul",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "r23",
    "input 2": "r24",
    "output": "r25",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Gul -> Ist Mal",
    enabled: 1,
    version: 100,
    numinputs: 1,
    "input 1": "r25",
    "output": "r24",
    "output b": "r23",
    "*eol": 0,
  });
}



if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "3 Ist -> Vex",
    enabled: 1,
    version: 100,
    numinputs: 3,
    "input 1": "r24,qty=3",
    "output": "r26",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Vex -> 3 Ist",
    enabled: 1,
    version: 100,
    numinputs: 1, 
    "input 1": "r26",
    "output": "r24",
    "output b": "r24",
    "output c": "r24",
    "*eol": 0,
  });
}


if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "1 Vex 2 Ist -> Ohm",
    enabled: 1,
    version: 100,
    numinputs: 3,
    "input 1": "r26",
    "input 2": "r24,qty=2",
    "output": "r27",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Ohm -> 1 Vex 2 Ist",
    enabled: 1,
    version: 100,
    numinputs: 1, 
    "input 1": "r27",
    "output": "r26",
    "output b": "r24",
    "output c": "r24",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Ohm Vex Ist -> Lo",
    enabled: 1,
    version: 100,
    numinputs: 3,
    "input 1": "r24",
    "input 2": "r26",
    "input 3": "r27",
    "output": "r28",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Lo -> Ohm Vex Ist",
    enabled: 1,
    version: 100,
    numinputs: 1,
    "input 1": "r28",
    "output": "r27",
    "output b": "r26",
    "output c": "r24",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "3 Ohm -> Sur",
    enabled: 1,
    version: 100,
    numinputs: 3,
    "input 1": "r27,qty=3",
    "output": "r29",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Sur -> 3 Ohm",
    enabled: 1,
    version: 100,
    numinputs: 1, 
    "input 1": "r29",
    "output": "r27",
    "output b": "r27",
    "output c": "r27",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Ber -> Sur Lo Vex",
    enabled: 1,
    version: 100,
    numinputs: 1, 
    "input 1": "r30",
    "output": "r29",
    "output b": "r28",
    "output c": "r26",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Sur Lo Vex -> Ber",
    enabled: 1,
    version: 100,
    numinputs: 3,
    "input 1": "r26",
    "input 2": "r28",
    "input 3": "r29",
    "output": "r30",
    "*eol": 0,
  });
}



if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Jah -> Ber Lo",
    enabled: 1,
    version: 100,
    numinputs: 1, 
    "input 1": "r31",
    "output": "r30",
    "output b": "r28",
    "*eol": 0,
  });
}


if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Ber Lo -> Jah",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "r28",
    "input 2": "r30",
    "output": "r31",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Cham -> Vex Gul Ist",
    enabled: 1,
    version: 100,
    numinputs: 1,
    "input 1": "r32",
    "output": "r26",
    "output b": "r25",
    "output c": "r24", 
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Vex Gul Ist -> Cham",
    enabled: 1,
    version: 100,
    numinputs: 3,
    "input 1": "r25,",
    "input 2": "r24",
    "input 3": "r26",
    "output": "r32",
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Zod -> Ohm Vex Gul",
    enabled: 1,
    version: 100,
    numinputs: 1,
    "input 1": "r33",
    "output": "r27",
    "output b": "r26",
    "output c": "r25", 
    "*eol": 0,
  });
}

if (config.ecoRunes) {
cubemain.rows.push({
    description:
      "Ohm Vex Gul -> Zod",
    enabled: 1,
    version: 100,
    numinputs: 3,
    "input 1": "r25,",
    "input 2": "r26",
    "input 3": "r27",
    "output": "r33",
    "*eol": 0,
  });
}


if (config.torchMarket) {
cubemain.rows.push({
    description:
      "Vex -> Ancient 1",
    enabled: 1,
    version: 100,
    numinputs: 3,
    "input 1": "r26",
    "input 2": "r01",
    "input 3": "wms",
    "output": "ua1",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.torchMarket) {
cubemain.rows.push({
    description:
      "Vex -> Ancient 2",
    enabled: 1,
    version: 100,
    numinputs: 3,
    "input 1": "r26",
    "input 2": "r02",
    "input 3": "wms",
    "output": "ua2",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.torchMarket) {
cubemain.rows.push({
    description:
      "Vex -> Ancient 3",
    enabled: 1,
    version: 100,
    numinputs: 3,
    "input 1": "r26",
    "input 2": "r03",
    "input 3": "wms",
    "output": "ua3",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.torchMarket) {
cubemain.rows.push({
    description:
      "Vex -> Ancient 4",
    enabled: 1,
    version: 100,
    numinputs: 3,
    "input 1": "r26",
    "input 2": "r04",
    "input 3": "wms",
    "output": "ua4",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.torchMarket) {
cubemain.rows.push({
    description:
      "Vex -> Ancient 5",
    enabled: 1,
    version: 100,
    numinputs: 3,
    "input 1": "r26",
    "input 2": "r05",
    "input 3": "wms",
    "output": "ua5",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}


if (config.torchMarket) {
cubemain.rows.push({
    description:
      "Ancient 1 -> Vex",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "ua1",
    "input 2": "wms",
    "output": "r26",
    "*eol": 0,
  });
}

if (config.torchMarket) {
cubemain.rows.push({
    description:
      "Ancient 2 -> Vex",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "ua2",
    "input 2": "wms",
    "output": "r26",
    "*eol": 0,
  });
}

if (config.torchMarket) {
cubemain.rows.push({
    description:
      "Ancient 3 -> Vex",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "ua3",
    "input 2": "wms",
    "output": "r26",
    "*eol": 0,
  });
}

if (config.torchMarket) {
cubemain.rows.push({
    description:
      "Ancient 4 -> Vex",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "ua4",
    "input 2": "wms",
    "output": "r26",
    "*eol": 0,
  });
}

if (config.torchMarket) {
cubemain.rows.push({
    description:
      "Ancient 5 -> Vex",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "ua5",
    "input 2": "wms",
    "output": "r26",
    "*eol": 0,
  });
}


    if (config.torchMarket) {
      cubemain.rows.push({
        description: "Defender's Bile -> r29",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Defender's Bile",
        "output": "r29",
        "*eol": 0,
      });
    }

 
    if (config.torchMarket) {
      cubemain.rows.push({
        description: "Guardian's Thunder -> r29",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Guardian's Thunder",
        "output": "r29",
        "*eol": 0,
      });
    }

  
    if (config.torchMarket) {
      cubemain.rows.push({
        description: "Protector's Frost -> r29",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Protector's Frost",
        "output": "r29",
        "*eol": 0,
      });
    }

  
    if (config.torchMarket) {
      cubemain.rows.push({
        description: "Defender's Fire -> r29",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Defender's Fire",
        "output": "r29",
        "*eol": 0,
      });
    }

    
    if (config.torchMarket) {
      cubemain.rows.push({
        description: "Protector's Stone -> r29",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Protector's Stone",
        "output": "r29",
        "*eol": 0,
      });
    }

  
    if (config.torchMarket) {
      cubemain.rows.push({
        description: "Guardian's Light -> r29",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Guardian's Light",
        "output": "r29",
        "*eol": 0,
      });
    }


if (config.torchMarket) {
cubemain.rows.push({
    description:
      "Torch -> Vex Um",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "Hellfire Torch",
    "input 2": "yps",
    "output": "r26",
    "output b": "r22",
    "*eol": 0,
  });
}

if (config.torchMarket) {
cubemain.rows.push({
    description:
      "Keys -> Ist",
    enabled: 1,
    version: 100,
    numinputs: 4,
    "input 1": "pk1",
    "input 2": "pk2",
    "input 3": "pk3",
    "input 4": "wms",
    "output": "r24",
    "*eol": 0,
  });
}

if (config.torchMarket) {
cubemain.rows.push({
    description:
      "Ist -> Keys",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "r24",
    "input 2": "wms",
    "output": "pk1",
    "output b": "pk2",
    "output c": "pk3",
    "*eol": 0,
  });
}

if (config.uniqueMarket) {
cubemain.rows.push({
    description:
      "Ist -> Rainbow Facet",
    enabled: 1,
    version: 100,
    numinputs: 3,
    "input 1": "r24",
    "input 2": "jew",
    "input 3": "vps",
    "output": "jew,uni",
    lvl: 100,
    ilvl: 100,
    "*eol": 0,
  });
}

if (config.uniqueMarket) {
cubemain.rows.push({
    description:
      "Rainbow Facet -> Mal",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "jew,uni",
    "input 2": "yps",
    "output": "r23",
    "*eol": 0,
  });
}

if (config.torchMarket) {
cubemain.rows.push({
    description:
      "Key 1 + Pul = Key 2",
    enabled: 1,
    version: 100,
    numinputs: 3,
    "input 1": "pk1",
    "input 2": "r21",
    "input 4": "wms",
    "output": "pk2",
    "*eol": 0,
  });
}

if (config.torchMarket) {
cubemain.rows.push({
    description:
      "Key 2 + Pul = Key 3",
    enabled: 1,
    version: 100,
    numinputs: 3,
    "input 1": "pk2",
    "input 2": "r21",
    "input 3": "wms",
    "output": "pk3",
    "*eol": 0,
  });
}

if (config.torchMarket) {
cubemain.rows.push({
    description:
      "Key 3 + Pul = Key 1",
    enabled: 1,
    version: 100,
    numinputs: 3,
    "input 1": "pk3",
    "input 2": "r21",
    "input 3": "wms",
    "output": "pk1",
    "*eol": 0,
  });
}

if (config.servicesMarket) {
cubemain.rows.push({
description:
"Removes and preserves socketed items",
enabled: 1,
version: 100,
numinputs: 3,
"input 1": "any,sock",
"input 2": "toa",
"input 3": "wms",
"output": "useitem,rem",
lvl: 100,
ilvl: 100,
"*eol": 0,
});
}



if (config.magicMarket) {
cubemain.rows.push({
description:
"Pul for Fine Small Charm",
enabled: 1,
version: 100,
numinputs: 4,
"input 1": "cm1",
"input 2": "r21",
"input 3": "glw",
"input 4": "vps",
"output": "cm1,mag,pre=256",
lvl: 100,
ilvl: 100,
"*eol": 0,
});
}


if (config.magicMarket) {
cubemain.rows.push({
description:
"Gul for Shimmering Small Charm",
enabled: 1,
version: 100,
numinputs: 4,
"input 1": "cm1",
"input 2": "r25",
"input 3": "glw",
"input 4": "vps",
"output": "cm1,mag,pre=322",
lvl: 100,
ilvl: 100,
"*eol": 0,
});
}


if (config.magicMarket) {
cubemain.rows.push({
description:
"Um for Small Charm of Good Luck",
enabled: 1,
version: 100,
numinputs: 4,
"input 1": "cm1",
"input 2": "r22",
"input 3": "glw",
"input 4": "vps",
"output": "cm1,mag,suf=291",
lvl: 100,
ilvl: 100,
"*eol": 0,
});
}

if (config.magicMarket) {
cubemain.rows.push({
description:
"Mal for Small Charm of Vita",
enabled: 1,
version: 100,
numinputs: 4,
"input 1": "cm1",
"input 2": "r23",
"input 3": "glw",
"input 4": "vps",
"output": "cm1,mag,suf=349",
lvl: 100,
ilvl: 100,
"*eol": 0,
});
}

if (config.magicMarket) {
cubemain.rows.push({
description:
"Lem for Small Charm of Inertia",
enabled: 1,
version: 100,
numinputs: 4,
"input 1": "cm1",
"input 2": "r20",
"input 3": "glw",
"input 4": "vps",
"output": "cm1,mag,suf=401",
lvl: 100,
ilvl: 100,
"*eol": 0,
});
}


const SKILL_GROUPS = [
  { name: "Bow", id: 430, rank: "r22" },
  { name: "Passives", id: 431, rank: "r20" },
  { name: "Javelin", id: 432, rank: "r24" },
  { name: "Fire", id: 442, rank: "r22" },
  { name: "Lightning", id: 443, rank: "r25" },
  { name: "Cold", id: 444, rank: "r23" },
  { name: "Curses", id: 454, rank: "r20" },
  { name: "Poison and Bone", id: 455, rank: "r23" },
  { name: "Summoning (Necro)", id: 456, rank: "r22" },
  { name: "Combat Arts (Pal)", id: 466, rank: "r25" },
  { name: "Offensive", id: 467, rank: "r23" },
  { name: "Defensive", id: 468, rank: "r20" },
  { name: "Combat Masteries", id: 478, rank: "r20" },
  { name: "Combat Skills (Barb)", id: 479, rank: "r21" },
  { name: "Shouts", id: 480, rank: "r22" },
  { name: "Summoning (Druid)", id: 490, rank: "r20" },
  { name: "Shapeshifting", id: 491, rank: "r22" },
  { name: "Elemental", id: 492, rank: "r23" },
  { name: "Traps", id: 502, rank: "r23" },
  { name: "Disciplines", id: 503, rank: "r21" },
  { name: "Martial Arts", id: 504, rank: "r22" },
  { name: "Chaos", id: 700, rank: "r25" },
  { name: "Eldritch", id: 701, rank: "r26" },
  { name: "Demons", id: 702, rank: "r24" }
];

if (config.magicMarket) {
  for (let i = 0; i < SKILL_GROUPS.length; i++) {
    let skill = SKILL_GROUPS[i];
    
    let groupNum = Math.floor(i / 3) + 1;
    let groupRank = `r${groupNum.toString().padStart(2, '0')}`;

    cubemain.rows.push({
      'description': `${skill.rank} --> ${skill.name}`,
      'enabled': 1,
      'version': 100,
      'numinputs': 4,
      'input 1': 'cm3',
      'input 2': groupRank, 
      'input 3': skill.rank,
      'input 4': 'vps',
      'output': `cm3,mag,pre=${skill.id}`,
      lvl: 100, 
      ilvl: 100,	
      '*eol': 0,
    });
  }
}

 if (config.torchMarket) {
      cubemain.rows.push({
        description: "Annihilus -> r27",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Annihilus",
        "output": "r27",
	"output b": "r26",
        "*eol": 0,
      });
    }

if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Civerb's Ward",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "lrg",
        "input 4": "tsc",
        "output": "Civerb's Ward",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Civerb's Ward -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Civerb's Ward",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Civerb's Icon",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "amu",
        "input 4": "glv",
        "output": "Civerb's Icon",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Civerb's Icon -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Civerb's Icon",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Civerb's Cudgel",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "gsc",
        "input 4": "tsc",
        "output": "Civerb's Cudgel",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Civerb's Cudgel -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Civerb's Cudgel",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Hsarus' Iron Heel",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "mbt",
        "input 4": "tsc",
        "output": "Hsarus' Iron Heel",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Hsarus' Iron Heel -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hsarus' Iron Heel",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Hsarus' Iron Fist",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "buc",
        "input 4": "tsc",
        "output": "Hsarus' Iron Fist",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Hsarus' Iron Fist -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hsarus' Iron Fist",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Hsarus' Iron Stay",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "mbl",
        "input 4": "tsc",
        "output": "Hsarus' Iron Stay",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Hsarus' Iron Stay -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hsarus' Iron Stay",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Cleglaw's Tooth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "lsd",
        "input 4": "tsc",
        "output": "Cleglaw's Tooth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Cleglaw's Tooth -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Cleglaw's Tooth",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Cleglaw's Claw",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "sml",
        "input 4": "tsc",
        "output": "Cleglaw's Claw",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Cleglaw's Claw -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Cleglaw's Claw",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Cleglaw's Pincers",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "mgl",
        "input 4": "tsc",
        "output": "Cleglaw's Pincers",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Cleglaw's Pincers -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Cleglaw's Pincers",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Iratha's Collar",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "amu",
        "input 4": "glr",
        "output": "Iratha's Collar",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Iratha's Collar -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Iratha's Collar",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Iratha's Cuff",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "tgl",
        "input 4": "tsc",
        "output": "Iratha's Cuff",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Iratha's Cuff -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Iratha's Cuff",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Iratha's Coil",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "crn",
        "input 4": "tsc",
        "output": "Iratha's Coil",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Iratha's Coil -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Iratha's Coil",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Iratha's Cord",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "tbl",
        "input 4": "tsc",
        "output": "Iratha's Cord",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Iratha's Cord -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Iratha's Cord",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Isenhart's Lightbrand",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "bsd",
        "input 4": "tsc",
        "output": "Isenhart's Lightbrand",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Isenhart's Lightbrand -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Isenhart's Lightbrand",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Isenhart's Parry",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "gts",
        "input 4": "tsc",
        "output": "Isenhart's Parry",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Isenhart's Parry -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Isenhart's Parry",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Isenhart's Case",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "brs",
        "input 4": "tsc",
        "output": "Isenhart's Case",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Isenhart's Case -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Isenhart's Case",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Isenhart's Horns",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "fhl",
        "input 4": "tsc",
        "output": "Isenhart's Horns",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Isenhart's Horns -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Isenhart's Horns",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Vidala's Barb",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "lbb",
        "input 4": "glb",
        "output": "Vidala's Barb",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Vidala's Barb -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Vidala's Barb",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Vidala's Fetlock",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "tbt",
        "input 4": "tsc",
        "output": "Vidala's Fetlock",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Vidala's Fetlock -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Vidala's Fetlock",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Vidala's Ambush",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "lea",
        "input 4": "tsc",
        "output": "Vidala's Ambush",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Vidala's Ambush -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Vidala's Ambush",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Vidala's Snare",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "amu",
        "input 4": "tsc",
        "output": "Vidala's Snare",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Vidala's Snare -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Vidala's Snare",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Milabrega's Orb",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "kit",
        "input 4": "tsc",
        "output": "Milabrega's Orb",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Milabrega's Orb -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Milabrega's Orb",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Milabrega's Rod",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "wsp",
        "input 4": "tsc",
        "output": "Milabrega's Rod",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Milabrega's Rod -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Milabrega's Rod",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Milabrega's Diadem",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "crn",
        "input 4": "tsc",
        "output": "Milabrega's Diadem",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Milabrega's Diadem -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Milabrega's Diadem",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Milabrega's Robe",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "aar",
        "input 4": "tsc",
        "output": "Milabrega's Robe",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Milabrega's Robe -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Milabrega's Robe",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Cathan's Rule",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "bst",
        "input 4": "gly",
        "output": "Cathan's Rule",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Cathan's Rule -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Cathan's Rule",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Cathan's Mesh",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "chn",
        "input 4": "tsc",
        "output": "Cathan's Mesh",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Cathan's Mesh -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Cathan's Mesh",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Cathan's Visage",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "msk",
        "input 4": "tsc",
        "output": "Cathan's Visage",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Cathan's Visage -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Cathan's Visage",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Cathan's Sigil",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "amu",
        "input 4": "gly",
        "output": "Cathan's Sigil",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Cathan's Sigil -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Cathan's Sigil",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Cathan's Seal",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "rin",
        "input 4": "tsc",
        "output": "Cathan's Seal",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Cathan's Seal -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Cathan's Seal",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Tancred's Crowbill",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "mpi",
        "input 4": "tsc",
        "output": "Tancred's Crowbill",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Tancred's Crowbill -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Tancred's Crowbill",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Tancred's Spine",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "ful",
        "input 4": "tsc",
        "output": "Tancred's Spine",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Tancred's Spine -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Tancred's Spine",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Tancred's Hobnails",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "lbt",
        "input 4": "tsc",
        "output": "Tancred's Hobnails",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Tancred's Hobnails -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Tancred's Hobnails",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Tancred's Weird",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "amu",
        "input 4": "glw",
        "output": "Tancred's Weird",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Tancred's Weird -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Tancred's Weird",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Tancred's Skull",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "bhm",
        "input 4": "tsc",
        "output": "Tancred's Skull",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Tancred's Skull -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Tancred's Skull",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Sigon's Gage",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "hgl",
        "input 4": "tsc",
        "output": "Sigon's Gage",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Sigon's Gage -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Sigon's Gage",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Sigon's Visor",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "ghm",
        "input 4": "tsc",
        "output": "Sigon's Visor",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Sigon's Visor -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Sigon's Visor",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Sigon's Shelter",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "gth",
        "input 4": "tsc",
        "output": "Sigon's Shelter",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Sigon's Shelter -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Sigon's Shelter",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Sigon's Sabot",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "hbt",
        "input 4": "tsc",
        "output": "Sigon's Sabot",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Sigon's Sabot -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Sigon's Sabot",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Sigon's Wrap",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "hbl",
        "input 4": "tsc",
        "output": "Sigon's Wrap",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Sigon's Wrap -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Sigon's Wrap",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Sigon's Guard",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "tow",
        "input 4": "tsc",
        "output": "Sigon's Guard",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Sigon's Guard -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Sigon's Guard",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Infernal Cranium",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "cap",
        "input 4": "tsc",
        "output": "Infernal Cranium",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Infernal Cranium -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Infernal Cranium",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Infernal Torch",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "gwn",
        "input 4": "tsc",
        "output": "Infernal Torch",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Infernal Torch -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Infernal Torch",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r20 -> Infernal Sign",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "tbl",
        "input 4": "tsc",
        "output": "Infernal Sign",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Infernal Sign -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Infernal Sign",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Berserker's Headgear",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "hlm",
        "input 4": "tsc",
        "output": "Berserker's Headgear",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Berserker's Headgear -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Berserker's Headgear",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Berserker's Hauberk",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "spl",
        "input 4": "tsc",
        "output": "Berserker's Hauberk",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Berserker's Hauberk -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Berserker's Hauberk",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Berserker's Hatchet",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "2ax",
        "input 4": "tsc",
        "output": "Berserker's Hatchet",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Berserker's Hatchet -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Berserker's Hatchet",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Death's Hand",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "lgl",
        "input 4": "tsc",
        "output": "Death's Hand",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Death's Hand -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Death's Hand",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Death's Guard",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "lbl",
        "input 4": "tsc",
        "output": "Death's Guard",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Death's Guard -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Death's Guard",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Death's Touch",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "wsd",
        "input 4": "tsc",
        "output": "Death's Touch",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Death's Touch -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Death's Touch",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Angelic Sickle",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "sbr",
        "input 4": "tsc",
        "output": "Angelic Sickle",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Angelic Sickle -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Angelic Sickle",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Angelic Mantle",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "rng",
        "input 4": "tsc",
        "output": "Angelic Mantle",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Angelic Mantle -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Angelic Mantle",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r20 -> Angelic Halo",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "rin",
        "input 4": "tsc",
        "output": "Angelic Halo",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Angelic Halo -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Angelic Halo",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Angelic Wings",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "amu",
        "input 4": "gpw",
        "output": "Angelic Wings",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Angelic Wings -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Angelic Wings",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Arctic Horn",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "swb",
        "input 4": "tsc",
        "output": "Arctic Horn",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Arctic Horn -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Arctic Horn",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Arctic Furs",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "qui",
        "input 4": "tsc",
        "output": "Arctic Furs",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Arctic Furs -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Arctic Furs",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Arctic Binding",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "vbl",
        "input 4": "tsc",
        "output": "Arctic Binding",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Arctic Binding -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Arctic Binding",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r20 -> Arctic Mitts",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "tgl",
        "input 4": "tsc",
        "output": "Arctic Mitts",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Arctic Mitts -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Arctic Mitts",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r20 -> Arcanna's Sign",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "amu",
        "input 4": "tsc",
        "output": "Arcanna's Sign",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Arcanna's Sign -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Arcanna's Sign",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Arcanna's Deathwand",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "wst",
        "input 4": "tsc",
        "output": "Arcanna's Deathwand",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Arcanna's Deathwand -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Arcanna's Deathwand",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Arcanna's Head",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "skp",
        "input 4": "tsc",
        "output": "Arcanna's Head",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Arcanna's Head -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Arcanna's Head",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Arcanna's Flesh",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "ltp",
        "input 4": "tsc",
        "output": "Arcanna's Flesh",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Arcanna's Flesh -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Arcanna's Flesh",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Natalya's Totem",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "xh9",
        "input 4": "tsc",
        "output": "Natalya's Totem",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Natalya's Totem -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Natalya's Totem",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Natalya's Mark",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "7qr",
        "input 4": "tsc",
        "output": "Natalya's Mark",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Natalya's Mark -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Natalya's Mark",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Natalya's Shadow",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "ucl",
        "input 4": "tsc",
        "output": "Natalya's Shadow",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Natalya's Shadow -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Natalya's Shadow",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Natalya's Soul",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "xmb",
        "input 4": "tsc",
        "output": "Natalya's Soul",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Natalya's Soul -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Natalya's Soul",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Aldur's Stony Gaze",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "dr8",
        "input 4": "tsc",
        "output": "Aldur's Stony Gaze",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Aldur's Stony Gaze -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Aldur's Stony Gaze",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Aldur's Deception",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "uul",
        "input 4": "tsc",
        "output": "Aldur's Deception",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Aldur's Deception -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Aldur's Deception",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Aldur's Gauntlet",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9mt",
        "input 4": "tsc",
        "output": "Aldur's Gauntlet",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Aldur's Gauntlet -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Aldur's Gauntlet",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Aldur's Advance",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "xtb",
        "input 4": "tsc",
        "output": "Aldur's Advance",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Aldur's Advance -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Aldur's Advance",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Immortal King's Will",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "ba5",
        "input 4": "tsc",
        "output": "Immortal King's Will",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Immortal King's Will -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Immortal King's Will",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Immortal King's Soul Cage",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "uar",
        "input 4": "tsc",
        "output": "Immortal King's Soul Cage",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Immortal King's Soul Cage -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Immortal King's Soul Cage",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Immortal King's Detail",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "zhb",
        "input 4": "tsc",
        "output": "Immortal King's Detail",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Immortal King's Detail -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Immortal King's Detail",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Immortal King's Forge",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xhg",
        "input 4": "tsc",
        "output": "Immortal King's Forge",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Immortal King's Forge -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Immortal King's Forge",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Immortal King's Pillar",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xhb",
        "input 4": "tsc",
        "output": "Immortal King's Pillar",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Immortal King's Pillar -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Immortal King's Pillar",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Immortal King's Stone Crusher",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7m7",
        "input 4": "tsc",
        "output": "Immortal King's Stone Crusher",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Immortal King's Stone Crusher -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Immortal King's Stone Crusher",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Tal Rasha's Fire-Spun Cloth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "zmb",
        "input 4": "tsc",
        "output": "Tal Rasha's Fire-Spun Cloth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Tal Rasha's Fire-Spun Cloth -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Tal Rasha's Fire-Spun Cloth",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Tal Rasha's Adjudication",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "amu",
        "input 4": "tsc",
        "output": "Tal Rasha's Adjudication",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Tal Rasha's Adjudication -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Tal Rasha's Adjudication",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Tal Rasha's Lidless Eye",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "oba",
        "input 4": "tsc",
        "output": "Tal Rasha's Lidless Eye",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Tal Rasha's Lidless Eye -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Tal Rasha's Lidless Eye",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Tal Rasha's Howling Wind",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "uth",
        "input 4": "tsc",
        "output": "Tal Rasha's Howling Wind",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Tal Rasha's Howling Wind -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Tal Rasha's Howling Wind",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Tal Rasha's Horadric Crest",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "xsk",
        "input 4": "tsc",
        "output": "Tal Rasha's Horadric Crest",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Tal Rasha's Horadric Crest -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Tal Rasha's Horadric Crest",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Griswold's Valor",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "urn",
        "input 4": "tsc",
        "output": "Griswold's Valor",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Griswold's Valor -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Griswold's Valor",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Griswold's Heart",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xar",
        "input 4": "tsc",
        "output": "Griswold's Heart",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Griswold's Heart -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Griswold's Heart",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Griswolds's Redemption",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "7ws",
        "input 4": "r23",
        "output": "Griswolds's Redemption",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Griswolds's Redemption -> r24",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Griswolds's Redemption",
        "output": "r24",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Griswold's Honor",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "paf",
        "input 4": "tsc",
        "output": "Griswold's Honor",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Griswold's Honor -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Griswold's Honor",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Trang-Oul's Guise",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "uh9",
        "input 4": "tsc",
        "output": "Trang-Oul's Guise",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Trang-Oul's Guise -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Trang-Oul's Guise",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Trang-Oul's Scales",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xul",
        "input 4": "tsc",
        "output": "Trang-Oul's Scales",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Trang-Oul's Scales -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Trang-Oul's Scales",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Trang-Oul's Wing",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "ne9",
        "input 4": "tsc",
        "output": "Trang-Oul's Wing",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Trang-Oul's Wing -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Trang-Oul's Wing",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Trang-Oul's Claws",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "xmg",
        "input 4": "tsc",
        "output": "Trang-Oul's Claws",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Trang-Oul's Claws -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Trang-Oul's Claws",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Trang-Oul's Girth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "utc",
        "input 4": "tsc",
        "output": "Trang-Oul's Girth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Trang-Oul's Girth -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Trang-Oul's Girth",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> M'avina's True Sight",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "ci3",
        "input 4": "tsc",
        "output": "M'avina's True Sight",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "M'avina's True Sight -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "M'avina's True Sight",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> M'avina's Embrace",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "uld",
        "input 4": "tsc",
        "output": "M'avina's Embrace",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "M'avina's Embrace -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "M'avina's Embrace",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> M'avina's Icy Clutch",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xtg",
        "input 4": "tsc",
        "output": "M'avina's Icy Clutch",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "M'avina's Icy Clutch -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "M'avina's Icy Clutch",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> M'avina's Tenet",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "zvb",
        "input 4": "tsc",
        "output": "M'avina's Tenet",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "M'avina's Tenet -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "M'avina's Tenet",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> M'avina's Caster",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "amc",
        "input 4": "tsc",
        "output": "M'avina's Caster",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "M'avina's Caster -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "M'avina's Caster",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Telling of Beads",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "amu",
        "input 4": "tsc",
        "output": "Telling of Beads",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Telling of Beads -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Telling of Beads",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Laying of Hands",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "ulg",
        "input 4": "tsc",
        "output": "Laying of Hands",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Laying of Hands -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Laying of Hands",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Rite of Passage",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xlb",
        "input 4": "tsc",
        "output": "Rite of Passage",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Rite of Passage -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Rite of Passage",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Spiritual Custodian",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "uui",
        "input 4": "tsc",
        "output": "Spiritual Custodian",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Spiritual Custodian -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Spiritual Custodian",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Credendum",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "umc",
        "input 4": "tsc",
        "output": "Credendum",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Credendum -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Credendum",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Dangoon's Teaching",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7ma",
        "input 4": "tsc",
        "output": "Dangoon's Teaching",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Dangoon's Teaching -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Dangoon's Teaching",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Heaven's Taebaek",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "uts",
        "input 4": "tsc",
        "output": "Heaven's Taebaek",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Heaven's Taebaek -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Heaven's Taebaek",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Haemosu's Adament",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xrs",
        "input 4": "tsc",
        "output": "Haemosu's Adament",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Haemosu's Adament -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Haemosu's Adament",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Ondal's Almighty",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "uhm",
        "input 4": "tsc",
        "output": "Ondal's Almighty",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Ondal's Almighty -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Ondal's Almighty",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Guillaume's Face",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "xhm",
        "input 4": "tsc",
        "output": "Guillaume's Face",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Guillaume's Face -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Guillaume's Face",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Wilhelm's Pride",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "ztb",
        "input 4": "tsc",
        "output": "Wilhelm's Pride",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Wilhelm's Pride -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Wilhelm's Pride",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Magnus' Skin",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xvg",
        "input 4": "tsc",
        "output": "Magnus' Skin",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Magnus' Skin -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Magnus' Skin",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Wihtstan's Guard",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xml",
        "input 4": "tsc",
        "output": "Wihtstan's Guard",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Wihtstan's Guard -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Wihtstan's Guard",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r20 -> Hwanin's Splendor",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "xrn",
        "input 4": "tsc",
        "output": "Hwanin's Splendor",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Hwanin's Splendor -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hwanin's Splendor",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Hwanin's Refuge",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xcl",
        "input 4": "tsc",
        "output": "Hwanin's Refuge",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Hwanin's Refuge -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hwanin's Refuge",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r20 -> Hwanin's Seal",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "mbl",
        "input 4": "tsc",
        "output": "Hwanin's Seal",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Hwanin's Seal -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hwanin's Seal",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Hwanin's Justice",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9vo",
        "input 4": "tsc",
        "output": "Hwanin's Justice",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Hwanin's Justice -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hwanin's Justice",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Sazabi's Cobalt Redeemer",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7ls",
        "input 4": "tsc",
        "output": "Sazabi's Cobalt Redeemer",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Sazabi's Cobalt Redeemer -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Sazabi's Cobalt Redeemer",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Sazabi's Ghost Liberator",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "upl",
        "input 4": "tsc",
        "output": "Sazabi's Ghost Liberator",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Sazabi's Ghost Liberator -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Sazabi's Ghost Liberator",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Sazabi's Mental Sheath",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xhl",
        "input 4": "tsc",
        "output": "Sazabi's Mental Sheath",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Sazabi's Mental Sheath -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Sazabi's Mental Sheath",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Bul-Kathos' Sacred Charge",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "7gd",
        "input 4": "tsc",
        "output": "Bul-Kathos' Sacred Charge",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Bul-Kathos' Sacred Charge -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bul-Kathos' Sacred Charge",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Bul-Kathos' Tribal Guardian",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "7wd",
        "input 4": "tsc",
        "output": "Bul-Kathos' Tribal Guardian",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Bul-Kathos' Tribal Guardian -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bul-Kathos' Tribal Guardian",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Cow King's Horns",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xap",
        "input 4": "tsc",
        "output": "Cow King's Horns",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Cow King's Horns -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Cow King's Horns",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Cow King's Hide",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "stu",
        "input 4": "tsc",
        "output": "Cow King's Hide",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Cow King's Hide -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Cow King's Hide",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Cow King's Hoofs",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "vbt",
        "input 4": "tsc",
        "output": "Cow King's Hoofs",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Cow King's Hoofs -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Cow King's Hoofs",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Naj's Puzzler",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "6cs",
        "input 4": "tsc",
        "output": "Naj's Puzzler",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Naj's Puzzler -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Naj's Puzzler",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Naj's Light Plate",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "ult",
        "input 4": "tsc",
        "output": "Naj's Light Plate",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Naj's Light Plate -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Naj's Light Plate",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Naj's Circlet",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "ci0",
        "input 4": "tsc",
        "output": "Naj's Circlet",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Naj's Circlet -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Naj's Circlet",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r20 -> McAuley's Paragon",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "cap",
        "input 4": "tsc",
        "output": "McAuley's Paragon",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "McAuley's Paragon -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "McAuley's Paragon",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> McAuley's Riprap",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "vbt",
        "input 4": "tsc",
        "output": "McAuley's Riprap",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "McAuley's Riprap -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "McAuley's Riprap",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> McAuley's Taboo",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "vgl",
        "input 4": "tsc",
        "output": "McAuley's Taboo",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "McAuley's Taboo -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "McAuley's Taboo",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> McAuley's Superstition",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "bwn",
        "input 4": "tsc",
        "output": "McAuley's Superstition",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "McAuley's Superstition -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "McAuley's Superstition",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r20 -> Warlord's Lust",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "ghm",
        "input 4": "tsc",
        "output": "Warlord's Lust",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Warlord's Lust -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Warlord's Lust",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r20 -> Warlord's Mantle",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "ful",
        "input 4": "tsc",
        "output": "Warlord's Mantle",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Warlord's Mantle -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Warlord's Mantle",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r20 -> Warlord's Crushers",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "hbt",
        "input 4": "tsc",
        "output": "Warlord's Crushers",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Warlord's Crushers -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Warlord's Crushers",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r20 -> Warlord's Authority",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "hbl",
        "input 4": "tsc",
        "output": "Warlord's Authority",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Warlord's Authority -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Warlord's Authority",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r22 -> Bane's Oathmaker",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "kri",
        "input 4": "tsc",
        "output": "Bane's Oathmaker",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Bane's Oathmaker -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bane's Oathmaker",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r22 -> Bane's Wraithskin",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "hla",
        "input 4": "tsc",
        "output": "Bane's Wraithskin",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Bane's Wraithskin -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bane's Wraithskin",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r22 -> Bane's Authority",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "vbl",
        "input 4": "tsc",
        "output": "Bane's Authority",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Bane's Authority -> gpg",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bane's Authority",
        "output": "gpg",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Horazon's Countenance",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "usk",
        "input 4": "tsc",
        "output": "Horazon's Countenance",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Horazon's Countenance -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Horazon's Countenance",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Horazon's Dominion",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "xpl",
        "input 4": "tsc",
        "output": "Horazon's Dominion",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Horazon's Dominion -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Horazon's Dominion",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Horazon's Hold",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "xlg",
        "input 4": "tsc",
        "output": "Horazon's Hold",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Horazon's Hold -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Horazon's Hold",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Horazon's Legacy",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "utb",
        "input 4": "tsc",
        "output": "Horazon's Legacy",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Horazon's Legacy -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Horazon's Legacy",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Horazon's Secrets",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "wad",
        "input 4": "tsc",
        "output": "Horazon's Secrets",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Horazon's Secrets -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Horazon's Secrets",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> The Gnasher",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "hax",
        "input 4": "isc",
        "output": "The Gnasher",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Gnasher -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Gnasher",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Deathspade",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "axe",
        "input 4": "isc",
        "output": "Deathspade",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Deathspade -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Deathspade",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Bladebone",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "2ax",
        "input 4": "isc",
        "output": "Bladebone",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Bladebone -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bladebone",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Mindrend",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "mpi",
        "input 4": "isc",
        "output": "Mindrend",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Mindrend -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Mindrend",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Rakescar",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "wax",
        "input 4": "isc",
        "output": "Rakescar",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Rakescar -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Rakescar",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Fechmars Axe",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "lax",
        "input 4": "isc",
        "output": "Fechmars Axe",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Fechmars Axe -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Fechmars Axe",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Goreshovel",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "bax",
        "input 4": "isc",
        "output": "Goreshovel",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Goreshovel -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Goreshovel",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> The Chieftan",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "btx",
        "input 4": "isc",
        "output": "The Chieftan",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Chieftan -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Chieftan",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Brainhew",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "gax",
        "input 4": "isc",
        "output": "Brainhew",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Brainhew -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Brainhew",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> The Humongous",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "gix",
        "input 4": "isc",
        "output": "The Humongous",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Humongous -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Humongous",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Iros Torch",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "wnd",
        "input 4": "isc",
        "output": "Iros Torch",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Iros Torch -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Iros Torch",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Maelstromwrath",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "ywn",
        "input 4": "isc",
        "output": "Maelstromwrath",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Maelstromwrath -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Maelstromwrath",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Gravenspine",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "bwn",
        "input 4": "isc",
        "output": "Gravenspine",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Gravenspine -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Gravenspine",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Umes Lament",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "gwn",
        "input 4": "isc",
        "output": "Umes Lament",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Umes Lament -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Umes Lament",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Felloak",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "clb",
        "input 4": "isc",
        "output": "Felloak",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Felloak -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Felloak",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Knell Striker",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "scp",
        "input 4": "isc",
        "output": "Knell Striker",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Knell Striker -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Knell Striker",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Rusthandle",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "gsc",
        "input 4": "isc",
        "output": "Rusthandle",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Rusthandle -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Rusthandle",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Stormeye",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "wsp",
        "input 4": "isc",
        "output": "Stormeye",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Stormeye -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Stormeye",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Stoutnail",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "spc",
        "input 4": "isc",
        "output": "Stoutnail",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Stoutnail -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Stoutnail",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Crushflange",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "mac",
        "input 4": "isc",
        "output": "Crushflange",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Crushflange -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Crushflange",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Bloodrise",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "mst",
        "input 4": "isc",
        "output": "Bloodrise",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Bloodrise -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bloodrise",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> The Generals Tan Do Li Ga",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "fla",
        "input 4": "isc",
        "output": "The Generals Tan Do Li Ga",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Generals Tan Do Li Ga -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Generals Tan Do Li Ga",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Ironstone",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "whm",
        "input 4": "isc",
        "output": "Ironstone",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Ironstone -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Ironstone",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Bonesob",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "mau",
        "input 4": "isc",
        "output": "Bonesob",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Bonesob -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bonesob",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Steeldriver",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "gma",
        "input 4": "isc",
        "output": "Steeldriver",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Steeldriver -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Steeldriver",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Rixots Keen",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "ssd",
        "input 4": "isc",
        "output": "Rixots Keen",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Rixots Keen -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Rixots Keen",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Blood Crescent",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "scm",
        "input 4": "isc",
        "output": "Blood Crescent",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Blood Crescent -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Blood Crescent",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Krintizs Skewer",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "sbr",
        "input 4": "isc",
        "output": "Krintizs Skewer",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Krintizs Skewer -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Krintizs Skewer",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Gleamscythe",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "flc",
        "input 4": "isc",
        "output": "Gleamscythe",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Gleamscythe -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Gleamscythe",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Azurewrath",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "crs",
        "input 4": "isc",
        "output": "Azurewrath",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Azurewrath -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Azurewrath",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Griswolds Edge",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "bsd",
        "input 4": "isc",
        "output": "Griswolds Edge",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Griswolds Edge -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Griswolds Edge",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Hellplague",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "lsd",
        "input 4": "isc",
        "output": "Hellplague",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Hellplague -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hellplague",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Culwens Point",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "wsd",
        "input 4": "isc",
        "output": "Culwens Point",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Culwens Point -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Culwens Point",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Shadowfang",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "2hs",
        "input 4": "isc",
        "output": "Shadowfang",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Shadowfang -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Shadowfang",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Soulflay",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "clm",
        "input 4": "isc",
        "output": "Soulflay",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Soulflay -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Soulflay",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Kinemils Awl",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "gis",
        "input 4": "isc",
        "output": "Kinemils Awl",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Kinemils Awl -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Kinemils Awl",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Blacktongue",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "bsw",
        "input 4": "isc",
        "output": "Blacktongue",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Blacktongue -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Blacktongue",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Ripsaw",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "flb",
        "input 4": "isc",
        "output": "Ripsaw",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Ripsaw -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Ripsaw",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> The Patriarch",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "gsd",
        "input 4": "isc",
        "output": "The Patriarch",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Patriarch -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Patriarch",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Gull",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "dgr",
        "input 4": "isc",
        "output": "Gull",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Gull -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Gull",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> The Diggler",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "dir",
        "input 4": "isc",
        "output": "The Diggler",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Diggler -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Diggler",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> The Jade Tan Do",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "kri",
        "input 4": "isc",
        "output": "The Jade Tan Do",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Jade Tan Do -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Jade Tan Do",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Irices Shard",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "bld",
        "input 4": "isc",
        "output": "Irices Shard",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Irices Shard -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Irices Shard",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> The Dragon Chang",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "spr",
        "input 4": "isc",
        "output": "The Dragon Chang",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Dragon Chang -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Dragon Chang",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Razortine",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "tri",
        "input 4": "isc",
        "output": "Razortine",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Razortine -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Razortine",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Bloodthief",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "brn",
        "input 4": "isc",
        "output": "Bloodthief",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Bloodthief -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bloodthief",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Lance of Yaggai",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "spt",
        "input 4": "isc",
        "output": "Lance of Yaggai",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Lance of Yaggai -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Lance of Yaggai",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> The Tannr Gorerod",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "pik",
        "input 4": "isc",
        "output": "The Tannr Gorerod",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Tannr Gorerod -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Tannr Gorerod",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Dimoaks Hew",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "bar",
        "input 4": "isc",
        "output": "Dimoaks Hew",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Dimoaks Hew -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Dimoaks Hew",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Steelgoad",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "vou",
        "input 4": "isc",
        "output": "Steelgoad",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Steelgoad -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Steelgoad",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Soul Harvest",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "scy",
        "input 4": "isc",
        "output": "Soul Harvest",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Soul Harvest -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Soul Harvest",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> The Battlebranch",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "pax",
        "input 4": "isc",
        "output": "The Battlebranch",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Battlebranch -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Battlebranch",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Woestave",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "hal",
        "input 4": "isc",
        "output": "Woestave",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Woestave -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Woestave",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> The Grim Reaper",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "wsc",
        "input 4": "isc",
        "output": "The Grim Reaper",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Grim Reaper -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Grim Reaper",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Bane Ash",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "sst",
        "input 4": "isc",
        "output": "Bane Ash",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Bane Ash -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bane Ash",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Serpent Lord",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "lst",
        "input 4": "isc",
        "output": "Serpent Lord",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Serpent Lord -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Serpent Lord",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Lazarus Spire",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "cst",
        "input 4": "isc",
        "output": "Lazarus Spire",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Lazarus Spire -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Lazarus Spire",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> The Salamander",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "bst",
        "input 4": "isc",
        "output": "The Salamander",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Salamander -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Salamander",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> The Iron Jang Bong",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "wst",
        "input 4": "isc",
        "output": "The Iron Jang Bong",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Iron Jang Bong -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Iron Jang Bong",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Pluckeye",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "sbw",
        "input 4": "isc",
        "output": "Pluckeye",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Pluckeye -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Pluckeye",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Witherstring",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "hbw",
        "input 4": "isc",
        "output": "Witherstring",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Witherstring -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Witherstring",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Rimeraven",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "lbw",
        "input 4": "isc",
        "output": "Rimeraven",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Rimeraven -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Rimeraven",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Piercerib",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "cbw",
        "input 4": "isc",
        "output": "Piercerib",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Piercerib -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Piercerib",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Pullspite",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "sbb",
        "input 4": "isc",
        "output": "Pullspite",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Pullspite -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Pullspite",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Wizendraw",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "lbb",
        "input 4": "isc",
        "output": "Wizendraw",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Wizendraw -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Wizendraw",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Hellclap",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "swb",
        "input 4": "isc",
        "output": "Hellclap",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Hellclap -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hellclap",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Blastbark",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "lwb",
        "input 4": "isc",
        "output": "Blastbark",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Blastbark -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Blastbark",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Leadcrow",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "lxb",
        "input 4": "isc",
        "output": "Leadcrow",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Leadcrow -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Leadcrow",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Ichorsting",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "mxb",
        "input 4": "isc",
        "output": "Ichorsting",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Ichorsting -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Ichorsting",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Hellcast",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "hxb",
        "input 4": "isc",
        "output": "Hellcast",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Hellcast -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hellcast",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Doomspittle",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "rxb",
        "input 4": "isc",
        "output": "Doomspittle",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Doomspittle -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Doomspittle",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> War Bonnet",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "cap",
        "input 4": "isc",
        "output": "War Bonnet",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "War Bonnet -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "War Bonnet",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Tarnhelm",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "skp",
        "input 4": "isc",
        "output": "Tarnhelm",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Tarnhelm -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Tarnhelm",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Coif of Glory",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "hlm",
        "input 4": "isc",
        "output": "Coif of Glory",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Coif of Glory -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Coif of Glory",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Duskdeep",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "fhl",
        "input 4": "isc",
        "output": "Duskdeep",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Duskdeep -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Duskdeep",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Wormskull",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "bhm",
        "input 4": "isc",
        "output": "Wormskull",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Wormskull -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Wormskull",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Howltusk",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "ghm",
        "input 4": "isc",
        "output": "Howltusk",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Howltusk -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Howltusk",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Undead Crown",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "crn",
        "input 4": "isc",
        "output": "Undead Crown",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Undead Crown -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Undead Crown",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> The Face of Horror",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "msk",
        "input 4": "isc",
        "output": "The Face of Horror",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Face of Horror -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Face of Horror",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Greyform",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "qui",
        "input 4": "isc",
        "output": "Greyform",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Greyform -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Greyform",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Blinkbats Form",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "lea",
        "input 4": "isc",
        "output": "Blinkbats Form",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Blinkbats Form -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Blinkbats Form",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> The Centurion",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "hla",
        "input 4": "isc",
        "output": "The Centurion",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Centurion -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Centurion",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Twitchthroe",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "stu",
        "input 4": "isc",
        "output": "Twitchthroe",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Twitchthroe -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Twitchthroe",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Darkglow",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "rng",
        "input 4": "isc",
        "output": "Darkglow",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Darkglow -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Darkglow",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Hawkmail",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "scl",
        "input 4": "isc",
        "output": "Hawkmail",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Hawkmail -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hawkmail",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Sparking Mail",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "chn",
        "input 4": "isc",
        "output": "Sparking Mail",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Sparking Mail -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Sparking Mail",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Venomsward",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "brs",
        "input 4": "isc",
        "output": "Venomsward",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Venomsward -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Venomsward",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Iceblink",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "spl",
        "input 4": "isc",
        "output": "Iceblink",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Iceblink -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Iceblink",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Boneflesh",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "plt",
        "input 4": "isc",
        "output": "Boneflesh",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Boneflesh -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Boneflesh",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Rockfleece",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "fld",
        "input 4": "isc",
        "output": "Rockfleece",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Rockfleece -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Rockfleece",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Rattlecage",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "gth",
        "input 4": "isc",
        "output": "Rattlecage",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Rattlecage -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Rattlecage",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Goldskin",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "ful",
        "input 4": "isc",
        "output": "Goldskin",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Goldskin -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Goldskin",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Victors Silk",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "aar",
        "input 4": "isc",
        "output": "Victors Silk",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Victors Silk -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Victors Silk",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Heavenly Garb",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "ltp",
        "input 4": "isc",
        "output": "Heavenly Garb",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Heavenly Garb -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Heavenly Garb",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Pelta Lunata",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "buc",
        "input 4": "isc",
        "output": "Pelta Lunata",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Pelta Lunata -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Pelta Lunata",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Umbral Disk",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "sml",
        "input 4": "isc",
        "output": "Umbral Disk",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Umbral Disk -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Umbral Disk",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Stormguild",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "lrg",
        "input 4": "isc",
        "output": "Stormguild",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Stormguild -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Stormguild",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Wall of the Eyeless",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "bsh",
        "input 4": "isc",
        "output": "Wall of the Eyeless",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Wall of the Eyeless -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Wall of the Eyeless",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Swordback Hold",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "spk",
        "input 4": "isc",
        "output": "Swordback Hold",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Swordback Hold -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Swordback Hold",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Steelclash",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "kit",
        "input 4": "isc",
        "output": "Steelclash",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Steelclash -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Steelclash",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Bverrit Keep",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "tow",
        "input 4": "isc",
        "output": "Bverrit Keep",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Bverrit Keep -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bverrit Keep",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> The Ward",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "gts",
        "input 4": "isc",
        "output": "The Ward",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Ward -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Ward",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> The Hand of Broc",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "lgl",
        "input 4": "isc",
        "output": "The Hand of Broc",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "The Hand of Broc -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Hand of Broc",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Bloodfist",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "vgl",
        "input 4": "isc",
        "output": "Bloodfist",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Bloodfist -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bloodfist",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Chance Guards",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "mgl",
        "input 4": "isc",
        "output": "Chance Guards",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Chance Guards -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Chance Guards",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Magefist",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "tgl",
        "input 4": "isc",
        "output": "Magefist",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Magefist -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Magefist",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Frostburn",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "hgl",
        "input 4": "isc",
        "output": "Frostburn",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Frostburn -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Frostburn",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Hotspur",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "lbt",
        "input 4": "isc",
        "output": "Hotspur",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Hotspur -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hotspur",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Gorefoot",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "vbt",
        "input 4": "isc",
        "output": "Gorefoot",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Gorefoot -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Gorefoot",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Treads of Cthon",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "mbt",
        "input 4": "isc",
        "output": "Treads of Cthon",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Treads of Cthon -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Treads of Cthon",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Goblin Toe",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "tbt",
        "input 4": "isc",
        "output": "Goblin Toe",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Goblin Toe -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Goblin Toe",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Tearhaunch",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "hbt",
        "input 4": "isc",
        "output": "Tearhaunch",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Tearhaunch -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Tearhaunch",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Lenyms Cord",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "lbl",
        "input 4": "isc",
        "output": "Lenyms Cord",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Lenyms Cord -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Lenyms Cord",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Snakecord",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "vbl",
        "input 4": "isc",
        "output": "Snakecord",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Snakecord -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Snakecord",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Nightsmoke",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "mbl",
        "input 4": "isc",
        "output": "Nightsmoke",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Nightsmoke -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Nightsmoke",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Goldwrap",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "tbl",
        "input 4": "isc",
        "output": "Goldwrap",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Goldwrap -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Goldwrap",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Bladebuckle",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "hbl",
        "input 4": "isc",
        "output": "Bladebuckle",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Bladebuckle -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bladebuckle",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r19 -> Nokozan Relic",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r19",
        "input 3": "amu",
        "input 4": "isc",
        "output": "Nokozan Relic",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Nokozan Relic -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Nokozan Relic",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> The Eye of Etlich",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "amu",
        "input 4": "isc",
        "output": "The Eye of Etlich",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Eye of Etlich -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Eye of Etlich",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> The Mahim-Oak Curio",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "amu",
        "input 4": "r19",
        "output": "The Mahim-Oak Curio",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Mahim-Oak Curio -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Mahim-Oak Curio",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Nagelring",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "rin",
        "input 4": "isc",
        "output": "Nagelring",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Nagelring -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Nagelring",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Manald Heal",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "rin",
        "input 4": "wms",
        "output": "Manald Heal",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Manald Heal -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Manald Heal",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r28 -> The Stone of Jordan",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r28",
        "input 3": "rin",
        "input 4": "isc",
        "output": "The Stone of Jordan",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "The Stone of Jordan -> r27",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Stone of Jordan",
        "output": "r27",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Coldkill",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9ha",
        "input 4": "isc",
        "output": "Coldkill",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Coldkill -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Coldkill",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Butcher's Pupil",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9ax",
        "input 4": "isc",
        "output": "Butcher's Pupil",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Butcher's Pupil -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Butcher's Pupil",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Islestrike",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "92a",
        "input 4": "isc",
        "output": "Islestrike",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Islestrike -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Islestrike",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Pompe's Wrath",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9mp",
        "input 4": "isc",
        "output": "Pompe's Wrath",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Pompe's Wrath -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Pompe's Wrath",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Guardian Naga",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9wa",
        "input 4": "isc",
        "output": "Guardian Naga",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Guardian Naga -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Guardian Naga",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Warlord's Trust",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9la",
        "input 4": "isc",
        "output": "Warlord's Trust",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Warlord's Trust -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Warlord's Trust",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Spellsteel",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9ba",
        "input 4": "isc",
        "output": "Spellsteel",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Spellsteel -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Spellsteel",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Stormrider",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9bt",
        "input 4": "isc",
        "output": "Stormrider",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Stormrider -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Stormrider",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Boneslayer Blade",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9ga",
        "input 4": "isc",
        "output": "Boneslayer Blade",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Boneslayer Blade -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Boneslayer Blade",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> The Minataur",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9gi",
        "input 4": "isc",
        "output": "The Minataur",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Minataur -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Minataur",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Suicide Branch",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9wn",
        "input 4": "isc",
        "output": "Suicide Branch",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Suicide Branch -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Suicide Branch",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Carin Shard",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9yw",
        "input 4": "isc",
        "output": "Carin Shard",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Carin Shard -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Carin Shard",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Arm of King Leoric",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9bw",
        "input 4": "isc",
        "output": "Arm of King Leoric",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Arm of King Leoric -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Arm of King Leoric",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Blackhand Key",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9gw",
        "input 4": "isc",
        "output": "Blackhand Key",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Blackhand Key -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Blackhand Key",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Dark Clan Crusher",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9cl",
        "input 4": "isc",
        "output": "Dark Clan Crusher",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Dark Clan Crusher -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Dark Clan Crusher",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Zakarum's Hand",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9sc",
        "input 4": "isc",
        "output": "Zakarum's Hand",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Zakarum's Hand -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Zakarum's Hand",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> The Fetid Sprinkler",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9qs",
        "input 4": "isc",
        "output": "The Fetid Sprinkler",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Fetid Sprinkler -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Fetid Sprinkler",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Hand of Blessed Light",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9ws",
        "input 4": "isc",
        "output": "Hand of Blessed Light",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Hand of Blessed Light -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hand of Blessed Light",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Fleshrender",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9sp",
        "input 4": "isc",
        "output": "Fleshrender",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Fleshrender -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Fleshrender",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Sureshrill Frost",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9ma",
        "input 4": "isc",
        "output": "Sureshrill Frost",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Sureshrill Frost -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Sureshrill Frost",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Moonfall",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9mt",
        "input 4": "isc",
        "output": "Moonfall",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Moonfall -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Moonfall",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Baezil's Vortex",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9fl",
        "input 4": "isc",
        "output": "Baezil's Vortex",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Baezil's Vortex -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Baezil's Vortex",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Earthshaker",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9wh",
        "input 4": "isc",
        "output": "Earthshaker",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Earthshaker -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Earthshaker",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Bloodtree Stump",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9m9",
        "input 4": "isc",
        "output": "Bloodtree Stump",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Bloodtree Stump -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bloodtree Stump",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> The Gavel of Pain",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9gm",
        "input 4": "isc",
        "output": "The Gavel of Pain",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Gavel of Pain -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Gavel of Pain",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Bloodletter",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9ss",
        "input 4": "isc",
        "output": "Bloodletter",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Bloodletter -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bloodletter",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Coldsteel Eye",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9sm",
        "input 4": "isc",
        "output": "Coldsteel Eye",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Coldsteel Eye -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Coldsteel Eye",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Hexfire",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9sb",
        "input 4": "isc",
        "output": "Hexfire",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Hexfire -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hexfire",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Blade of Ali Baba",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "9fc",
        "input 4": "isc",
        "output": "Blade of Ali Baba",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Blade of Ali Baba -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Blade of Ali Baba",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Ginther's Rift",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9cr",
        "input 4": "isc",
        "output": "Ginther's Rift",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Ginther's Rift -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Ginther's Rift",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Headstriker",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9bs",
        "input 4": "isc",
        "output": "Headstriker",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Headstriker -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Headstriker",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Plague Bearer",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9ls",
        "input 4": "isc",
        "output": "Plague Bearer",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Plague Bearer -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Plague Bearer",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> The Atlantian",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9wd",
        "input 4": "isc",
        "output": "The Atlantian",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Atlantian -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Atlantian",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Crainte Vomir",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "92h",
        "input 4": "isc",
        "output": "Crainte Vomir",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Crainte Vomir -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Crainte Vomir",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Bing Sz Wang",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9cm",
        "input 4": "isc",
        "output": "Bing Sz Wang",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Bing Sz Wang -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bing Sz Wang",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> The Vile Husk",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9gs",
        "input 4": "isc",
        "output": "The Vile Husk",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Vile Husk -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Vile Husk",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Cloudcrack",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9b9",
        "input 4": "isc",
        "output": "Cloudcrack",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Cloudcrack -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Cloudcrack",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Todesfaelle Flamme",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9fb",
        "input 4": "isc",
        "output": "Todesfaelle Flamme",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Todesfaelle Flamme -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Todesfaelle Flamme",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Swordguard",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9gd",
        "input 4": "isc",
        "output": "Swordguard",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Swordguard -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Swordguard",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Spineripper",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9dg",
        "input 4": "isc",
        "output": "Spineripper",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Spineripper -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Spineripper",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Heart Carver",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9di",
        "input 4": "isc",
        "output": "Heart Carver",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Heart Carver -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Heart Carver",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Blackbog's Sharp",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9kr",
        "input 4": "isc",
        "output": "Blackbog's Sharp",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Blackbog's Sharp -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Blackbog's Sharp",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Stormspike",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "9bl",
        "input 4": "isc",
        "output": "Stormspike",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Stormspike -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Stormspike",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> The Impaler",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9sr",
        "input 4": "isc",
        "output": "The Impaler",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Impaler -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Impaler",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Kelpie Snare",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9tr",
        "input 4": "isc",
        "output": "Kelpie Snare",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Kelpie Snare -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Kelpie Snare",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Soulfeast Tine",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9br",
        "input 4": "isc",
        "output": "Soulfeast Tine",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Soulfeast Tine -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Soulfeast Tine",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r26 -> Hone Sundan,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r26",
        "input 3": "9st",
        "input 4": "isc",
        "output": "Hone Sundan,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Hone Sundan,eth -> r25",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hone Sundan,eth",
        "output": "r25",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Hone Sundan",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9st",
        "input 4": "isc",
        "output": "Hone Sundan",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Hone Sundan -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hone Sundan",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Spire of Honor",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9p9",
        "input 4": "isc",
        "output": "Spire of Honor",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Spire of Honor -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Spire of Honor",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> The Meat Scraper",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9b7",
        "input 4": "isc",
        "output": "The Meat Scraper",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Meat Scraper -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Meat Scraper",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Blackleach Blade",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9vo",
        "input 4": "isc",
        "output": "Blackleach Blade",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Blackleach Blade -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Blackleach Blade",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Athena's Wrath",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9s8",
        "input 4": "isc",
        "output": "Athena's Wrath",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Athena's Wrath -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Athena's Wrath",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Pierre Tombale Couant",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9pa",
        "input 4": "isc",
        "output": "Pierre Tombale Couant",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Pierre Tombale Couant -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Pierre Tombale Couant",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Husoldal Evo",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9h9",
        "input 4": "isc",
        "output": "Husoldal Evo",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Husoldal Evo -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Husoldal Evo",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Grim's Burning Dead",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "9wc",
        "input 4": "isc",
        "output": "Grim's Burning Dead",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Grim's Burning Dead -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Grim's Burning Dead",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Razorswitch",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "8ss",
        "input 4": "isc",
        "output": "Razorswitch",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Razorswitch -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Razorswitch",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Ribcracker,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "8ls",
        "input 4": "isc",
        "output": "Ribcracker,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Ribcracker,eth -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Ribcracker,eth",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Ribcracker",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "8ls",
        "input 4": "isc",
        "output": "Ribcracker",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Ribcracker -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Ribcracker",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Chromatic Ire",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "8cs",
        "input 4": "isc",
        "output": "Chromatic Ire",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Chromatic Ire -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Chromatic Ire",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Warpspear",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "8bs",
        "input 4": "isc",
        "output": "Warpspear",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Warpspear -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Warpspear",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Skullcollector",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "8ws",
        "input 4": "isc",
        "output": "Skullcollector",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Skullcollector -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Skullcollector",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Skystrike",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "8sb",
        "input 4": "isc",
        "output": "Skystrike",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Skystrike -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Skystrike",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Riphook",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "8hb",
        "input 4": "isc",
        "output": "Riphook",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Riphook -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Riphook",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Kuko Shakaku",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "8lb",
        "input 4": "isc",
        "output": "Kuko Shakaku",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Kuko Shakaku -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Kuko Shakaku",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Endlesshail",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "8cb",
        "input 4": "isc",
        "output": "Endlesshail",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Endlesshail -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Endlesshail",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Whichwild String",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "8s8",
        "input 4": "isc",
        "output": "Whichwild String",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Whichwild String -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Whichwild String",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Cliffkiller",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "8l8",
        "input 4": "isc",
        "output": "Cliffkiller",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Cliffkiller -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Cliffkiller",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Magewrath",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "8sw",
        "input 4": "isc",
        "output": "Magewrath",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Magewrath -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Magewrath",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Godstrike Arch",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "8lw",
        "input 4": "isc",
        "output": "Godstrike Arch",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Godstrike Arch -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Godstrike Arch",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Langer Briser",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "8lx",
        "input 4": "isc",
        "output": "Langer Briser",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Langer Briser -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Langer Briser",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Pus Spiter",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "8mx",
        "input 4": "isc",
        "output": "Pus Spiter",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Pus Spiter -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Pus Spiter",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Buriza-Do Kyanon",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "8hx",
        "input 4": "isc",
        "output": "Buriza-Do Kyanon",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Buriza-Do Kyanon -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Buriza-Do Kyanon",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Demon Machine",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "8rx",
        "input 4": "isc",
        "output": "Demon Machine",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Demon Machine -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Demon Machine",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Peasent Crown",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xap",
        "input 4": "isc",
        "output": "Peasent Crown",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Peasent Crown -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Peasent Crown",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Rockstopper",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xkp",
        "input 4": "isc",
        "output": "Rockstopper",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Rockstopper -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Rockstopper",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Stealskull",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xlm",
        "input 4": "isc",
        "output": "Stealskull",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Stealskull -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Stealskull",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Darksight Helm",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xhl",
        "input 4": "isc",
        "output": "Darksight Helm",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Darksight Helm -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Darksight Helm",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Valkiry Wing",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xhm",
        "input 4": "isc",
        "output": "Valkiry Wing",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Valkiry Wing -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Valkiry Wing",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Crown of Thieves",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "xrn",
        "input 4": "isc",
        "output": "Crown of Thieves",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Crown of Thieves -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Crown of Thieves",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Blackhorn's Face",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xsk",
        "input 4": "isc",
        "output": "Blackhorn's Face",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Blackhorn's Face -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Blackhorn's Face",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r30 -> Vampiregaze,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r30",
        "input 3": "xh9",
        "input 4": "isc",
        "output": "Vampiregaze,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Vampiregaze,eth -> r29",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Vampiregaze,eth",
        "output": "r29",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Vampiregaze",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "xh9",
        "input 4": "isc",
        "output": "Vampiregaze",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Vampiregaze -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Vampiregaze",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> The Spirit Shroud",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xui",
        "input 4": "isc",
        "output": "The Spirit Shroud",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Spirit Shroud -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Spirit Shroud",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Skin of the Vipermagi",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "xea",
        "input 4": "isc",
        "output": "Skin of the Vipermagi",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Skin of the Vipermagi -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Skin of the Vipermagi",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Skin of the Flayerd One",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xla",
        "input 4": "isc",
        "output": "Skin of the Flayerd One",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Skin of the Flayerd One -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Skin of the Flayerd One",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Ironpelt",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xtu",
        "input 4": "isc",
        "output": "Ironpelt",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Ironpelt -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Ironpelt",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Spiritforge",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xng",
        "input 4": "isc",
        "output": "Spiritforge",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Spiritforge -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Spiritforge",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Crow Caw",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xcl",
        "input 4": "isc",
        "output": "Crow Caw",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Crow Caw -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Crow Caw",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Shaftstop",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "xhn",
        "input 4": "isc",
        "output": "Shaftstop",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Shaftstop -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Shaftstop",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Duriel's Shell",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "xrs",
        "input 4": "isc",
        "output": "Duriel's Shell",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Duriel's Shell -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Duriel's Shell",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Skullder's Ire",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "xpl",
        "input 4": "isc",
        "output": "Skullder's Ire",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Skullder's Ire -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Skullder's Ire",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Guardian Angel",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "xlt",
        "input 4": "isc",
        "output": "Guardian Angel",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Guardian Angel -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Guardian Angel",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Toothrow",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xld",
        "input 4": "isc",
        "output": "Toothrow",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Toothrow -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Toothrow",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Atma's Wail",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xth",
        "input 4": "isc",
        "output": "Atma's Wail",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Atma's Wail -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Atma's Wail",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Black Hades",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xul",
        "input 4": "isc",
        "output": "Black Hades",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Black Hades -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Black Hades",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Corpsemourn",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xar",
        "input 4": "isc",
        "output": "Corpsemourn",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Corpsemourn -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Corpsemourn",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Que-Hegan's Wisdon",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xtp",
        "input 4": "isc",
        "output": "Que-Hegan's Wisdon",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Que-Hegan's Wisdon -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Que-Hegan's Wisdon",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Visceratuant",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xuc",
        "input 4": "isc",
        "output": "Visceratuant",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Visceratuant -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Visceratuant",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Mosers Blessed Circle",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "xml",
        "input 4": "isc",
        "output": "Mosers Blessed Circle",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Mosers Blessed Circle -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Mosers Blessed Circle",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Stormchaser",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xrg",
        "input 4": "isc",
        "output": "Stormchaser",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Stormchaser -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Stormchaser",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Tiamat's Rebuke",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xit",
        "input 4": "isc",
        "output": "Tiamat's Rebuke",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Tiamat's Rebuke -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Tiamat's Rebuke",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Kerke's Sanctuary",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xow",
        "input 4": "isc",
        "output": "Kerke's Sanctuary",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Kerke's Sanctuary -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Kerke's Sanctuary",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Radimant's Sphere",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xts",
        "input 4": "isc",
        "output": "Radimant's Sphere",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Radimant's Sphere -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Radimant's Sphere",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Lidless Wall",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "xsh",
        "input 4": "isc",
        "output": "Lidless Wall",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Lidless Wall -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Lidless Wall",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Lance Guard",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xpk",
        "input 4": "isc",
        "output": "Lance Guard",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Lance Guard -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Lance Guard",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Venom Grip",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xlg",
        "input 4": "isc",
        "output": "Venom Grip",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Venom Grip -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Venom Grip",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Gravepalm",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xvg",
        "input 4": "isc",
        "output": "Gravepalm",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Gravepalm -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Gravepalm",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Ghoulhide",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xmg",
        "input 4": "isc",
        "output": "Ghoulhide",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Ghoulhide -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Ghoulhide",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Lavagout",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xtg",
        "input 4": "isc",
        "output": "Lavagout",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Lavagout -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Lavagout",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Hellmouth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "xhg",
        "input 4": "isc",
        "output": "Hellmouth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Hellmouth -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hellmouth",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Infernostride",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "xlb",
        "input 4": "isc",
        "output": "Infernostride",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Infernostride -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Infernostride",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Waterwalk",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "xvb",
        "input 4": "isc",
        "output": "Waterwalk",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Waterwalk -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Waterwalk",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Silkweave",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "xmb",
        "input 4": "isc",
        "output": "Silkweave",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Silkweave -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Silkweave",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r26 -> Wartraveler",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r26",
        "input 3": "xtb",
        "input 4": "isc",
        "output": "Wartraveler",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Wartraveler -> r25",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Wartraveler",
        "output": "r25",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Gorerider",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "xhb",
        "input 4": "isc",
        "output": "Gorerider",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Gorerider -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Gorerider",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> String of Ears",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "zlb",
        "input 4": "isc",
        "output": "String of Ears",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "String of Ears -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "String of Ears",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Razortail",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "zvb",
        "input 4": "isc",
        "output": "Razortail",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Razortail -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Razortail",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Gloomstrap",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "zmb",
        "input 4": "isc",
        "output": "Gloomstrap",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Gloomstrap -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Gloomstrap",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Snowclash",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "ztb",
        "input 4": "isc",
        "output": "Snowclash",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Snowclash -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Snowclash",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Thudergod's Vigor",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "zhb",
        "input 4": "isc",
        "output": "Thudergod's Vigor",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Thudergod's Vigor -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Thudergod's Vigor",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Harlequin Crest",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "uap",
        "input 4": "isc",
        "output": "Harlequin Crest",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Harlequin Crest -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Harlequin Crest",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Veil of Steel",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "uhm",
        "input 4": "isc",
        "output": "Veil of Steel",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Veil of Steel -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Veil of Steel",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> The Gladiator's Bane",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "utu",
        "input 4": "isc",
        "output": "The Gladiator's Bane",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "The Gladiator's Bane -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Gladiator's Bane",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Arkaine's Valor",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "upl",
        "input 4": "isc",
        "output": "Arkaine's Valor",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Arkaine's Valor -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Arkaine's Valor",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Blackoak Shield",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "uml",
        "input 4": "isc",
        "output": "Blackoak Shield",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Blackoak Shield -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Blackoak Shield",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Stormshield",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "uit",
        "input 4": "isc",
        "output": "Stormshield",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Stormshield -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Stormshield",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Hellslayer",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7bt",
        "input 4": "isc",
        "output": "Hellslayer",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Hellslayer -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hellslayer",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Messerschmidt's Reaver",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7ga",
        "input 4": "isc",
        "output": "Messerschmidt's Reaver",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Messerschmidt's Reaver -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Messerschmidt's Reaver",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Baranar's Star",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7mt",
        "input 4": "isc",
        "output": "Baranar's Star",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Baranar's Star -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Baranar's Star",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Schaefer's Hammer",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "7wh",
        "input 4": "r23",
        "output": "Schaefer's Hammer",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Schaefer's Hammer -> r24",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Schaefer's Hammer",
        "output": "r24",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> The Cranium Basher",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "7gm",
        "input 4": "isc",
        "output": "The Cranium Basher",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "The Cranium Basher -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Cranium Basher",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Lightsabre",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7cr",
        "input 4": "isc",
        "output": "Lightsabre",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Lightsabre -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Lightsabre",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Doombringer",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7b7",
        "input 4": "isc",
        "output": "Doombringer",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Doombringer -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Doombringer",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> The Grandfather",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "7gd",
        "input 4": "r23",
        "output": "The Grandfather",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "The Grandfather -> r24",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Grandfather",
        "output": "r24",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Wizardspike",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "7dg",
        "input 4": "isc",
        "output": "Wizardspike",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Wizardspike -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Wizardspike",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Stormspire",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7wc",
        "input 4": "isc",
        "output": "Stormspire",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Stormspire -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Stormspire",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Eaglehorn",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "6l7",
        "input 4": "isc",
        "output": "Eaglehorn",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Eaglehorn -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Eaglehorn",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r27 -> Windforce",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r27",
        "input 3": "6lw",
        "input 4": "isc",
        "output": "Windforce",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Windforce -> r26",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Windforce",
        "output": "r26",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r26 -> Bul Katho's Wedding Band",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r26",
        "input 3": "rin",
        "input 4": "isc",
        "output": "Bul Katho's Wedding Band",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Bul Katho's Wedding Band -> r25",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bul Katho's Wedding Band",
        "output": "r25",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r20 -> The Cat's Eye",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "amu",
        "input 4": "isc",
        "output": "The Cat's Eye",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Cat's Eye -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Cat's Eye",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> The Rising Sun",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "amu",
        "input 4": "gpw",
        "output": "The Rising Sun",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "The Rising Sun -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Rising Sun",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Crescent Moon",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "amu",
        "input 4": "r18",
        "output": "Crescent Moon",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Crescent Moon -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Crescent Moon",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r26 -> Mara's Kaleidoscope",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r26",
        "input 3": "amu",
        "input 4": "isc",
        "output": "Mara's Kaleidoscope",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Mara's Kaleidoscope -> r25",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Mara's Kaleidoscope",
        "output": "r25",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Atma's Scarab",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "amu",
        "input 4": "r19",
        "output": "Atma's Scarab",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Atma's Scarab -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Atma's Scarab",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Dwarf Star",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "rin",
        "input 4": "gpv",
        "output": "Dwarf Star",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Dwarf Star -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Dwarf Star",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Raven Frost",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "rin",
        "input 4": "gpb",
        "output": "Raven Frost",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Raven Frost -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Raven Frost",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Highlord's Wrath",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "amu",
        "input 4": "isc",
        "output": "Highlord's Wrath",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Highlord's Wrath -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Highlord's Wrath",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Saracen's Chance",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "amu",
        "input 4": "r16",
        "output": "Saracen's Chance",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Saracen's Chance -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Saracen's Chance",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r25 -> Arreat's Face",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r25",
        "input 3": "baa",
        "input 4": "isc",
        "output": "Arreat's Face",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Arreat's Face -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Arreat's Face",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Homunculus",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "nea",
        "input 4": "isc",
        "output": "Homunculus",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Homunculus -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Homunculus",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Titan's Revenge",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "yps",
        "input 4": "isc",
        "output": "Titan's Revenge",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Titan's Revenge -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Titan's Revenge",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r31 -> Titan's Revenge,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r31",
        "input 3": "yps",
        "input 4": "isc",
        "output": "Titan's Revenge,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Titan's Revenge,eth -> r30",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Titan's Revenge,eth",
        "output": "r30",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Lycander's Aim",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "am7",
        "input 4": "isc",
        "output": "Lycander's Aim",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Lycander's Aim -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Lycander's Aim",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Lycander's Flank",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "am9",
        "input 4": "isc",
        "output": "Lycander's Flank",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Lycander's Flank -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Lycander's Flank",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> The Oculus",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "oba",
        "input 4": "isc",
        "output": "The Oculus",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "The Oculus -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Oculus",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Herald of Zakarum",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "pa9",
        "input 4": "r23",
        "output": "Herald of Zakarum",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Herald of Zakarum -> r24",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Herald of Zakarum",
        "output": "r24",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Cutthroat1",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "9tw",
        "input 4": "isc",
        "output": "Cutthroat1",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Cutthroat1 -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Cutthroat1",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Jalal's Mane",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "dra",
        "input 4": "isc",
        "output": "Jalal's Mane",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Jalal's Mane -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Jalal's Mane",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> The Scalper",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "9ta",
        "input 4": "isc",
        "output": "The Scalper",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "The Scalper -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Scalper",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Bloodmoon",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7sb",
        "input 4": "isc",
        "output": "Bloodmoon",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Bloodmoon -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bloodmoon",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Djinnslayer",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7sm",
        "input 4": "isc",
        "output": "Djinnslayer",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Djinnslayer -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Djinnslayer",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Deathbit",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "9tk",
        "input 4": "isc",
        "output": "Deathbit",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Deathbit -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Deathbit",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Warshrike",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "7bk",
        "input 4": "isc",
        "output": "Warshrike",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Warshrike -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Warshrike",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Gutsiphon",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "6rx",
        "input 4": "isc",
        "output": "Gutsiphon",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Gutsiphon -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Gutsiphon",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Razoredge",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7ha",
        "input 4": "isc",
        "output": "Razoredge",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Razoredge -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Razoredge",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Demonlimb",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7sp",
        "input 4": "isc",
        "output": "Demonlimb",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Demonlimb -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Demonlimb",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r20 -> Steelshade",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "ulm",
        "input 4": "isc",
        "output": "Steelshade",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Steelshade -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Steelshade",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r28 -> Tomb Reaver,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r28",
        "input 3": "7pa",
        "input 4": "isc",
        "output": "Tomb Reaver,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Tomb Reaver,eth -> r27",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Tomb Reaver,eth",
        "output": "r27",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Tomb Reaver",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "7pa",
        "input 4": "isc",
        "output": "Tomb Reaver",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Tomb Reaver -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Tomb Reaver",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r28 -> Deaths's Web",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r28",
        "input 3": "7gw",
        "input 4": "isc",
        "output": "Deaths's Web",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Deaths's Web -> r27",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Deaths's Web",
        "output": "r27",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Nature's Peace",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "rin",
        "input 4": "gpr",
        "output": "Nature's Peace",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Nature's Peace -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Nature's Peace",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Azurewrath",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "7cr",
        "input 4": "r23",
        "output": "Azurewrath",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Azurewrath -> r24",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Azurewrath",
        "output": "r24",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Seraph's Hymn",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "amu",
        "input 4": "r20",
        "output": "Seraph's Hymn",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Seraph's Hymn -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Seraph's Hymn",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Fleshripper",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "7kr",
        "input 4": "isc",
        "output": "Fleshripper",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Fleshripper -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Fleshripper",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Horizon's Tornado",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7fl",
        "input 4": "isc",
        "output": "Horizon's Tornado",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Horizon's Tornado -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Horizon's Tornado",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Stone Crusher",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7wh",
        "input 4": "isc",
        "output": "Stone Crusher",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Stone Crusher -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Stone Crusher",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Jadetalon",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "7wb",
        "input 4": "isc",
        "output": "Jadetalon",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Jadetalon -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Jadetalon",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r26 -> Shadowdancer",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r26",
        "input 3": "uhb",
        "input 4": "isc",
        "output": "Shadowdancer",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Shadowdancer -> r25",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Shadowdancer",
        "output": "r25",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Cerebus",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "drb",
        "input 4": "isc",
        "output": "Cerebus",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Cerebus -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Cerebus",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Tyrael's Might",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "uar",
        "input 4": "isc",
        "output": "Tyrael's Might",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Tyrael's Might -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Tyrael's Might",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Souldrain",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "umg",
        "input 4": "isc",
        "output": "Souldrain",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Souldrain -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Souldrain",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r27 -> Runemaster,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r27",
        "input 3": "72a",
        "input 4": "isc",
        "output": "Runemaster,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Runemaster,eth -> r26",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Runemaster,eth",
        "output": "r26",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Runemaster",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "72a",
        "input 4": "isc",
        "output": "Runemaster",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Runemaster -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Runemaster",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Deathcleaver",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "7wa",
        "input 4": "isc",
        "output": "Deathcleaver",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Deathcleaver -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Deathcleaver",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Executioner's Justice",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7gi",
        "input 4": "isc",
        "output": "Executioner's Justice",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Executioner's Justice -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Executioner's Justice",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Stoneraven",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "amd",
        "input 4": "isc",
        "output": "Stoneraven",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Stoneraven -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Stoneraven",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Leviathan",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "uld",
        "input 4": "isc",
        "output": "Leviathan",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Leviathan -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Leviathan",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r21 -> Wisp",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "rin",
        "input 4": "isc",
        "output": "Wisp",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Wisp -> r19",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Wisp",
        "output": "r19",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Gargoyle's Bite",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7ts",
        "input 4": "isc",
        "output": "Gargoyle's Bite",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Gargoyle's Bite -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Gargoyle's Bite",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Lacerator,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "7b8",
        "input 4": "isc",
        "output": "Lacerator,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Lacerator,eth -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Lacerator,eth",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Lacerator",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7b8",
        "input 4": "isc",
        "output": "Lacerator",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Lacerator -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Lacerator",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r26 -> Mang Song's Lesson",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r26",
        "input 3": "6ws",
        "input 4": "isc",
        "output": "Mang Song's Lesson",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Mang Song's Lesson -> r25",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Mang Song's Lesson",
        "output": "r25",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Viperfork",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7br",
        "input 4": "isc",
        "output": "Viperfork",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Viperfork -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Viperfork",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Ethereal Edge",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7ba",
        "input 4": "isc",
        "output": "Ethereal Edge",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Ethereal Edge -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Ethereal Edge",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Demonhorn's Edge",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "bad",
        "input 4": "isc",
        "output": "Demonhorn's Edge",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Demonhorn's Edge -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Demonhorn's Edge",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r28 -> The Reaper's Toll,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r28",
        "input 3": "7s8",
        "input 4": "isc",
        "output": "The Reaper's Toll,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "The Reaper's Toll,eth -> r27",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Reaper's Toll,eth",
        "output": "r27",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> The Reaper's Toll",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "7s8",
        "input 4": "isc",
        "output": "The Reaper's Toll",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "The Reaper's Toll -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Reaper's Toll",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Spiritkeeper",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "drd",
        "input 4": "isc",
        "output": "Spiritkeeper",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Spiritkeeper -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Spiritkeeper",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Hellrack",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "6hx",
        "input 4": "isc",
        "output": "Hellrack",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Hellrack -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Hellrack",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Alma Negra",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "pac",
        "input 4": "isc",
        "output": "Alma Negra",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Alma Negra -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Alma Negra",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Darkforge Spawn",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "nef",
        "input 4": "isc",
        "output": "Darkforge Spawn",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Darkforge Spawn -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Darkforge Spawn",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Widowmaker",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "6sw",
        "input 4": "isc",
        "output": "Widowmaker",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Widowmaker -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Widowmaker",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Bloodraven's Charge",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "amb",
        "input 4": "isc",
        "output": "Bloodraven's Charge",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Bloodraven's Charge -> r20",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bloodraven's Charge",
        "output": "r20",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Ghostflame",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7bl",
        "input 4": "isc",
        "output": "Ghostflame",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Ghostflame -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Ghostflame",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Shadowkiller",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7cs",
        "input 4": "isc",
        "output": "Shadowkiller",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Shadowkiller -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Shadowkiller",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Gimmershred",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7ta",
        "input 4": "isc",
        "output": "Gimmershred",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Gimmershred -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Gimmershred",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r30 -> Griffon's Eye",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r30",
        "input 3": "ci3",
        "input 4": "isc",
        "output": "Griffon's Eye",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Griffon's Eye -> r29",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Griffon's Eye",
        "output": "r29",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Windhammer",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7m7",
        "input 4": "isc",
        "output": "Windhammer",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Windhammer -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Windhammer",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Thunderstroke",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "amf",
        "input 4": "isc",
        "output": "Thunderstroke",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Thunderstroke -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Thunderstroke",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Demon's Arch",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7s7",
        "input 4": "isc",
        "output": "Demon's Arch",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Demon's Arch -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Demon's Arch",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r25 -> Boneflame",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r25",
        "input 3": "nee",
        "input 4": "isc",
        "output": "Boneflame",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Boneflame -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Boneflame",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Steelpillar",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7p7",
        "input 4": "isc",
        "output": "Steelpillar",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Steelpillar -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Steelpillar",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r26 -> Nightwing's Veil",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r26",
        "input 3": "uhm",
        "input 4": "r24",
        "output": "Nightwing's Veil",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Nightwing's Veil -> r25",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Nightwing's Veil",
        "output": "r25",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r27 -> Crown of Ages",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r27",
        "input 3": "urn",
        "input 4": "isc",
        "output": "Crown of Ages",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Crown of Ages -> r26",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Crown of Ages",
        "output": "r26",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r31 -> Andariel's Visage,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r31",
        "input 3": "usk",
        "input 4": "r30",
        "output": "Andariel's Visage,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Andariel's Visage,eth -> r31",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Andariel's Visage,eth",
        "output": "r31",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r25 -> Andariel's Visage",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r25",
        "input 3": "usk",
        "input 4": "isc",
        "output": "Andariel's Visage",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Andariel's Visage -> r24",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Andariel's Visage",
        "output": "r24",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Darkfear",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "ulm",
        "input 4": "isc",
        "output": "Darkfear",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Darkfear -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Darkfear",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Dragonscale",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "pae",
        "input 4": "r23",
        "output": "Dragonscale",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Dragonscale -> r24",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Dragonscale",
        "output": "r24",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Steel Carapice",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "uul",
        "input 4": "isc",
        "output": "Steel Carapice",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Steel Carapice -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Steel Carapice",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Medusa's Gaze",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "uow",
        "input 4": "isc",
        "output": "Medusa's Gaze",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Medusa's Gaze -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Medusa's Gaze",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Ravenlore",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "dre",
        "input 4": "isc",
        "output": "Ravenlore",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Ravenlore -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Ravenlore",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Boneshade",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "7bw",
        "input 4": "isc",
        "output": "Boneshade",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Boneshade -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Boneshade",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Flamebellow",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7gs",
        "input 4": "isc",
        "output": "Flamebellow",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Flamebellow -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Flamebellow",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r28 -> Fathom",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r28",
        "input 3": "obf",
        "input 4": "isc",
        "output": "Fathom",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Fathom -> r27",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Fathom",
        "output": "r27",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Wolfhowl",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "bac",
        "input 4": "isc",
        "output": "Wolfhowl",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Wolfhowl -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Wolfhowl",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Spirit Ward",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "uts",
        "input 4": "isc",
        "output": "Spirit Ward",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Spirit Ward -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Spirit Ward",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r27 -> Kira's Guardian",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r27",
        "input 3": "ci2",
        "input 4": "isc",
        "output": "Kira's Guardian",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Kira's Guardian -> r26",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Kira's Guardian",
        "output": "r26",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Ormus' Robes",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "uui",
        "input 4": "isc",
        "output": "Ormus' Robes",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Ormus' Robes -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Ormus' Robes",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Gheed's Fortune",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "cm3",
        "input 4": "isc",
        "output": "Gheed's Fortune",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Gheed's Fortune -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Gheed's Fortune",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Stormlash",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "7fl",
        "input 4": "r23",
        "output": "Stormlash",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Stormlash -> r24",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Stormlash",
        "output": "r24",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Halaberd's Reign",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "bae",
        "input 4": "isc",
        "output": "Halaberd's Reign",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Halaberd's Reign -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Halaberd's Reign",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Spike Thorn",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "upk",
        "input 4": "isc",
        "output": "Spike Thorn",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Spike Thorn -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Spike Thorn",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Dracul's Grasp",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "uvg",
        "input 4": "isc",
        "output": "Dracul's Grasp",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Dracul's Grasp -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Dracul's Grasp",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Frostwind",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7ls",
        "input 4": "isc",
        "output": "Frostwind",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Frostwind -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Frostwind",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Templar's Might",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "uar",
        "input 4": "r23",
        "output": "Templar's Might",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Templar's Might -> r24",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Templar's Might",
        "output": "r24",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Eschuta's temper",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "obc",
        "input 4": "r23",
        "output": "Eschuta's temper",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Eschuta's temper -> r24",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Eschuta's temper",
        "output": "r24",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Firelizard's Talons",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7lw",
        "input 4": "isc",
        "output": "Firelizard's Talons",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Firelizard's Talons -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Firelizard's Talons",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Sandstorm Trek",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "uvb",
        "input 4": "isc",
        "output": "Sandstorm Trek",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Sandstorm Trek -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Sandstorm Trek",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Marrowwalk",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "umb",
        "input 4": "isc",
        "output": "Marrowwalk",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Marrowwalk -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Marrowwalk",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Heaven's Light",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "7sc",
        "input 4": "r21",
        "output": "Heaven's Light",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Heaven's Light -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Heaven's Light",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r25 -> Arachnid Mesh",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r25",
        "input 3": "ulc",
        "input 4": "isc",
        "output": "Arachnid Mesh",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Arachnid Mesh -> r24",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Arachnid Mesh",
        "output": "r24",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Nosferatu's Coil",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "uvc",
        "input 4": "isc",
        "output": "Nosferatu's Coil",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Nosferatu's Coil -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Nosferatu's Coil",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r25 -> Metalgrid",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r25",
        "input 3": "amu",
        "input 4": "isc",
        "output": "Metalgrid",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Metalgrid -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Metalgrid",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Verdugo's Hearty Cord",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "umc",
        "input 4": "isc",
        "output": "Verdugo's Hearty Cord",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Verdugo's Hearty Cord -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Verdugo's Hearty Cord",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r20 -> Carrion Wind",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "rin",
        "input 4": "r19",
        "output": "Carrion Wind",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Carrion Wind -> r18",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Carrion Wind",
        "output": "r18",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r26 -> Giantskull",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r26",
        "input 3": "uh9",
        "input 4": "isc",
        "output": "Giantskull",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Giantskull -> r24",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Giantskull",
        "output": "r24",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Ironward",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "7ws",
        "input 4": "isc",
        "output": "Ironward",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Ironward -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Ironward",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Arioc's Needle",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "7sr",
        "input 4": "isc",
        "output": "Arioc's Needle",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Arioc's Needle -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Arioc's Needle",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Cranebeak",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7mp",
        "input 4": "isc",
        "output": "Cranebeak",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Cranebeak -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Cranebeak",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Nord's Tenderizer",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7cl",
        "input 4": "isc",
        "output": "Nord's Tenderizer",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Nord's Tenderizer -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Nord's Tenderizer",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Earthshifter",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7gm",
        "input 4": "isc",
        "output": "Earthshifter",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Earthshifter -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Earthshifter",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "r21 -> Wraithflight",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "7gl",
        "input 4": "isc",
        "output": "Wraithflight",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.junkMarket) {
      cubemain.rows.push({
        description: "Wraithflight -> gpy",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Wraithflight",
        "output": "gpy",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Bonehew",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "7o7",
        "input 4": "isc",
        "output": "Bonehew",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Bonehew -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bonehew",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Ondal's Wisdom",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "6cs",
        "input 4": "isc",
        "output": "Ondal's Wisdom",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Ondal's Wisdom -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Ondal's Wisdom",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> The Reedeemer",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "7sc",
        "input 4": "isc",
        "output": "The Reedeemer",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "The Reedeemer -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "The Reedeemer",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Headhunter's Glory",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "ush",
        "input 4": "isc",
        "output": "Headhunter's Glory",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Headhunter's Glory -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Headhunter's Glory",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r27 -> Steelrend",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r27",
        "input 3": "uhg",
        "input 4": "isc",
        "output": "Steelrend",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Steelrend -> r26",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Steelrend",
        "output": "r26",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r27 -> Ars Al'Diablolos",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r27",
        "input 3": "waf",
        "input 4": "isc",
        "output": "Ars Al'Diablolos",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Ars Al'Diablolos -> r26",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Ars Al'Diablolos",
        "output": "r26",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r27 -> Ars Tor'Baalos",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r27",
        "input 3": "wae",
        "input 4": "isc",
        "output": "Ars Tor'Baalos",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Ars Tor'Baalos -> r26",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Ars Tor'Baalos",
        "output": "r26",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r27 -> Ars Dul'Mephistos",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r27",
        "input 3": "wac",
        "input 4": "isc",
        "output": "Ars Dul'Mephistos",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Ars Dul'Mephistos -> r26",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Ars Dul'Mephistos",
        "output": "r26",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Measured Wrath",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "wa6",
        "input 4": "r23",
        "output": "Measured Wrath",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Measured Wrath -> r24",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Measured Wrath",
        "output": "r24",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r26 -> Dreadfang",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r26",
        "input 3": "72h",
        "input 4": "isc",
        "output": "Dreadfang",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Dreadfang -> r25",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Dreadfang",
        "output": "r25",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r22 -> Wraithstep",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "utb",
        "input 4": "isc",
        "output": "Wraithstep",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Wraithstep -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Wraithstep",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r23 -> Bloodpact Shard",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "7di",
        "input 4": "isc",
        "output": "Bloodpact Shard",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Bloodpact Shard -> r22",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bloodpact Shard",
        "output": "r22",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r29 -> Sling",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r29",
        "input 3": "rin",
        "input 4": "r26",
        "output": "Sling",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Sling -> r28",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Sling",
        "output": "r28",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r29 -> Opalvein",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r29",
        "input 3": "rin",
        "input 4": "isc",
        "output": "Opalvein",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Opalvein -> r28",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Opalvein",
        "output": "r28",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r30 -> Entropy Locket",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r30",
        "input 3": "amu",
        "input 4": "isc",
        "output": "Entropy Locket",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Entropy Locket -> r29",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Entropy Locket",
        "output": "r29",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> Gheed's Wager",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "utc",
        "input 4": "r23",
        "output": "Gheed's Wager",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Gheed's Wager -> r24",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Gheed's Wager",
        "output": "r24",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r30 -> Unique Warlock Helm",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r30",
        "input 3": "xsk",
        "input 4": "isc",
        "output": "Unique Warlock Helm",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Unique Warlock Helm -> r29",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Unique Warlock Helm",
        "output": "r29",
        "*eol": 0,
      });
    }

    if (config.classicSunder) {
      cubemain.rows.push({
        description: "r22 -> Cold Rupture",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "cm3",
        "input 4": "glb",
        "output": "Cold Rupture",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.classicSunder) {
      cubemain.rows.push({
        description: "Cold Rupture -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Cold Rupture",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.classicSunder) {
      cubemain.rows.push({
        description: "r22 -> Flame Rift",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "cm3",
        "input 4": "glr",
        "output": "Flame Rift",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.classicSunder) {
      cubemain.rows.push({
        description: "Flame Rift -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Flame Rift",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.classicSunder) {
      cubemain.rows.push({
        description: "r22 -> Crack of the Heavens",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "cm3",
        "input 4": "glw",
        "output": "Crack of the Heavens",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.classicSunder) {
      cubemain.rows.push({
        description: "Crack of the Heavens -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Crack of the Heavens",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.classicSunder) {
      cubemain.rows.push({
        description: "r22 -> Rotting Fissure",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "cm3",
        "input 4": "glg",
        "output": "Rotting Fissure",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.classicSunder) {
      cubemain.rows.push({
        description: "Rotting Fissure -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Rotting Fissure",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.classicSunder) {
      cubemain.rows.push({
        description: "r22 -> Bone Break",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "cm3",
        "input 4": "skl",
        "output": "Bone Break",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.classicSunder) {
      cubemain.rows.push({
        description: "Bone Break -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Bone Break",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.classicSunder) {
      cubemain.rows.push({
        description: "r22 -> Black Cleft",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "cm3",
        "input 4": "gzv",
        "output": "Black Cleft",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.classicSunder) {
      cubemain.rows.push({
        description: "Black Cleft -> r21",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Black Cleft",
        "output": "r21",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r29 -> Crafted Cold Rupture",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r29",
        "input 3": "cm3",
        "input 4": "gpb",
        "output": "Crafted Cold Rupture",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Crafted Cold Rupture -> r28",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Crafted Cold Rupture",
        "output": "r28",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r29 -> Crafted Flame Rift",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r29",
        "input 3": "cm3",
        "input 4": "gpr",
        "output": "Crafted Flame Rift",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Crafted Flame Rift -> r28",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Crafted Flame Rift",
        "output": "r28",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r29 -> Crafted Crack of the Heavens",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r29",
        "input 3": "cm3",
        "input 4": "gpw",
        "output": "Crafted Crack of the Heavens",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Crafted Crack of the Heavens -> r28",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Crafted Crack of the Heavens",
        "output": "r28",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r29 -> Crafted Rotting Fissure",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r29",
        "input 3": "cm3",
        "input 4": "gpg",
        "output": "Crafted Rotting Fissure",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Crafted Rotting Fissure -> r28",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Crafted Rotting Fissure",
        "output": "r28",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r29 -> Crafted Bone Break",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r29",
        "input 3": "cm3",
        "input 4": "skz",
        "output": "Crafted Bone Break",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Crafted Bone Break -> r28",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Crafted Bone Break",
        "output": "r28",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r29 -> Crafted Black Cleft",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r29",
        "input 3": "cm3",
        "input 4": "gpv",
        "output": "Crafted Black Cleft",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "Crafted Black Cleft -> r28",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "Crafted Black Cleft",
        "output": "r28",
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "r24 -> toa",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "wms",
        "input 4": "isc",
        "output": "toa",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.uniqueMarket) {
      cubemain.rows.push({
        description: "toa -> r23",
        enabled: 1,
        version: 100,
        numinputs: 2,
        "input 1": "yps",
        "input 2": "toa",
        "output": "r23",
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r26 -> 7wa,nor,sock=5",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r26",
        "input 3": "r01",
        "input 4": "glw",
        "output": "7wa,nor,sock=5",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r24 -> 7wa,nor,eth,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "r02",
        "input 4": "glw",
        "output": "7wa,nor,eth,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r28 -> 7wa,nor,eth,sock=5",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r28",
        "input 3": "r03",
        "input 4": "glw",
        "output": "7wa,nor,eth,sock=5",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r26 -> 7wa,nor,eth,sock=6",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r26",
        "input 3": "r04",
        "input 4": "glw",
        "output": "7wa,nor,eth,sock=6",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r26 -> 7wa,nor,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r26",
        "input 3": "r05",
        "input 4": "glw",
        "output": "7wa,nor,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r24 -> 72a,nor,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "r06",
        "input 4": "glw",
        "output": "72a,nor,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r22 -> 72a,nor,eth,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "r07",
        "input 4": "glw",
        "output": "72a,nor,eth,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r24 -> 72a,nor,eth,sock=5",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "r08",
        "input 4": "glw",
        "output": "72a,nor,eth,sock=5",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r22 -> 7fl,nor,eth,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "r09",
        "input 4": "glw",
        "output": "7fl,nor,eth,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r21 -> 7ax,nor,eth,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "r10",
        "input 4": "glw",
        "output": "7ax,nor,eth,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r22 -> crs,nor,eth,sock=5",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "r01",
        "input 4": "glg",
        "output": "crs,nor,eth,sock=5",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r21 -> 7cr,nor,sock=3",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "r02",
        "input 4": "glg",
        "output": "7cr,nor,sock=3",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r21 -> 7cr,nor,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "r03",
        "input 4": "glg",
        "output": "7cr,nor,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r21 -> 7cr,nor,sock=5",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "r04",
        "input 4": "glg",
        "output": "7cr,nor,sock=5",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r26 -> 7gm,nor,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r26",
        "input 3": "r05",
        "input 4": "glg",
        "output": "7gm,nor,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r26 -> 7gm,nor,eth,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r26",
        "input 3": "r06",
        "input 4": "glg",
        "output": "7gm,nor,eth,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r25 -> 7gm,nor,eth,sock=5",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r25",
        "input 3": "r07",
        "input 4": "glg",
        "output": "7gm,nor,eth,sock=5",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r23 -> 7gm,nor,eth,sock=6",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "r08",
        "input 4": "glg",
        "output": "7gm,nor,eth,sock=6",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r22 -> 7st,nor,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "r09",
        "input 4": "glg",
        "output": "7st,nor,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r25 -> 7p7,nor,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r25",
        "input 3": "r10",
        "input 4": "glg",
        "output": "7p7,nor,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r20 -> 7gs,nor,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "r01",
        "input 4": "gly",
        "output": "7gs,nor,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r22 -> 7gs,nor,eth,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "r02",
        "input 4": "gly",
        "output": "7gs,nor,eth,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r21 -> 7cm,nor,eth,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "r03",
        "input 4": "gly",
        "output": "7cm,nor,eth,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r23 -> 7gd,nor,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r23",
        "input 3": "r04",
        "input 4": "gly",
        "output": "7gd,nor,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r22 -> 7gd,nor,eth,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "r05",
        "input 4": "gly",
        "output": "7gd,nor,eth,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r22 -> 7gd,nor,sock=5",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "r06",
        "input 4": "gly",
        "output": "7gd,nor,sock=5",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r24 -> 7gd,nor,eth,sock=5",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "r07",
        "input 4": "gly",
        "output": "7gd,nor,eth,sock=5",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r24 -> 7gd,nor,eth,sock=6",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "r08",
        "input 4": "gly",
        "output": "7gd,nor,eth,sock=6",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r22 -> 7s8,nor,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "r09",
        "input 4": "gly",
        "output": "7s8,nor,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r22 -> 7s8,nor,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "r10",
        "input 4": "gly",
        "output": "7s8,nor,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r27 -> 7s8,nor,eth,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r27",
        "input 3": "r01",
        "input 4": "glb",
        "output": "7s8,nor,eth,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r22 -> 7s8,nor,eth,sock=5",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "r02",
        "input 4": "glb",
        "output": "7s8,nor,eth,sock=5",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r25 -> 7vo,nor,eth,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r25",
        "input 3": "r03",
        "input 4": "glb",
        "output": "7vo,nor,eth,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r27 -> 7wc,nor,eth,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r27",
        "input 3": "r04",
        "input 4": "glb",
        "output": "7wc,nor,eth,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r26 -> 7pa,nor,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r26",
        "input 3": "r05",
        "input 4": "glb",
        "output": "7pa,nor,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r25 -> 7h7,nor,eth,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r25",
        "input 3": "r06",
        "input 4": "glb",
        "output": "7h7,nor,eth,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r25 -> 7h7,nor,eth,sock=5",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r25",
        "input 3": "r07",
        "input 4": "glb",
        "output": "7h7,nor,eth,sock=5",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r20 -> fla,nor,sock=3",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "r08",
        "input 4": "glb",
        "output": "fla,nor,sock=3",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r20 -> fla,nor,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "r09",
        "input 4": "glb",
        "output": "fla,nor,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r20 -> fla,nor,sock=5",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "r10",
        "input 4": "glb",
        "output": "fla,nor,sock=5",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r22 -> fla,nor,eth,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "r01",
        "input 4": "glr",
        "output": "fla,nor,eth,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r21 -> fla,nor,eth,sock=5",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "r02",
        "input 4": "glr",
        "output": "fla,nor,eth,sock=5",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r20 -> crs,nor,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "r03",
        "input 4": "glr",
        "output": "crs,nor,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r22 -> crs,nor,sock=5",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r22",
        "input 3": "r04",
        "input 4": "glr",
        "output": "crs,nor,sock=5",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r20 -> crs,nor,sock=6",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "r05",
        "input 4": "glr",
        "output": "crs,nor,sock=6",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r21 -> crs,nor,eth,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "r06",
        "input 4": "glr",
        "output": "crs,nor,eth,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r24 -> crs,nor,eth,sock=5",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "r07",
        "input 4": "glr",
        "output": "crs,nor,eth,sock=5",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r20 -> uh9,nor,sock=3",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "r08",
        "input 4": "glr",
        "output": "uh9,nor,sock=3",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r20 -> xtp,nor,sock=3",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "r09",
        "input 4": "glr",
        "output": "xtp,nor,sock=3",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r20 -> xtp,nor,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "r10",
        "input 4": "glr",
        "output": "xtp,nor,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r20 -> utp,nor,sock=3",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "r01",
        "input 4": "gzv",
        "output": "utp,nor,sock=3",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r20 -> utp,nor,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "r02",
        "input 4": "gzv",
        "output": "utp,nor,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r20 -> uui,nor,sock=3",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "r03",
        "input 4": "gzv",
        "output": "uui,nor,sock=3",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r20 -> uui,nor,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r20",
        "input 3": "r04",
        "input 4": "gzv",
        "output": "uui,nor,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r24 -> uar,nor,eth,sock=3",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "r05",
        "input 4": "gzv",
        "output": "uar,nor,eth,sock=3",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r24 -> uar,nor,eth,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r24",
        "input 3": "r06",
        "input 4": "gzv",
        "output": "uar,nor,eth,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r21 -> uit,nor,sock=4",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "r07",
        "input 4": "gzv",
        "output": "uit,nor,sock=4",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    if (config.baseMarket) {
      cubemain.rows.push({
        description: "r21 -> uit,nor,eth",
        enabled: 1,
        version: 100,
        numinputs: 4,
        "input 1": "vps",
        "input 2": "r21",
        "input 3": "r08",
        "input 4": "gzv",
        "output": "uit,nor,eth",
        lvl: 100,
        ilvl: 100,
        "*eol": 0,
      });
    }

    D2RMM.writeTsv(cubemainFilename, cubemain);
