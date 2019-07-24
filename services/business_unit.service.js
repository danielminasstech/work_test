const mongoose = require('mongoose');
const BusinessUnit = mongoose.model('business_units');

exports.findById =  async (id) =>{
	return  BusinessUnit.findOne({_id:id});
};

exports.create =  async (business_unit) =>{
	return  BusinessUnit.create(business_unit);
};

exports.update = async (id,name) => {
	let business_unit = await BusinessUnit.findOne({_id:id});
	business_unit.name = name;
	return await business_unit.save();
};

exports.delete = async (id) => {
	return  await BusinessUnit.deleteOne({_id:id});
};
