/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/

var maxSequence = (arr) => {
  // EDGE CASES
  if (arr.length === 0) {
    return 0;
  }
  if (arr.filter((item) => {
    if (item > 0) {
      return item
    }
  }).length === 0) {
    return 0;
  }

  // SOLUTION
  var largest = arr[0];

  var recurse = (array) => {
    if (array.length === 0) {
      return;
    }

    var currentLargest = 0;

    for (var i = 0; i < array.length; i++) {
      currentLargest += array[i];
      if (currentLargest > largest) {
        largest = currentLargest;
      }
    }
    array.shift();
    recurse(array);
  }
  recurse(arr);
  return largest;
}

// Test Suite
// var result = maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) //should be 6: [4, -1, 2, 1]
// console.log(result);