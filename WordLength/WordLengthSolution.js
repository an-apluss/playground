function wordLength(arr) {
  //code goes here
  var holder = new Map(), noDuplicate = [];
  noDuplicate[0] = arr[0].toString().toLowerCase();

  for (var i = 0; i < arr.length; i++) {
    var currentValueToLowercase = arr[i].toString().toLowerCase();

    for (var j = 0; j < noDuplicate.length; j++) {
      // this checks if current value in the arr already exist in noDuplicate 
      if ( currentValueToLowercase !== noDuplicate[j]) {
        noDuplicate.push(currentValueToLowercase);
      }
    }
  }

  for (var k = 0; k < noDuplicate.length; k++) {
    holder.set(noDuplicate[k], noDuplicate[k].length);
  }

  return holder;
}

module.exports = wordLength;