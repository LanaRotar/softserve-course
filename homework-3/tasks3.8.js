function format(s, ...v) {
	let reversString;
	for (var i = s.length - 1; i >= 0; i--) {
		reversString = reversString + s[i] + v[i-1];
	}
	return reversString;
} 


let res1 = format`${1} + ${2} = ${3}`; // 3 = 2 + 1
console.log(res1);
let res2 = format`Привет ${"Мир "}`; // "Мир Привет "
console.log(res2);
let res3 = format`left${"<->"}right`; // "right<->left"
console.log(res3);