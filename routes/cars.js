'use strict';

var express = require('express');
var router = express.Router();

// /api.clogs
router.get('/', (req, res) => {
  res.send('all cars');
});

module.exports = router;

// var car = { make: 'honda', model: 'civic', year: 2002 };

var Car = require('../models/car');


router.get('/', (req, res) => {
  // Car.findAll(function(err, cars) {
  //   if(err) return res.status(400).send(err);
  //
  //   res.send(cars);
  // })

  console.log('1111111111111111');

  Car.findAll(function(err, cars) {

    if(err) return res.status(400).send(err);
    res.send(cars);
  });
  // Car.findAll(myCB);
});



// router.get('/', (req, res) => {
//   res.send('all cars');
// });

router.post('/', (req, res) => {

  Car.create(req.body, err => {

    if(err) return res.status(400).send(err);
    res.send();

  })

});
module.exports = router;
