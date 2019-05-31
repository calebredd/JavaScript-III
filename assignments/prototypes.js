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
class GameObject {
  constructor(attributes) {
    this.createdAt = attributes.createdAt;
    this.name = attributes.name;
    this.dimensions = attributes.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game`;
  }
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
class CharacterStats extends GameObject {
  constructor(attributes) {
    super(attributes);
    this.healthPoints = attributes.healthPoints;
  }
  takeDamage(attacker) {
    return `${this.name} took damage from ${attacker.name}!`;
  }
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
class Humanoid extends CharacterStats {
  constructor(attributes) {
    super(attributes);
    this.team = attributes.team;
    this.weapons = attributes.weapons;
    this.language = attributes.language;
    this.race = attributes.race;
    this.defense = attributes.defense;
    this.attack = attributes.attack;
    this.block = attributes.defense;
  }
  strike(target) {
    let defend = Math.round(Math.random());
    let block = defend * target.block;
    let damage = block - this.attack;
    let counter = Math.round(Math.random());
    if (damage < 0) {
      target.healthPoints += damage;
      if (target.healthPoints <= 0) {
        return target.destroy();
      } else {
        return target.takeDamage(this);
      }
    } else {
      if (counter) {
        console.log(`${target.name} countered an attack from ${this.name},`);
        this.healthPoints -= target.attack;
        if (this.healthPoints <= 0) {
          console.log(this.destroy());
        }
        return this.takeDamage(target);
      } else {
        return `${target.name} blocked an attack from ${this.name}!`;
      }
    }
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}`;
  }
}

class Hero extends Humanoid {
  constructor(attributes) {
    super(attributes);
    this.special = attributes.special;
    this.specialDescription = attributes.specialDescription;
    this.will = 1;
  }
}

class Villain extends Humanoid {
  constructor(attributes) {
    super(attributes);
    this.master = attributes.master;
    this.will = 3;
  }
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
const health = function() {
  return `HEALTH:\n${axeman.name}:${axeman.healthPoints}, ${swordsman.name}:${
    swordsman.healthPoints
  }, ${archer.name}:${archer.healthPoints}\n${orc.name}:${orc.healthPoints}`;
};
let charDescribe = function(char) {
  return `${char.name} is a ${char.race} from ${char.team} who speaks ${
    char.language
  }, has a special ability to ${char.specialDescription} and wields ${
    char.weapons
  }`;
};
var paragraph = document.createElement("p");

document
  .getElementById("gameDescription")
  .appendChild(paragraph).innerHTML += charDescribe(axeman);
document
  .getElementById("gameDescription")
  .appendChild(paragraph).innerHTML += charDescribe(swordsman);
document
  .getElementById("gameDescription")
  .appendChild(paragraph).innerHTML += charDescribe(archer);
document
  .getElementById("gameDescription")
  .appendChild(paragraph).innerHTML += charDescribe(orc);

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
  console.log(health());
  while (warriors.length > 1 && orc.healthPoints > 0) {
    warriors = warriorArray.filter(warrior => warrior.healthPoints > 0);
    warriors.forEach(function(e) {
      if (e === orc) {
        let y = Math.floor(Math.random() * 3);
        if (y === 0) {
          console.log(e.strike(axeman));
        } else if (y === 1) {
          console.log(e.strike(swordsman));
        } else {
          console.log(e.strike(archer));
        }
      } else {
        if (orc.healthPoints > 0) {
          console.log(e.strike(orc));
        } else {
          orc.destroy();
        }
      }
    });
    if (orc.healthPoints < 0) {
      orc.healthPoints = 0;
    }
    console.log(health());
  }
  warriors = warriorArray.filter(warrior => warrior.healthPoints > 0);
  console.log(
    `The survivors from the Great Battle for Middle Earth were ${warriors.map(
      survivor => survivor.name
    )}`
  );
};
document.getElementById("dark").onclick = mainloop;
