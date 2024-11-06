function combinationSum(candidates, target) {
  let result = [];
  solver(0, candidates, [], target);

  function solver(i, arr, temp, sum) {
    // console.log(temp);
    if (i === arr.length) {
      return;
    }

    if (sum === 0) {
      result.push([...temp]);
      return;
    }

    if (sum < 0) {
      return;
    }

    //not including `i` th element
    solver(i + 1, arr, temp, sum);
    temp.push(arr[i]);
    solver(i, arr, temp, sum - arr[i]);
    temp.pop();
  }

  return result;
}

console.log(combinationSum([2, 3, 6, 7], 7));
