//canBalance function takes an array of numbers and returns true or false based on the following conditions
//It returns true if the array can be split at any point with the sum of the numbers on one side equal to the sum of the numbers at the other side
// For example, given the array [1, 2, 3, 4, 5, 5], it will return true as the array can be split into [1, 2, 3, 4] and [5, 5] giving a sum of 10 on each side.


function canBalanceController(array) {
  //Type your solutions here
  var leftSideSum = 0;
  var  leftSideValueCounter = 0;

  for (var i = 0; i < array.length; i++) {
    leftSideSum += array[i];
    leftSideValueCounter++;
    
    var rightSideSum = 0
    for (var k = i + 1; k < array.length; k++) {
      rightSideSum += array[k];
    }

    if (leftSideSum == rightSideSum) {
      return {
        rightSideLength: (array.length - leftSideValueCounter),
        leftSideLength: leftSideValueCounter
      }
    }
  }

  return false;
}

function canBalance(array) {
  var result = canBalanceController(array);

  if (result && result.leftSideLength != array.length) {
    return [result.leftSideLength, result.rightSideLength];
  } else {
    return -1;
  }
} 

module.exports = canBalance;