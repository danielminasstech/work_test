const defaultConfig = require('./default.js');
const environment = process.env.NODE_ENV || 'development';
console.log("RUNNING ENVIRONMENT : " + environment);
const config = require('./'+environment);

function isObject(item) {
	return (item && typeof item === 'object' && !Array.isArray(item));
}

function mergeDeep(target, source) {
	let output = Object.assign({}, target);
	if (isObject(target) && isObject(source)) {
		Object.keys(source).forEach(key => {
			if (isObject(source[key])) {
				if (!(key in target))
					Object.assign(output, { [key]: source[key] });
				else
					output[key] = mergeDeep(target[key], source[key]);
			} else {
				Object.assign(output, { [key]: source[key] });
			}
		});
	}
	return output;
}



const finalConfig = mergeDeep(defaultConfig, config);

module.exports = finalConfig;
