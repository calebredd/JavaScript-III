/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.name = attributes.name;
  this.dimensions = attributes.dimensions;
  this.destroy = function() {
    return `${this.name} was removed from the game`;
  };
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(attributes) {
  GameObject.call(this, attributes);
  this.healthPoints = attributes.healthPoints;
  this.takeDamage = function() {
    return `${this.name} took damage`;
  };
}
/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function Humanoid(attributes) {
  CharacterStats.call(this, attributes);
  this.team = attributes.team;
  this.weapons = attributes.weapons;
  this.language = attributes.language;
  this.race = attributes.race;
  this.defense = attributes.defense;
  this.attack = attributes.attack;
  this.strike = function(target) {
    let x = target.block - this.attack;
    if (x < 0) {
      target.healthPoints += x;
      if (target.healthPoints < 0) {
        return target.destroy();
      } else {
        return target.takeDamage();
      }
    }
  };
  this.block = attributes.defense;
  this.greet = function() {
    return `${this.name} offers a greeting in ${this.language}`;
  };
}

function Hero(attributes) {
  Humanoid.call(this, attributes);
  this.special = attributes.special;
  this.specialDescription = attributes.specialDescription;
  this.will = 1;
}

function Villain(attributes) {
  Humanoid.call(this, attributes);
  this.master = attributes.master;
  this.will = 3;
}
/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

const axeman = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 3,
    width: 3,
    height: 1
  },
  healthPoints: 10,
  name: "Gimli",
  team: "the Mountain People",
  weapons: ["Axe of Dragon Bone"],
  language: "Dwarvish",
  race: "dwarf",
  attack: 4,
  defense: 1,
  specialDescription: "jump up and slam his axe down in a splitting force",
  special: function(target) {
    console.log(
      `${axeman.name} leaped into the air with all his might and brought his ${
        axeman.weapons
      } crashing down onto ${target.name} causing critical damage`
    );
    return (target.healthPoints -= axeman.attack);
  }
});
const swordsman = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 3
  },
  healthPoints: 10,
  name: "Aragon",
  team: "Gondor",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue",
  race: "human",
  attack: 2,
  defense: 3,
  specialDescription: "slip through the shadows to be unseen by enemies",
  special: function(target) {
    console.log(
      `${swordsman.name} has gone into the ShadowRealm and cannot be seen by ${
        target.name
      } for the next round`
    );
    swordsman.attack += 3;
    swordsman.defense = 10;
  }
});

const archer = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 1,
    height: 3
  },
  healthPoints: 10,
  name: "Legolas",
  team: "the Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish",
  race: "elf",
  attack: 1,
  defense: 4,
  specialDescription:
    "fire three arrows at once to temporarily immobolize an enemy",
  special: function(target) {
    console.log(
      `${target.name} has been show by ${
        archer.name
      } with three arrows at once and is immobolized for the next round`
    );
    target.block = 0;
    target.will = 0;
  }
});
const orc = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 30,
  attack: 2,
  defense: 3,
  name: "Gahuul",
  team: "the Black Hand",
  weapons: ["Orc Blade", "Poison Arrow"],
  language: "Orcish",
  race: "orc",
  master: "Sarumon"
});
const health = `HEALTH:\n${axeman.name}:${axeman.healthPoints}, ${
  swordsman.name
}:${swordsman.healthPoints}, ${archer.name}:${archer.healthPoints}\n${
  orc.name
}:${orc.healthPoints}`;

console.log(
  `${axeman.name} is a ${axeman.race} from ${axeman.team} who speaks ${
    axeman.language
  }, has a special ability to ${axeman.specialDescription} and wields ${
    axeman.weapons
  }`
);
console.log(
  `${swordsman.name} is a ${swordsman.race} from ${swordsman.team} who speaks ${
    swordsman.language
  }, has a special ability to ${swordsman.specialDescription} and wields ${
    swordsman.weapons
  }`
);
console.log(
  `${archer.name} is an ${archer.race} from ${archer.team} who speaks ${
    archer.language
  }, has a special ability to ${archer.specialDescription} and wields ${
    archer.weapons
  }`
);
console.log(
  `${orc.name} is an ${orc.race} from ${orc.team} who speaks ${
    orc.language
  }, serves ${orc.master} and wields ${orc.weapons}`
);
//console.log(health);

warriorArray = [orc, axeman, swordsman, archer];

mainloop = function() {
  let warriors = warriorArray.filter(warrior => warrior.healthPoints > 0);
  console.log(health);
  warriors.forEach(function(e){
    if(e==="orc"){
      e.strike('axeman');
    }else{e.strike('orc');}
    console.log(e);
  });
  console.log(health);
  return warriors.map(warrior=>warrior.name+" "+warrior.healthPoints);
};
console.log(mainloop());
