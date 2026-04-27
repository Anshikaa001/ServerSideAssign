const isRegExp = (value) =>
    Object.prototype.toString.call(value) === "[object RegExp]";

//Example
console.log(isRegExp(/abc/)); // true
console.log(isRegExp("abc"));  // false
console.log(isRegExp(123));    // false