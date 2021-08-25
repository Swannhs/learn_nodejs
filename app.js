const express = require('express');
const app = express();
const port = 4000
let tours = require('./dev-data/data/tours-simple.json');

app.use(express.json());

app.get('/api/vi/tours', (req, res) => {
    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tours: tours
        }
    })
})

app.post('/api/vi/tours', (req, res) => {
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
})

app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`)
})
