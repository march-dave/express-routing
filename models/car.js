'use strict';

var db = require('../config/db');
var uuid = require('uuid');

db.run('CREATE TABLE IF NOT EXISTS cars(id text, make text, model text, year integer)');

exports.create = function(car, cb) {

  db.serialize(function() {
    var stmt = db.prepare("INSERT INTO cars VALUES (?, ?, ?, ?)");
    stmt.run(uuid(), car.make, car.model, car.year);
    stmt.finalize(cb);
    // stmt.finalize(function(err) {
    //   cb(err);
    // });
  })
};


// exports.findAll = function(cb) {
//
// // cb === function
//   // function dbCarsCB(err, cars) {
//   //   cb(err, cars)
//   // }
//   db.all('SELECT * FROM cars', cb);
// };

exports.findAll = function(cb) {
  db.all('SELECT * FROM cars', function(err, cars) {
    cb(err, cars);
  });
};
