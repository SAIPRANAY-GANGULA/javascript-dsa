function slidingWindowMaximum(arr, k) {
  let n = arr.length;
  let ans = [];
  let doubleEndedQueue = []; //storing indexes of elements which can be maximum

  //calculate maximum element for first window(first k elements)
  doubleEndedQueue.push(0);
  for (let i = 1; i < k; i++) {
    //if element back of my deck is less than current element(i) then pop those elements which are back of the deck as they are useless
    while (
      doubleEndedQueue.length > 0 &&
      arr[doubleEndedQueue[doubleEndedQueue.length - 1]] < arr[i]
    ) {
      doubleEndedQueue.pop();
      console.log('de',doubleEndedQueue)
    }
    doubleEndedQueue.push(i);
    console.log('de',doubleEndedQueue)
  }
  ans.push(arr[doubleEndedQueue[0]]);

  // calaculating maximum for remaining window
  for (let j = k; j < n; j++) {
    const startingPoint = j - k + 1;
    //if element is not part of current window then remove it from start
    while (doubleEndedQueue.length > 0 && doubleEndedQueue[0] < startingPoint) {
      doubleEndedQueue.shift();
      console.log('de',doubleEndedQueue)
    }

    //if element back of my deck is less than current element(i) then pop those elements which are back of the deck as they are useless
    while (
      doubleEndedQueue.length > 0 &&
      arr[doubleEndedQueue[doubleEndedQueue.length - 1]] < arr[j]
    ) {
      doubleEndedQueue.pop();
      console.log('de',doubleEndedQueue)
    }
    doubleEndedQueue.push(j);
    console.log('de',doubleEndedQueue)
    ans.push(arr[doubleEndedQueue[0]]);
  }

  return ans;
}

console.log(slidingWindowMaximum([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(slidingWindowMaximum([1, 3, -1, -3, 5, 3, 6, 7], 4));
