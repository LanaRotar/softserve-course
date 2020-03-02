
function  digitSum(k) {
	if (k == 0) {
	    return 0;	
	} else {
		return k + digitSum(k - 1)
	}
 }
 var res = digitSum;
console.log(digitSum(10));




