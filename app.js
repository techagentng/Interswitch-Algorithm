//The function checks for duplicates in an array
//Method1: Nested for loop

const len = myArray.length;
function arrDuplicates(){
	this.method1 = function(myArray){
		for(let i=0; i<len; i++){
			for(j=i; j<len; j++){
				if(i !=j && myArray[i] == myArray[j]){
					return true;
				}
			}
		}
	  return false;
	}
	
	this.method2 = function(myArray){
		for(i=0; i<len; i++){
			let count = [];
			if(count[myArray[i]] === undefined){
				count[myArray[i]] = 1;
			}else{
				return true;
			}
		}
	}return false;
}
