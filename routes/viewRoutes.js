const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', authController.isLoggedIn, viewsController.getOverview);
router.get('/tour', authController.isLoggedIn, viewsController.getTour);
router.get('/tour/:slug', authController.isLoggedIn, viewsController.getTour);

//login
router.get('/login', viewsController.getLoginForm);

module.exports = router;
