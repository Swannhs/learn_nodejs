const express = require('express');
const router = express.Router();


let tours = require('../public/data/tours-simple.json');

const getTours = (req, res) => {
    res.status(200).json({
        success: true,
        results: tours.length,
        data: {
            tours
        }
    })
}

const createTour = (req, res) => {
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({id: newId}, req.body)
    tours += {
        tours: newTour
    }
    res.status(201).json({
        status: 'success',
        data: {
            newTour
        }
    })
}
/* GET home page. */
router
    .route('/')
    .get(getTours)
    .post(createTour)

module.exports = router;
