const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

router.get('/', jobController.getJobList);
router.get('/editjobs', jobController.getJobEditPage);

module.exports = router;
