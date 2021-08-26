const mongoose = require('mongoose');

const tourSchema = mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    duration: {
        type: Number
    },
    maxGroupSize: {
        type: Number
    },
    difficulty: {
        type: String
    },
    ratingAverage: {
        type: Number
    },
    ratingQuantity: {
        type: Number
    },
    price: {
        type: Number
    },
    summary: {
        type: String
    },
    description: {
        type: String
    },
    imageCover: {
        type: String
    },
    images: [
        typeof String
    ],
    startDates: [
        typeof String
    ]
})

module.exports = mongoose.model('Tours', tourSchema);
