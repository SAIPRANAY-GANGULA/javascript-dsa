var subsets = function (nums) {
  let n = nums.length;
  let result = [];
  let subset = [];

  subsetsHelper(0);

  function subsetsHelper(index) {
    if (index === n) {
      result.push([...subset]);
      return;
    }

    //pick the curr element
    subset.push(nums[index]);
    subsetsHelper(index + 1);

    //Do not pick the current element
    subset.pop();
    subsetsHelper(index + 1);
  }

  return result;
};

console.log(subsets([1, 2, 3]));


var subsets1 = function(nums) {
    const result = [];
  
    function subsetsHelper(index, subset) {
      if (index === nums.length) {
        result.push([...subset]);  // Add a copy of the current subset
        return;
      }
      
      // Recurse by including the current element
      subsetsHelper(index + 1, [...subset, nums[index]]);
      
      // Recurse by excluding the current element
      subsetsHelper(index + 1, [...subset]);
    }
  
    subsetsHelper(0, []);
    return result;
  };
  
  console.log(subsets1([1, 2, 3]));
  

//   subsetsHelper(0, [])
//   /                    \
// subsetsHelper(1, [1])            subsetsHelper(1, [])
// /                \                  /               \
// subsetsHelper(2, [1, 2])   subsetsHelper(2, [1])   subsetsHelper(2, [2])   subsetsHelper(2, [])
// /          \              /          \           /          \             /          \
// subsetsHelper(3, [1,2,3]) subsetsHelper(3, [1,2]) subsetsHelper(3, [1,3]) subsetsHelper(3, [1]) subsetsHelper(3, [2,3]) subsetsHelper(3, [2]) subsetsHelper(3, [3]) subsetsHelper(3, [])
// |                 |              |               |              |               |              |               |
// [1, 2, 3]       [1, 2]         [1, 3]           [1]          [2, 3]           [2]            [3]             []


// subsetsHelper(0)
// /                \
// subsetsHelper(1)           subsetsHelper(1)
// /              \            /              \
// subsetsHelper(2)      subsetsHelper(2) subsetsHelper(2) subsetsHelper(2)
// /          \          /        \        /         \        /        \
// subsetsHelper(3) subsetsHelper(3) subsetsHelper(3) subsetsHelper(3) subsetsHelper(3) subsetsHelper(3) subsetsHelper(3) subsetsHelper(3)
// |              |            |           |           |            |           |            |
// [1, 2, 3]     [1, 2]       [1, 3]       [1]         [2, 3]       [2]         [3]           []
