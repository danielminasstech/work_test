const config = {
  env: 'development',
  hostname: 'localhost',
  port: 3000,
  db: {
    url: 'localhost',
    db_name:'eze'
    // url: 'ezecluster-0ouhd.mongodb.net',
    // username: 'admin_eze',
    // password: 'wDrrdsidWuSCgKcZ',
    // db_name:'test'
  },
  mapbox: {
    endpoint: 'mapbox.places',
    access_token: 'pk.eyJ1IjoibWF0dGZpY2tlIiwiYSI6ImNqNnM2YmFoNzAwcTMzM214NTB1NHdwbnoifQ.Or19S7KmYPHW8YjRz82v6g',
    version: 'v5'
  }
};

module.exports = config;
