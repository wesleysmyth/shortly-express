var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var Bookshelf = require('bookshelf');
// var knex = require('knex');
var path = require('path');

// var knex = require('knex')({
//   client: 'sqlite3',
//   connection: {
//     host: '127.0.0.1',
//     user: 'your_database_user',
//     password: 'password',
//     database: 'shortlydb',
//     charset: 'utf8',
//     filename: path.join(__dirname, '../db/shortly.sqlite')
//   },
//   pool: {
//     min: 0,
//     max: 7
//   }
// });


var User = db.Model.extend({

  initialize: function(obj) {
    var context = this;
    bcrypt.hash(obj.password, null, null, function(err, hash) {
      // Store hash in your password DB.
      context.set('password', hash);
      // console.log(hash);
    });

    // console.log(db.knex.raw);
    db.knex('users').select().then(function(rows) {
      // console.log(rows);
      console.log(rows);
    });
  }

});

module.exports = User;
