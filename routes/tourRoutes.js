const express = require('express');
const router = express.Router();
const tourController = require('../controller/tourController');

router
    .route('/')
    .get(tourController.getTours)
    .post(tourController.createTour);

router
    .route('/:id')
    .get(tourController.getTour)
    .delete(tourController.deleteTour)
    .put(tourController.updateTour)
module.exports = router;
