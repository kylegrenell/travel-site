var $ = require('jquery');
// var Person = require('./modules/Person');
import Person from './modules/Person';

// alert('howdy howdy');
// Adult inherits Person properties + methods
class Adult extends Person {
  payTaxes(){
    console.log(this.name + " now owes £0 in taxes");
  }
}

var kyle = new Person("Kyle", "Green");
kyle.greet();

var ellie = new Adult("Ellie", "Pink");
ellie.greet();
ellie.payTaxes();
// $("h1").remove();