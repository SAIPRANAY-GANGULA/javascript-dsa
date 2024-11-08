//  The same number may be chosen from candidates an unlimited number of times
//takeuforward.org/data-structure/combination-sum-1/
function combinationSumOne(candidates, target) {
  let result = [];
  solver(0, candidates, [], target);

  function solver(i, arr, temp, sum) {
    total++;
    // console.log(temp);
    if (i === arr.length) {
      if (sum === 0) {
        result.push([...temp]);
      }
      return;
    }

    if (sum === 0) {
      result.push([...temp]);
      return;
    }

    // including `i`th element
    if (arr[i] <= sum) {
      temp.push(arr[i]);
      solver(i, arr, temp, sum - arr[i]);
      temp.pop();
    }

    //not including `i`th element
    solver(i + 1, arr, temp, sum);
  }

  console.log(total);
  total = 0;
  return result;
}

let total = 0;

console.log(combinationSumOne([2, 3, 6, 7], 7));

//  The same number may be chosen from candidates an unlimited number of times
//takeuforward.org/data-structure/combination-sum-1/
function combinationSumTwo(candidates, target) {
  let result = [];
  //sorting input is mandatory to avoid duplicates
  solver(0, candidates.sort(), [], target);

  function solver(i, arr, temp, sum) {
    total1++;
    // console.log(temp);
    if (i === arr.length) {
      if (sum === 0) {
        result.push([...temp]);
      }
      return;
    }

    if (sum === 0) {
      result.push([...temp]);
      return;
    }

    // including `i`th element
    if (arr[i] <= sum) {
      temp.push(arr[i]);
      solver(i + 1, arr, temp, sum - arr[i]);
      temp.pop();
    }

    // On the same level, Skip duplicates by advancing index until we find a new element
    let nextIndex = i + 1;
    while (
      nextIndex < candidates.length &&
      candidates[nextIndex] === candidates[i]
    ) {
      nextIndex++;
    }

    // Exclude the current element and move to the next unique one
    solver(nextIndex, arr, temp, sum);
  }

  console.log(total1);
  total1 = 0;

  return result;
}

let total1 = 0;

console.log("-------------------------------------------");
console.log(combinationSumTwo([2, 3, 6, 7], 7));
console.log(combinationSumTwo([10, 1, 2, 7, 6, 1, 5], 8));
console.log(combinationSumTwo([1, 2, 3, 1, 1, 2], 4));
console.log(combinationSumTwo([1, 1, 1, 2, 2, 3], 4));

function combinationSumTwo1(candidates, target) {
  let result = [];

  //sorting input is mandatory to avoid duplicates
  candidates.sort((a, b) => a - b);
  solver(0, [], target);

  function solver(start, temp, sum) {
    if (sum === 0) {
      result.push([...temp]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      total1++;
      // Skip duplicates in the same recursive level
      if (i > start && candidates[i] === candidates[i - 1]) continue;

      // Stop if the current number is greater than the remaining sum
      if (candidates[i] > sum) break;

      // Include the current candidate
      temp.push(candidates[i]);
      solver(i + 1, temp, sum - candidates[i]);
      temp.pop(); // Backtrack
    }
  }

  console.log(total1);
  total1 = 0;
  return result;
}

console.log("-------------------------------------------");
console.log(combinationSumTwo1([2, 3, 6, 7], 7));
console.log(combinationSumTwo1([1, 2, 7, 6, 1, 5, 10], 8));
console.log(combinationSumTwo1([1, 2, 3, 1, 1, 2], 4));
console.log(combinationSumTwo1([1, 1, 1, 2, 2, 3], 4));
