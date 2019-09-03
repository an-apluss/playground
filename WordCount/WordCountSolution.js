function wordCount(arrayOfStrings) {
  var holder = {};
  holder[arrayOfStrings[0]] = 1;
  
  for (var i = 1; i < arrayOfStrings.length; i++) {
    if (holder.hasOwnProperty(arrayOfStrings[i])) {
      holder[arrayOfStrings[i]] += 1;
    } else {
      holder[arrayOfStrings[i]] = 1;
    }
  }

  return holder;
}

module.exports = wordCount;
