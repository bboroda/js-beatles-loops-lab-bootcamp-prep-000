function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for (var i = 0; i < musicians.length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray;
}

function johnLennonFacts(facts) {
  var newArray=[];
  while (facts.length > 0) {
    newArray.unshift(facts.pop()+'!!!')
  }
  return newArray;
}

function iLoveTheBeatles(number) {
  var newArray=[];
  do {
    newArray.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return newArray;
}
