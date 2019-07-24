const http = require('http');
const request = require('request-promise');
const config = require('../config');
const default_options = {
	host: config.mapbox.url,
	access_token : config.mapbox.access_token,
	version : config.mapbox.version,
	endpoint : config.mapbox.endpoint
};


exports.findGeometryFromAddress = async (address)=> {
	let encoded_address = encodeURI(address) +'.json';
	let res = await request(default_options.host + 'geocoding/'+default_options.version+'/'+default_options.endpoint+ '/' +encoded_address +  '?' + 'access_token=' + default_options.access_token );
	console.log(res);
	res = JSON.parse(res);
	if(res  && res.type && res.type === 'FeatureCollection') {
		let features = res.features;
		features = features.filter(feature => (feature.properties.accuracy === 'point'));
		if (features && features[0]) {
			return features[0].geometry;
		}
	}
	return null
};
