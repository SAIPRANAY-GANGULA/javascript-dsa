// https://youtu.be/IexN60k62jo?si=QOSvBHSWFdBl-pYt
function mergeIntervals(intervals) {
  intervals.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  let ans = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const lastInterval = ans[ans.length - 1];
    if (currentInterval[0] <= lastInterval[1]) {
      const newInterval = [lastInterval[0], Math.max(currentInterval[1], lastInterval[1])];
      ans.pop();
      ans.push(newInterval);
    } else {
      ans.push(intervals[i]);
    }
  }

  return ans;
}

console.log(
  mergeIntervals([
    [9, 11],
    [2, 5],
    [1, 3],
    [5, 7],
    [12, 13],
  ])
);

console.log(
  mergeIntervals([
    [1, 3],
    [15, 18],
    [2, 6],
    [8, 10],
    [8, 9],
    [9, 11],
    [2, 4],
    [16, 17],
  ])
);
