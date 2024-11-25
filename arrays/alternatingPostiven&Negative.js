
const rearrangeArray = function (nums) {
    let n = nums.length;
    let positiveArray = [];
    let negativeArray = [];
    let result = [];

    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            positiveArray.push(nums[i]);
        } else {
            negativeArray.push(nums[i]);
        }
    }

    for (let i = 0; i < Math.floor(n/2); i++) {
        result.push(positiveArray[i]);
        result.push(negativeArray[i]);
    }

    return result;

};

console.log(rearrangeArray([3,1,-2,-5,2,-4]));