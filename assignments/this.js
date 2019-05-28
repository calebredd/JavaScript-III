/* The four principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Global/Window Binding-this referring to the Window.
 * 2. implicit Binding-Followed by a '.' 'This' refers back to the call and whatever is before the '.' is considered "this"
 * 3. new binding-Creates a new object each time. 'This' is whatever is before the '= new'. 
 * 4. explicit binding-Anytime a .call or .apply is used. 'This' is used to reference the first agrument(object) in a function that is not nested into the object itself. 
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
function addTwo(number) {
  console.log(this);
  return number + 2;
}
addTwo(3);
// Principle 2

// code example for Implicit Binding
person = {
  said: "nothing",
  speak: function(greeting) {
    if (greeting === "hello") {
      console.log(this.said);
    } else {
      console.log("goodbye");
    }
    return;
  }
};
person.speak(person.said);

// Principle 3

// code example for New Binding
function NewPerson(name) {
  this.age = Math.floor(Math.random() * 100);
  this.name = name;
  this.weight = Math.floor(Math.random() * 500);
  this.intro = function() {
    return console.log(
      `Hello, my name is ${this.name}, I am ${this.age} years old and I am ${
        this.weight
      } lbs.\nWould you like to dance?`
    );
  };
  return;
}
const danny = new NewPerson("Danny");
const joni = new NewPerson("Joni");
const jack = new NewPerson("Jack");
console.log(danny.intro());
console.log(joni.intro());
console.log(jack.intro());

// Principle 4

// code example for Explicit Binding
const yourObject = {
  name: "Caleb Redd",
  favoriteFood: "Pasta",
  hometown: "Phoenix",
  allergies: "anchovies"
};

const thingsYouEnjoy = [
  "Biking",
  "Javascript",
  "Skateboarding",
  "Rock Climbing",
  "Movies",
  "Music"
];

function tellUsAboutYourself(thing1,thing2,thing3) {
  return console.log(`Hi! My name is ${this.name}, I live in ${
    this.hometown
  }, and I enjoy ${thing1}, ${thing2}, and ${thing3}. I love to eat ${
    this.favoriteFood
  } but I am allergic to ${this.allergies}.`);
}
tellUsAboutYourself.call(yourObject, thingsYouEnjoy[2], thingsYouEnjoy[3], thingsYouEnjoy[0]);
