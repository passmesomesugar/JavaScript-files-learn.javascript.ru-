console.log(true && true);   // true
console.log(false && true);  // false
console.log(true && false);  // false
console.log(false && false); // false

// if example 

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
    console.log('Time: 12:30');
}

// casting: 
if (1 && 0) { //will not execute
}

// Note: 'And' returns first false value. When all true last is returned.
console.log(1 && 2 && null && 3); // 'null' is returned 
