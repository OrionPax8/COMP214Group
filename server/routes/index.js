let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index');


router.get('/', indexController.getHomePage);
router.get('/home', indexController.getHomePage);
//router.get('/hire', indexController.getHirePage);
//router.get('/editjobs', indexController.getJobEditPage);
router.get('/createjob', indexController.getCreateJobPage);

module.exports = router;