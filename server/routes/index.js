let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.getHomePage);
router.get('/home', indexController.getHomePage);
router.get('/hire', indexController.getHirePage);

// // Get route for home page
// router.get('/', function (req, res, next) {
//     res.render('index', {title: 'Home'});
// });

// router.get('/home', function (req, res, next) {
//     res.render('index', {title: 'Home'});
// });

// // Get route for hire page
// router.get('/hire', function (req, res, next) {
//     res.render('hire', {title: 'Hire Employee'});
// });

// // Get route for employee list page
// router.get('/list', function (req, res, next) {
//     res.render('list', {title: 'Employee List'});
// });

module.exports = router;