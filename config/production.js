const config =  {
  env : 'production',
  hostname:  process.env.HOST,
  port:process.env.PORT,
  db:{
    url: 'ezecluster-0ouhd.mongodb.net',
    username: 'admin_eze',
    password: 'wDrrdsidWuSCgKcZ',
    port: '27017',
    db_name:'test'
    // url: process.env.DBHOST,
    // username:process.env.DBUSERNAME,
    // password:process.env.DBPASSWORD,
    // port: process.env.DBPORT
  },
  mapbox:{
    endpoint: 'mapbox.places',
    version: 'v5',
    access_token :'pk.eyJ1IjoibWF0dGZpY2tlIiwiYSI6ImNqNnM2YmFoNzAwcTMzM214NTB1NHdwbnoifQ.Or19S7KmYPHW8YjRz82v6g'
  }
};

module.exports= config;
