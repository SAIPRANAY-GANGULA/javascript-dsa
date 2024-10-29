function fibanocci(index) {
  if (index === 0) return 0;
  else if (index === 1) return 1;
  else {
    return fibanocci(index - 1) + fibanocci(index - 2);
  }
}

console.log(fibanocci(6));
console.log(fibanocci(4));

// 0 1 1 2 3 5 8
// 0 1 2 3 4 5 6

// Time Complexity: O(2^N)
// { This problem involves two function calls for each iteration
// which further expands to 4 function calls and so on which makes worst-case time complexity
// to be exponential in nature }.

// Space Complexity: O(N)
// { At maximum there could be N function calls waiting in the recursion stack
// since we need to calculate the Nth Fibonacci number for which we also need to
// calculate (N-1) Fibonacci numbers before it }.
