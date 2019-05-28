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
    return alert(`${this.name} was removed from the game`);
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
    return console.log(`${this.name} took damage`);
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
  this.greet = function() {
    return console.log(`${this.name} offers a greeting in ${this.language}`);
  };
}
/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});
const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

// console.log(mage.createdAt); // Today's date
// console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
// console.log(swordsman.healthPoints); // 15
// console.log(mage.name); // Bruce
// console.log(swordsman.team); // The Round Table
// console.log(mage.weapons); // Staff of Shamalama
// console.log(archer.language); // Elvish
// console.log(archer.greet()); // Lilith offers a greeting in Elvish.
// console.log(mage.takeDamage()); // Bruce took damage.
// console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
function Hero(attributes) {
  Humanoid.call(this, attributes);
  this.hit = function() {
    this.healthPoints--;
    alert(`${this.name} was hit`);
    if (this.healthPoints <= 0) {
      return this.destroy();
    }
  };
  this.heal = function() {
    this.healthPoints++;
    return alert(`${this.name} recovered some health`);
  };
}
function Villain(attributes) {
  Hero.call(this, attributes);
}
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;

// * Create two new objects, one a villain and one a hero and fight it out with methods!
const darkLord = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 5,
  name: "Dark Lord",
  team: "Satan",
  weapons: [
    "Death, Plague, Pestilence, Fire&Brimstone, and his Mistress, EVE!!!"
  ],
  language: "Satanic"
});
const sabrina = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 1,
    height: 2
  },
  healthPoints: 5,
  name: "Sabrina Spellman",
  team: "Church of the Night",
  weapons: ["Staff of Night"],
  language: "English"
});
// console.log(
//   `The hero of the story is ${
//     sabrina.name
//   }. She is a 16 year old girl with a secret....she is part of the ${
//     sabrina.team
//   }.`
// );
// console.log(
//   `Her arch nemesis is everybody's arch nemesis, Praise the ${
//     darkLord.name
//   }! \n They are going to battle it out!`
// );
// console.log(`${sabrina.name}: ${sabrina.healthPoints}`);
// console.log(`${darkLord.name}: ${darkLord.healthPoints}`);
// console.log(sabrina.hit()); //Hit
// console.log(darkLord.hit()); //Heal
// console.log(sabrina.name + ": " + sabrina.healthPoints); //Health Points
// console.log(darkLord.name + ": " + darkLord.healthPoints); //Health Points
// console.log(sabrina.hit()); //Hit
// console.log(sabrina.hit()); //Heal
// console.log(sabrina.name + ": " + sabrina.healthPoints); //Health Points
// console.log(darkLord.name + ": " + darkLord.healthPoints); //Health Points
// console.log(sabrina.hit()); //Hit
// console.log(darkLord.hit()); //Heal
// console.log(sabrina.name + ": " + sabrina.healthPoints); //Health Points
// console.log(darkLord.name + ": " + darkLord.healthPoints); //Health Points
// console.log(sabrina.heal()); //Hit
// console.log(sabrina.heal()); //Hit
// console.log(sabrina.heal()); //Hit
// console.log(darkLord.hit()); //Heal
// console.log(sabrina.name + ": " + sabrina.healthPoints); //Health Points
// console.log(darkLord.name + ": " + darkLord.healthPoints); //Health Points
// console.log(darkLord.heal()); //Heal
// console.log(darkLord.hit()); //Heal
// console.log(darkLord.hit()); //Heal
// console.log(sabrina.hit()); //Hit
// console.log(sabrina.name + ": " + sabrina.healthPoints); //Health Points
// console.log(darkLord.name + ": " + darkLord.healthPoints); //Health Points
// console.log(sabrina.hit()); //Hit
// console.log(darkLord.hit()); //Heal
// console.log(sabrina.name + ": " + sabrina.healthPoints); //Health Points
// console.log(darkLord.name + ": " + darkLord.healthPoints); //Health Points
// console.log(
//   `Way to go ${
//     sabrina.name
//   }! You saved Greendale/Riverdale,\n you can finally be a real girl now and take Salem for long walks in the park with Harvey and the gang!`
// );

function darkloop() {
  alert(
    `The hero of the story is ${
      sabrina.name
    }. She is a 16 year old girl with a secret....she is part of the ${
      sabrina.team
    }.`
  );
  alert(
    `Her arch nemesis is everybody's arch nemesis, Praise the ${
      darkLord.name
    }! \nThey are going to battle it out!`
  );
  alert(
    `${sabrina.name} will be using ${sabrina.weapons}. \n The ${
      darkLord.name
    } will be using ${
      darkLord.weapons
    }.\n Let the games commence for the Church of the Night!`
  );
  alert(
    `Healthpoints:\n${sabrina.name}: ${sabrina.healthPoints}\n${
      darkLord.name
    }: ${darkLord.healthPoints}`
  );
  alert(sabrina.hit()); //Hit
  alert(darkLord.hit()); //Heal
  alert(
    `Healthpoints:\n${sabrina.name}: ${sabrina.healthPoints}\n${
      darkLord.name
    }: ${darkLord.healthPoints}`
  );
  alert(sabrina.hit()); //Hit
  alert(sabrina.hit()); //Heal
  alert(
    `Healthpoints:\n${sabrina.name}: ${sabrina.healthPoints}\n${
      darkLord.name
    }: ${darkLord.healthPoints}`
  );
  alert(sabrina.hit()); //Hit
  alert(darkLord.hit()); //Heal
  alert(
    `Healthpoints:\n${sabrina.name}: ${sabrina.healthPoints}\n${
      darkLord.name
    }: ${darkLord.healthPoints}`
  );
  alert(sabrina.heal()); //Hit
  alert(sabrina.heal()); //Hit
  alert(sabrina.heal()); //Hit
  alert(darkLord.hit()); //Heal
  alert(
    `Healthpoints:\n${sabrina.name}: ${sabrina.healthPoints}\n${
      darkLord.name
    }: ${darkLord.healthPoints}`
  );
  alert(darkLord.heal()); //Heal
  alert(darkLord.hit()); //Heal
  alert(darkLord.hit()); //Heal
  alert(sabrina.hit()); //Hit
  alert(
    `Healthpoints:\n${sabrina.name}: ${sabrina.healthPoints}\n${
      darkLord.name
    }: ${darkLord.healthPoints}`
  );
  alert(sabrina.hit()); //Hit
  alert(darkLord.hit()); //Heal
  alert(
    `Healthpoints:\n${sabrina.name}: ${sabrina.healthPoints}\n${
      darkLord.name
    }: ${darkLord.healthPoints}`
  );
  alert(
    `Way to go ${
      sabrina.name
    }! You saved Greendale/Riverdale,\n you can finally be a real girl now and take Salem for long walks in the park with Harvey and the gang!`
  );
  sabrina.healthPoints=5;
  darkLord.healthPoints=5;
  return;
}

document.getElementById("dark").onclick = function() {
  darkloop();
};
