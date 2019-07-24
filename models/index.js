const glob = require('glob')
const express = require('express');
const mongoose = require('mongoose');


module.exports = () => {
	let file_arr = glob.sync('*.js',{cwd:`${__dirname}/`});
	let models_arr = [];
	file_arr.map( (path) => {
		require(`./${path}`);
	});
}
