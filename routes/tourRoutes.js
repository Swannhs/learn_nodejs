const express = require('express');
const router = express.Router();
const tourController = require('../controller/tourController');

router
    .route('/')
    .get(tourController.getTours)
    .post(tourController.createTour)

module.exports = router;
