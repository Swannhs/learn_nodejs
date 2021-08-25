const express = require('express');
const app = express();
const port = 4000

const tours = require('./dev-data/data/tours-simple.json');

app.get('/api/vi/tours', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            tours: tours
        }
    })
})

app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`)
})
