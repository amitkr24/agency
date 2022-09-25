const express  = require('express');
const router   = express.Router();
const jwt      = require('jsonwebtoken'); //jwt web token added
const passport = require('passport'); // passort added
const client_controller = require('../controllers/client_controllers'); // client controller added

router.post('/:id/create', passport.authenticate('jwt', { session: false }), client_controller.clientCreate); //client created

router.get('/:id/clients', client_controller.clientList); // client listing
router.get('/:id/update', client_controller.clientUpdate); // client update data

module.exports = router;