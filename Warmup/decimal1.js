function convertBinary(number) {
  var n = 0;
  var binaryArr = [];

  var difference = Math.pow(2, n);

  //find out how many digits are needed
  while (difference <= number){
    n++;
    difference = Math.pow(2, n);
    binaryArr.push(0);
  }

  n--;

  while(number > 0) {
    if (Math.pow(2, n) <= number) {
      binaryArr[n] = 1;
      number-= Math.pow(2, n);
    }
    n--;
  }

  return binaryArr.reverse().join("") * 1
}