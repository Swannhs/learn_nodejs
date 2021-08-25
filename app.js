const express = require('express');
const app = express();
const port = 4000

app.get('/api/vi/tours', (req, res) => {
    res.send('Hello world');
})

app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`)
})
