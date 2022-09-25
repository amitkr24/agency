const express = require('express'); // include express
const router  = express.Router();   // router from express
const jwt     = require('jsonwebtoken'); //include jsonwebtoken
const passport = require('passport');  // include passport
const agency_controllers = require('../controllers/agency_controllers'); //agency controller added

//route for registering a new agency with jwt auth
router.post('/register', passport.authenticate('jwt', { session: false }), agency_controllers.createAgency); //register patient

router.get('/listing', agency_controllers.agencyList); // agency listing

module.exports = router;