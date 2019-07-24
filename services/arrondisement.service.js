const mongoose = require('mongoose');
const Arrondisement = mongoose.model('arrondisements');
const BusinessUnit = mongoose.model('business_units');
//Ile De France : 5d38303213986d5a80d5978f
// Autre : 5d38302713986d5a80d5978e
//
exports.findByGeometry=  async (geometry) =>{
	return  Arrondisement.findOne().where({ "geo_shape.geometry":
			{
				$geoIntersects: { $geometry:geometry }
			}
	});
}


