function getSingleElement(arr) {
    // Size of the array:
    const n = arr.length;

    // Declare the hashmap.
    // And hash the given array:
    const hashmap = new Map();
    for (let i = 0; i < n; i++) {
        const num = arr[i];
        hashmap.set(num, (hashmap.get(num) || 0) + 1);
    }

    // Find the single element and return the answer:
    for (const [num, count] of hashmap) {
        if (count === 1) {
            return num;
        }
    }

    // This line will never execute
    // if the array contains a single element.
    return -1;
}

// Two important properties of XOR are the following:

// XOR of two same numbers is always 0 i.e. a ^ a = 0. ←Property 1.
// XOR of a number with 0 will result in the number itself i.e. 0 ^ a = a.  ←Property 2


const singleNumber = function (nums) {
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }

    return result;

};

function main() {
    const arr = [4, 1, 2, 1, 2];
    const ans = getSingleElement(arr);
    console.log("The single element is:", ans);

    const ans1 = singleNumber(arr);
    console.log("The single element is:", ans);
}

main();



