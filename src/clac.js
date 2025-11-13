// Legacy duplicate file retained for compatibility; aligned to lint rules
export const calc = {
	add: (a, b) => a + b,
	sub: (a, b) => a - b,
	mul: (a, b) => {
		if (a === 0) return 0;
		return a * b;
	},
	div: (a, b) => {
		if (b === 0) throw new RangeError('Division by zero');
		return a / b;
	},
};