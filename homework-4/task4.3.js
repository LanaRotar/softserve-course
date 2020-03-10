var salaries = {  John: 100,   Bill: 300,   Mike: 250};
function maxSalary(salari) {
	max = 0;
	for(const [name, salary] of Object.entries(salari)){
		if (max < salary) {
			max = salary;
		}
	}
	return max;
}
var salaries = {   Cris: 150,   Brain: 600,   John: 300,   Steve: 400,   Bill: 50};
console.log(maxSalary(salaries));
console.log(maxSalary(salaries));