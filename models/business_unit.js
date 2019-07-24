const mongoose = require('mongoose');


const business_unit = mongoose.Schema({
	name: {
		type: String,
		required: true
	}
},{
	timestamps:null
});

module.exports = mongoose.model('business_units', business_unit);
