// we need to handle http requests on this file, so we require express
const express = require('express');

// this is how we plug into the model, so we can request information from our 'database'
//const jokerModel = require('../models/joker');
// this handles any request to diffrent URLS

const router = express.Router();
// this handles any re

router.get('/:name', (req, res) => {
    const jokerData = jokerModel.getJoker(req.params.name);
    res.render('joker', jokerData);
});
// Export the route so its available on app.js
module.exports = router;