function mergeSort(arr) {
    const n = arr.length;
    let temp = new Array(n);

    for (let size = 1; size < n; size *= 2) {

        for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * size) {

            let mid = Math.min(leftStart + size - 1, n - 1);
            let rightEnd = Math.min(leftStart + 2 * size - 1, n - 1);

            merge(arr, temp, leftStart, mid, rightEnd);
        }
    }

    return arr;
}

function merge(arr, temp, left, mid, right) {
    let i = left;
    let j = mid + 1;
    let k = left;

    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }

    while (i <= mid) {
        temp[k++] = arr[i++];
    }

    while (j <= right) {
        temp[k++] = arr[j++];
    }


    for (let idx = left; idx <= right; idx++) {
        arr[idx] = temp[idx];
    }
}

// Example
let numbers = [10, 7, 8, 9, 2, 4, 6, 5];
console.log(mergeSort(numbers)); //Output: [2, 4, 5, 6, 7, 8, 9, 10]