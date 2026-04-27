function sortStringCaseInsensitive(str) {
    return str
        .split('')
        .sort((a, b) => a.localeCompare(b))
        .join('');
}

// Example
let text = "JavaScript";
console.log(sortStringCaseInsensitive(text)); //Output: "aaciJprStv"