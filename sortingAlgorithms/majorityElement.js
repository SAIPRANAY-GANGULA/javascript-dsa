var majorityElement = function (nums) {
  let hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (hashMap.hasOwnProperty(nums[i])) {
      hashMap[nums[i]]++;
    } else {
      hashMap[nums[i]] = 0;
    }
  }

  for (const key of Object.keys(hashMap)) {
    if (hashMap[key] >= Math.floor(nums.length / 2)) {
      return +key;
    }
  }
};

var majorityElement1 = function (nums) {
  nums.sort();
  return nums[Math.floor(nums.length / 2)];
};

var majorityElement2 = function (nums) {
  let n = nums.length;
  let cnt = 0; // Count
  let el; // Element

  // Applying the algorithm
  for (let i = 0; i < n; i++) {
    if (cnt === 0) {
      cnt = 1;
      el = nums[i];
    } else if (el === nums[i]) {
      cnt++;
    } else {
      cnt--;
    }
  }

  // return el;

  // Checking if the stored element is the majority element
  let cnt1 = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] === el) {
      cnt1++;
    }
  }

  if (cnt1 > Math.floor(n / 2)) {
    return el;
  }
  return -1;
};

console.log(majorityElement([3, 3, 4, 2, 4, 4, 2, 4, 4]));
console.log(majorityElement1([3, 3, 4, 2, 4, 4, 2, 4, 4]));
console.log(majorityElement2([3, 3, 4, 2, 4, 4, 2, 4, 4]));
