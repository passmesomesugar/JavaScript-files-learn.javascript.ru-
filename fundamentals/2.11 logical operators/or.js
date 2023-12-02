console.log(true || true);   // true
console.log(false || true);  // true
console.log(true || false);  // true
console.log(false || false); // false
console.log(1 || 0); // true


console.log("This returns first true value or last value");
console.log(null || 1); // 1 first true value
console.log(null || 0 || 1); // 1 first true value
console.log(undefined || null || 0); // 0 all is false thus last is returned

true || console.log("never executed"); // stops at true, has no chance reaching second statement
false || console.log("executed");  