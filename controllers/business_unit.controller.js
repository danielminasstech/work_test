const mongoose = require('mongoose');
const arrondisement_service = require('../services/arrondisement.service');
const business_unit_service = require('../services/business_unit.service');
const mapbox = require('../libs/mapbox');


exports.findByAddress = async (req, res) =>{
	try{
		let address = req.query.address;
		if(address){
			let geometry = await mapbox.findGeometryFromAddress(address);
			if(geometry){
				let arrondisements = await arrondisement_service.findByGeometry(geometry);
				let business_unit = await business_unit_service.findById(arrondisements.id_business_unit);
				return res.status(200).json(business_unit);
			}
			return res.status(204).send('Address not found, please provide a full address with format ( ## avenue de ####### 94700 ) ')
		} else {
			return res.status(404).send('Address required with format ( ## avenue de ####### 94700 ) ')
		}
	} catch(err){
		return res.status(500).json(err);
	}
}

exports.create = async(req,res) => {
	try {
		let business_unit = await business_unit_service.create({
			name: req.body.name
		});
		return res.status(200).json(business_unit);
	} catch(err) {
		let error = new Error("Error: " + err);
		error.status = 500;
		return res.status(500).json(error);
	}
}

exports.update =async function (req, res) {
	try {
		let business_unit = await business_unit_service.update(req.params.id,req.params.name);
		return res.status(200).json(business_unit);
	} catch(err) {
		let error = new Error("Error: " + err);
		error.status = 500;
		return res.status(500).json(error);
	}
}

exports.delete =async function (req, res) {
	try {
		let business_unit = await business_unit_service.delete(req.params.id);
		return res.status(200).json(business_unit);
	} catch(err) {
		let error = new Error("Error: " + err);
		error.status = 500;
		return res.status(500).json(error);
	}
}
