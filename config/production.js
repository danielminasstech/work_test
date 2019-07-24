const config =  {
  env : 'production',
  hostname:  process.env.HOST,
  port:process.env.PORT,
  db:{
    url: 'ezecluster-0ouhd.mongodb.net',
    username: 'admin_eze',
    password: 'wDrrdsidWuSCgKcZ',
    port: '',
    db_name:'business'
    // url: process.env.DBHOST,
    // username:process.env.DBUSERNAME,
    // password:process.env.DBPASSWORD,
    // port: process.env.DBPORT
  },
  mapbox:{
    endpoint: 'mapbox.places-permanent',
    version: 'v5'
  }
};

module.exports= config;
