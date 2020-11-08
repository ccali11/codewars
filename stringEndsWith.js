function solution(str, ending){
  if (str.length === 0) {
    return false;
  }

  if (ending.length === 0) {
    return true;
  }

  str = str.split('');
  ending = ending.split('');

  while(ending.length > 0) {
    if (ending.pop() !== str.pop()) {
      return false;
    }
  }

  return true;
}