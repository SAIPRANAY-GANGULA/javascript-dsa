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

  for (let i = 0; i < Math.floor(n / 2); i++) {
    result.push(positiveArray[i]);
    result.push(negativeArray[i]);
  }

  return result;
};

const rearrangeArray1 = function (nums) {
  let n = nums.length;
  let positiveIndex = 0;
  let negativeIndex = 1;
  let result = new Array(n);

  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      result[positiveIndex] = nums[i];
      positiveIndex += 2;
    } else {
      result[negativeIndex] = nums[i];
      negativeIndex += 2;
    }
  }

  return result;
};

console.log(rearrangeArray1([3, 1, -2, -5, 2, -4]));

function rearrangebySign(nums) {
  let n = nums.length;
  let positiveArray = [];
  let negativeArray = [];

  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) positiveArray.push(A[i]);
    else neg.push(A[i]);
  }

  // If positives are lesser than the negatives.
  if (pos.length < neg.length) {
    // First, fill array alternatively till the point
    // where positives and negatives are equal in number.
    for (let i = 0; i < pos.length; i++) {
      A[2 * i] = pos[i];
      A[2 * i + 1] = neg[i];
    }

    // Fill the remaining negatives at the end of the array.
    let index = pos.length * 2;
    for (let i = pos.length; i < neg.length; i++) {
      A[index] = neg[i];
      index++;
    }
  }

  // If negatives are lesser than the positives.
  else {
    // First, fill array alternatively till the point
    // where positives and negatives are equal in number.
    for (let i = 0; i < neg.length; i++) {
      A[2 * i] = pos[i];
      A[2 * i + 1] = neg[i];
    }

    // Fill the remaining positives at the end of the array.
    let index = neg.length * 2;
    for (let i = neg.length; i < pos.length; i++) {
      A[index] = pos[i];
      index++;
    }
  }
  return A;
}

// Array Initialisation.
let A = [1, 2, -4, -5, 3, 4];

let ans = RearrangebySign(A);

for (let i = 0; i < ans.length; i++) {
  console.log(ans[i]);
}
