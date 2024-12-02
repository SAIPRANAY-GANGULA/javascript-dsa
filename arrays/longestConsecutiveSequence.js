const longestConsecutive = function (nums) {
  const n = nums.length;
  const sortedNums = nums.sort((a, b) => a - b);

  if (n === 0) {
    return 0;
  }

  let lastSmaller = nums[0];
  let currentSequenceLength = 1;
  let longestSequenceLength = 1;

  for (let i = 1; i < n; i++) {
    if (sortedNums[i] === lastSmaller + 1) {
      lastSmaller = sortedNums[i];
      currentSequenceLength += 1;
      longestSequenceLength = Math.max(
        longestSequenceLength,
        currentSequenceLength
      );
      continue;
    }

    if (sortedNums[i] === lastSmaller) {
      continue;
    }

    if (sortedNums[i] > lastSmaller) {
      lastSmaller = sortedNums[i];
      currentSequenceLength = 1;
      longestSequenceLength = Math.max(
        longestSequenceLength,
        currentSequenceLength
      );
      continue;
    }
  }

  return longestSequenceLength;
};

const longestConsecutive1 = function (nums) {
  const n = nums.length;
  const setNums = new Set(nums);
  let longestSequenceLength = 1;

  if (n === 0) {
    return 0;
  }

  for (const i of setNums) {
    if (!setNums.has(i - 1)) {
      let cnt = 1;
      let x = i;
      while (setNums.has(x + 1)) {
        x = x + 1;
        cnt = cnt + 1;
      }
      longestSequenceLength = Math.max(longestSequenceLength, cnt);
    }
  }

  return longestSequenceLength;
};

console.log(longestConsecutive([100, 200, 1, 3, 2, 4]));
console.log(
  longestConsecutive([
    104, 3, 7, 9, 101, 103, 102, 3, 102, 7, 9, 1, 104, 103, 105,
  ])
);
console.log("---------------------------------------------");
console.log(longestConsecutive1([100, 200, 1, 3, 2, 4]));
console.log(
  longestConsecutive1([
    104, 3, 7, 9, 101, 103, 102, 3, 102, 7, 9, 1, 104, 103, 105,
  ])
);
