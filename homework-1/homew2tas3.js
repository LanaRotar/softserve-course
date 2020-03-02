// tasks 3

size = process.argv.length - 2;
if (size !== 2) {
	console.log("number of parametrs invalid: " + size + " : two params needed");
} else {
	var firstSide;
	var secondSide;
	process.argv.forEach(function (val, index, array) {
	  val = parseInt(val);
	  if (index > 1 && typeof val === 'number' && val > 0) {
	  	 if (index === 2) {
	  	 	firstSide = val;
	  	 } else {
	  	 	secondSide = val;
	  	 }
	  }
	});
	p = firstSide * 2 + secondSide * 2 ;
	// calculate p
	console.log("P = " + p);
	s = secondSide * firstSide;
	// calculate 
	console.log("S = " + s);
}