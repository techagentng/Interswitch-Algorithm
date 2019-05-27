// To sum up number range in an Array
//step1: find the min and maximum number
//step2: find range and loop through
//add total
// add total
function sumAll(arr) {
  maxNum = Math.max.apply(null, arr)
  minNum = Math.min.apply(null, arr)
  let total = 0;
  Range = maxNum - minNum
  for(i=1; i<Range; i++){
    total = total + minNum + i;
  }
  total = total + maxNum + minNum;
  return total;
}

sumAll([1, 4]);