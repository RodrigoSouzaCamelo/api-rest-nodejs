const db = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'admin',
      password : 'admin',
      database : 'world'
    }
});

module.exports = db;