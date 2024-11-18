const twoSum = function (nums, target) {
    let n = nums.length;
    let map = new Map();

    for (let i = 0; i < n; i++) {
        let rem = target - nums[i];
        if (map.has(rem)) {
            return [map.get(rem), i];
        }
        map.set(nums[i], i);
    }
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));