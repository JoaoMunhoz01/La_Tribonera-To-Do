export function today(): Date {
	return new Date();
}

export function nextDay() {
	let tomorrow = new Date();
	let day = tomorrow.getDate();
	tomorrow.setDate(day + 1);
	return tomorrow;
}

export function nextNDays(n : number) : Date {
	let result = new Date();
	let day = result.getDate();
	result.setDate(day + n);
	return result;
}
