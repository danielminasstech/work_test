const mongoose = require('mongoose');


const arrondisements = mongoose.Schema({
	name: {
		type: String,
	},

	code_arrondissement:{
		type: String,
		required:true
	},
	region: {
		type: String
	},
	geo_point_2d: {
		type: {
			type: String,
			enum: [ 'Point' ]
		},
		coordinates: {
			type: [Number]
		}
	},
	geo_shape: {
		type: {
			type: String,
			enum: [ 'Feature' ],
			required: true
		},
		geometry : {
			type: {
				type:String,
				enum: ['Polygon','MultiPolygon'],
				required:true
			},
			coordinates: {
				type: Array , // Array of arrays of arrays of numbers
				required: true
			}
		}
	},
	id_business_unit :{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'business_unit'
	}
},{
	timestamps:undefined
});

module.exports = mongoose.model('arrondisements', arrondisements);
