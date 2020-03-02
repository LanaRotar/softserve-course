'use strict'
let i = 0;
function createArrayIterator (array) {
	return function (){
		return array [i++];
	} 
}


var arr = [5, 3, 7];
var itr = createArrayIterator(arr);
console.log(itr()); 
console.log(itr());
console.log(itr());
console.log(itr());