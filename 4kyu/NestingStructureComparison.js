/* PASSING ALL TESTS
Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.

For example:

 // should return true
[ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );
[ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );

 // should return false
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );

// should return true
[ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] );

// should return false
[ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );
For your convenience, there is already a function 'isArray(o)' declared and defined that returns true if its argument is an array, false otherwise.

*/

sameStructureAs = (array, other) => {
  if (array.length !== other.length) {
    return false;
  }

  for (var i = 0; i < other.length; i++) {
    if (Array.isArray(other[i])) {
      if (Array.isArray(array[i])) {
        return sameStructureAs(array[i], other[i]);
      } else {
        return false;
      }
    } else if (Array.isArray(array[i])) {
        return false;
    }
  }
  return true;
};

// Test Suite
// console.log(sameStructureAs( [ 1, 1, 1 ], [ 2, 2, 2 ] )) // true
// console.log(sameStructureAs( [ 1, [ 1, 1 ] ], [ 2, [ 2, 2 ] ] )) // true
// console.log(sameStructureAs( [ [ [ ], [ ] ] ], [ [ [ ], [ ] ] ] )) // true
// console.log(sameStructureAs( [ 1, [ 1, 1 ] ], [ [ 2, 2 ], 2 ] ))// false
// console.log(sameStructureAs( [ 1, [ 1, 1 ] ], [ [ 2 ], 2 ] ))// false
// console.log(sameStructureAs( [ [ [ ], [ ] ] ], [ [ 1, 1 ] ] ))// false