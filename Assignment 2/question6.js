function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }

    return arr;
}

// Example
let numbers = [1, 39, 21, 8, 9, 5];
console.log(insertionSort(numbers)); //Output: [1, 5, 8, 9, 21, 39]