const router = require('express').Router();
const dashboardController = require('../controllers/dashboard.controller');

router.get('/', dashboardController.dash)

module.exports = router