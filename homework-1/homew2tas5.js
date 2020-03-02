function format(data, type) {
	if (type === "number") {
		format = function format () {
			return parseInt(data);
		}
	}
	if (type === "boolean") {
		format = function format () {
		        return Boolean(data); 
		}
	}
	if (type === "string") {
		format = function format () {
			return data.toString;
		}
	}

	
}
var originFormat = format;
format("1", "number");
console.log(format()); // 1
console.log(typeof format()); // "number

originFormat("Hello", "boolean");
console.log(format()); // true
console.log(typeof format()); // "boolean"

originFormat(true, "string");
console.log(format()); // "true"
console.log(typeof format()); // "string"
