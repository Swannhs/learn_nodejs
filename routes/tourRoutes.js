const express = require('express');
const router = express.Router();
const Tour = require('../models/Tours');


const getTours = async (req, res) => {
    try {
        const tours = await Tour.find();
        res.status(200).json({
            success: true,
            results: tours.length,
            data: {
                tours
            }
        });
    } catch (err) {
        res.status(400).json({message: err})
    }
}

const createTour = async (req, res) => {
    const data = req.body;
    const tour = new Tour({
        id: data.id,
        name: data.name,
        duration: data.duration,
        maxGroupSize: data.maxGroupSize,
        difficulty: data.difficulty,
        ratingsAverage: data.ratingsAverage,
        ratingsQuantity: data.ratingsQuantity,
        price: data.price,
        summary: data.summary,
        description: data.description,
        imageCover: data.imageCover,
        images: data.images,
        startDates: data.startDates
    })
    try {
        const saveTour = await tour.save();
        res.status(201).json(saveTour);
    } catch (err) {
        res.status(400).json({message: err})
    }
}

router
    .route('/')
    .get(getTours)
    .post(createTour)

module.exports = router;
