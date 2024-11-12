// To check if an array is sorted and rotated in JavaScript, we can follow these steps:

// Count how many times the array switches from a larger number to a smaller one.
// If there is more than one such switch, it indicates that the array is not sorted and rotated.
// Also, handle the case where the array is sorted and rotated completely around (e.g., [3, 4, 5, 1, 2]).


function checkIfSortedAndRotated(arr) {
    let count = 0;
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        // Count the "rotations" or points where arr[i] > arr[(i + 1) % n]
        if (arr[i] > arr[(i + 1) % n]) {
            count++;
        }
    }

    // The array should have at most one such "rotation" for it to be sorted and rotated
    return count <= 1;
}

// Example usage
const arr1 = [3, 4, 5, 1, 2];
console.log(checkIfSortedAndRotated(arr1)); // true

const arr2 = [2, 1, 3, 4];
console.log(checkIfSortedAndRotated(arr2)); // false

const arr3 = [1, 2, 3, 4, 5];
console.log(checkIfSortedAndRotated(arr3)); // true (already sorted, not rotated)
