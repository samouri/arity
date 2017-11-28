module.exports = function arity(fn) {
	const arityRegex = /arguments\[(\d+)\]/g;
	const namedParametersCount = fn.length;
	const fnString = fn.toString();
	let maxParamAccessed = 0;

	let match = arityRegex.exec(fnString);
	while (match) {
		maxParamAccessed = Math.max(maxParamAccessed, parseInt(match[1]) + 1);
		match = arityRegex.exec(fnString);
	}
	return Math.max(namedParametersCount, maxParamAccessed);
};
