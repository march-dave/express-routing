'use strict';

var express = require('express');
var router = express.Router();

var Car = require('../models/car');

router.get('/', (req, res) => {

  Car.findAll(function(err, cars) {
    if(err) return res.status(400).send(err);
    res.send(cars);
  });
});

router.post('/', (req, res) => {
  Car.create(req.body, err => {
    if(err) return res.status(400).send(err);
    res.send();
  })
});

router.get('/:id', (req, res) => {

  var id = req.params.id;
  // console.log('id', id);

  Car.findById(id, function(err, cars) {
    if(err || !cars) return res.status(400).send(err || 'Car not found.');
    res.send(cars);
  });
});





// update
router.get('/', (req, res) => {

  Car.findAll(function(err, cars) {
    if(err) return res.status(400).send(err);
    res.send(cars);
  });
});

// delete
router.get('/', (req, res) => {

  Car.findAll(function(err, cars) {
    if(err) return res.status(400).send(err);
    res.send(cars);
  });
});



module.exports = router;
