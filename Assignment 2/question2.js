function linearSearch(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == target) {
            return i;
        }

    }
    return -1;
}

// Example
let arr = [1, 2, 3, 4, 5];
console.log(linearSearch(arr, 3)); // Output: 2