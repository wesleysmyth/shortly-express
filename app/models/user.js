var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var Bookshelf = require('bookshelf');
// var knex = require('knex');
var path = require('path');


var User = db.Model.extend({

  tableName: 'users',

  hasTimeStamp: true,

  initialize: function(obj) {
    var context = this;
    bcrypt.hash(obj.password, null, null, function(err, hash) {
      // Store hash in your password DB.
      context.set('password', hash);
      var hasUser = db.knex('users').where({username: obj.username}).select();
      console.log(!!hasUser, hasUser);
    });
  },

});

module.exports = User;
