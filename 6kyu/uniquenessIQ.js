/*
Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)
*/

function iqTest(numbers){
  numbers = numbers.split(' ');
  var obj = {
    'odd' : 0,
    'even' : 0
  }
  var lookForOdd = true;

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
      obj['odd']++;
    } else {
      obj['even']++;
    }
  }

  if (obj['even'] < obj['odd']) {
    lookForOdd = false;
  }

  for ( var j = 0; j < numbers.length; j++) {
    if (lookForOdd) {
      if (numbers[j] % 2 === 1) {
        return j + 1;
      }
    } else {
      if (numbers[j] % 2 === 0) {
        return j + 1;
      }
    }
  }
}

// Test Suite
// console.log(iqTest("2 4 7 8 10")); // => 3 Third number is odd, while the rest of the numbers are even
// console.log(iqTest("1 2 1 1")); // => 2 Second number is even, while the rest of the numbers are odd