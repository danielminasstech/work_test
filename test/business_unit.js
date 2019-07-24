//During the test the env variable is set to test
process.env.NODE_ENV = 'test';


let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
const request = require('request-promise');
chai.should();
chai.use(chaiHttp);
describe('BusinessUnit', () => {
	describe('/GET business_unit by address', () => {
		it('it should GET one business unit', (done) => {
			let address = "10 Boulevard Arago, 75013 Paris";
			chai.request("http://127.0.0.1:3000")
				.get('/api/v1/business_unit?address='+address)
				.end((err, res) => {
					console.log(JSON.stringify(err));
					if(res){
						console.log(JSON.stringify(res));
						res.should.have.status(200);
						res.body.should.be.a('object');
					}
					done();
				});
		}).timeout(5000);
	});

});
