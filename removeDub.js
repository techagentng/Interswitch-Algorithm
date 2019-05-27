// Extract duplicates from an array
//step 1: iterrate through the array
//declare and empty array
//check for duplicates with empty array (indexOf === -1)

myArray = [1,2,3,4,5,6,7,7,7,9,1,11,45]
let b = [];
let len = myArray.length
for(i=0; i<len; i++){
  if(b.indexOf(myArray[i]) === -1){
    b.push(myArray[i])
  }
}
console.log(b)

// Another method using step
let a = [1,1,2,3,4]
let bset = new Set(a)
console.log(bset);