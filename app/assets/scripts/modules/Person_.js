// function Person(meNameMate, favColour){
//   this.name = meNameMate;
//   this.colour = favColour;
//   this.greet = function(){
//     console.log("Greetings, I'm " + this.name + " and my fav colour is " + this.colour + "." );
//   }
// }

class Person {
  constructor(meNameMate, favColour) {
    this.name = meNameMate;
    this.colour = favColour;
  }
  greet(){
    console.log("Greetings, I'm " + this.name + " and my fav colour is " + this.colour + ".");
  }
}

// module.exports = Person; 
export default Person;

// Constructor function. A blueprint for people. Like a class.
// This keyword allows to be recycled. This refers to whichever object is being created/called.