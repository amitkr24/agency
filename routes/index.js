const express = require('express');
const router  = express.Router();

// show this message in home url
console.log('router added');
router.get('/', function(req, res) {
    return res.json(400, {
        message: 'Please request the correct routes! Check "https://github.com/amitkr24/agency/blob/main/README.md" for documentation.'
    }
)});
router.use('/user', require('./user')); //routes to all user reuqest
router.use('/agency', require('./agency')); //routes to all agency reuqest
router.use('/client', require('./clients')); //routes to all agency reuqest


module.exports = router;