//COMPLETE
function solution(string) {
  var resultArr = [];

  string.split('').forEach((char) => {
    if (switcher(char)) {
      resultArr.push(' ');
    }
    resultArr.push(char);
  });

  var resultStr = resultArr.join('');
  return resultStr;
}

function switcher (char) {
  if (char !== char.toLowerCase()) {
    return true;
  }
  return false;
}