// work principle: 
// a &&= b; ~ a && (a = b);

// Example 
let greeting = "Hi"; // cast to true
greeting &&= greeting + ", User!"; //~ true && (greeting = greeting + "...")
console.log(greeting) // Hi, User!

// Example rewritten using if :
let greeting1 = "Hi";
if (greeting1) {
    greeting1 = greeting1 + ", User!"
}
console.log(greeting1) // "Привет, пользователь!"
