const arity = require('./index');

test('should work on standard functions', () => {
	function none() {}
	function one(arg1) {}
	function two(arg1, arg2) {}
	function three(arg1, arg2, arg3) {}
	function four(arg1, arg2, arg3, arg4) {}

	expect(arity(none)).toBe(0);
	expect(arity(one)).toBe(1);
	expect(arity(two)).toBe(2);
	expect(arity(three)).toBe(3);
	expect(arity(four)).toBe(4);
});

test('should work on arrow functions', () => {
	const none = () => {};
	const one = arg1 => {};
	const two = (arg1, arg2) => {};
	const three = (arg1, arg2, arg3) => {};
	const four = (arg1, arg2, arg3, arg4) => {};

	expect(arity(none)).toBe(0);
	expect(arity(one)).toBe(1);
	expect(arity(two)).toBe(2);
	expect(arity(three)).toBe(3);
	expect(arity(four)).toBe(4);
});

test('should work for a function that directly accesses arguments with a constant', () => {
	function six() {
		arguments[5];
	}

	expect(arity(six)).toBe(6);
});
