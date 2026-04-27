function isNumber(value) {
    return typeof value === "number";
}

// Example
console.log(isNumber(10));        // true
console.log(isNumber("10"));      // false
console.log(isNumber(NaN));       // true
console.log(isNumber(null));      // false