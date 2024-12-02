
function leadersinArray(nums) {
    let n = nums.length;
    let rightMax = nums[n-1];
    let leaders = [rightMax];

    for(let i = n-2; i >= 0; i--) {
        if(rightMax < nums[i]) {
            leaders.unshift(nums[i]);
            rightMax = nums[i]
        }
    }

    return leaders;
}

console.log(leadersinArray([4, 7, 1, 0]));
console.log(leadersinArray([10, 22, 12, 3, 0, 6]));