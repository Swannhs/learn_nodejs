const Tour = require('../models/Tours');

// GET SINGLE TOUR
exports.getTour = async (req, res) => {
    try {
        const tour = await Tour.findOne({id: req.params.id});
        if (tour) {
            res.status(200).json({
                success: true,
                data: tour
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'Tour can\'t be found'
            })
        }

    } catch (err) {
        res.status(401).json({
            success: false,
            message: err
        })
    }
}

// DELETE SINGLE TOUR
exports.deleteTour = async (req, res) => {
    try {
        const delTour = await Tour.deleteOne({id: req.params.id})
        if (delTour){
            res.status(202).json({
                success: true,
                message: 'Tour is deleted'
            })
        }else {
            res.status(402).json({
                success: false,
                message: 'We don\'t find that tour'
            })
        }
    }catch (err) {
        res.status(400).json({message: err})
    }
}


// GET ALL TOURS
exports.getTours = async (req, res) => {
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

//CREATE NEW TOUR
exports.createTour = async (req, res) => {
    const tour = new Tour(req.body);
    try {
        const saveTour = await tour.save();
        res.status(201).json(saveTour);
    } catch (err) {
        res.status(400).json({message: err})
    }
}
