// a ||= b ~ a || (a = b);
// above evaluates a, if a is false then a is assigned b value 

// no need to cast, bool is false , therefore string is assigned: 
let johnHasCar = false;
johnHasCar ||= "John has no car";
console.log(johnHasCar);

// "" is cast to false:
let manufacturer = "";
manufacturer ||= "Unknown manufacturer";
console.log(manufacturer); // "Неизвестный производитель"

// "||=" can be replaced with regular "if", as shown below:

let johnHasCar1 = false;
if (johnHasCar1 == false) {
    johnHasCar1 = "У Джона нет машины!";
}
console.log(johnHasCar1); // "У Джона нет машины!"
let manufacturer1 = "";
if (manufacturer1 == false) {
    manufacturer1 = "Неизвестный производитель";
}
console.log(manufacturer1); // "Неизвестный производитель"
