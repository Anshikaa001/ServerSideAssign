function isNull(value) {
    return value === null;
}

// Example
console.log(isNull(null));      // true
console.log(isNull(0));         // false
console.log(isNull(undefined)); // false
console.log(isNull(""));        // false