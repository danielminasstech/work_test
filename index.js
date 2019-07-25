process.env.NODE_ENV = 'production';
const express = require('express');
const app = express();
const config = require('./config');
const body_parser = require('body-parser');
require('./models')();
const morgan = require('morgan');
const router = require('./routes/api/')();
const env = process.env.NODE_ENV || 'development';
const db = require('./db')();


app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json({ type: 'application/*+json' }));
app.use(morgan('tiny'));

app.use('/api',router);


app.listen(config.port, function() {
	console.log('listening on 3000')
});
module.exports = app
