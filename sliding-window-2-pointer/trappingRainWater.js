// https://takeuforward.org/data-structure/trapping-rainwater/

// using prefixMax & suffixMax
function trappingRainWater1(height) {
  let n = height.length;
  const prefixMax = new Array(n);
  const suffixMax = new Array(n);
  let result = 0;

  prefixMax[0] = height[0];
  for (let i = 1; i < n; i++) {
    prefixMax[i] = Math.max(height[i], prefixMax[i - 1]);
  }

  //   console.log("prefix", prefixMax);

  suffixMax[n - 1] = height[n - 1];
  for (let j = n - 2; j >= 0; j--) {
    suffixMax[j] = Math.max(height[j], suffixMax[j + 1]);
  }

  //   console.log("suffixMax", suffixMax);

  for (let i = 0; i < n; i++) {
    result += Math.min(suffixMax[i], prefixMax[i]) - height[i];
  }

  return result;
}

// using 2 pointer method
function trappingRainWater2(height) {
  let l = 0;
  let r = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let result = 0;

  while (l < r) {
    if (height[l] < height[r]) {
      if (height[l] > leftMax) {
        leftMax = height[l];
      } else {
        result += leftMax - height[l];
      }
      l++;
    } else {
      if (height[r] > rightMax) {
        rightMax = height[r];
      } else {
        result += rightMax - height[r];
      }
      r--;
    }
    // console.log(l, r, leftMax, rightMax, result);
  }

  return result;
}

console.log(trappingRainWater1([3, 0, 1, 0, 4, 0, 2]));
console.log(trappingRainWater1([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trappingRainWater2([3, 0, 1, 0, 4, 0, 2]));
console.log(trappingRainWater2([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
