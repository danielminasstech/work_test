const glob = require('glob')
const express = require('express');
const rootRouter = express.Router({mergeParams:true});
module.exports = () => {
	let file_arr = glob.sync('**/*.js',{cwd:`${__dirname}/`});
	let router_arr = [];
	file_arr = file_arr.filter( (path) => {
		let file = require(`./${path}`);
		if(Object.getPrototypeOf(file) === express.Router){
			router_arr.push(file);
			return true;
		} else {
			return false
		}
	});
	file_arr.map((file) => {
		let path_string = file.split('.js')[0];
		let path_substring = '/'+path_string.substring(0, path_string.lastIndexOf('/'));
		console.log('ACTIVE ROUTE => ' + path_substring);
		rootRouter.use(path_substring,require('./'+file));
	})
	return rootRouter;
}
