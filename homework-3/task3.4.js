function mul(...data) {
	let numberExist = false;
	let result = 1;
	data.forEach(function (val, ind, arr) {
		if ("number" == typeof val) {
			numberExist = true; 
			result *= val;  //result = result * val;
		}
	});
	return numberExist ? result : 0; 

}




	console.log(mul(1, "str", 2, 3, true));
	console.log(mul(null, "str", false, true));
	console.log(mul(5, 1, "two", true, 9));

