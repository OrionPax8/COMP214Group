let express = require('express');
let router = express.Router();

// Get route for home page
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Home'});
});

router.get('/home', function (req, res, next) {
    res.render('index', {title: 'Home'});
});

// Get route for hire page
router.get('/hire', function (req, res, next) {
    res.render('hire', {title: 'Hire Employee'});
});

// Get route for employee list page
router.get('/emp-list', function (req, res, next) {
    res.render('emp-list', {title: 'Employee List'});
});

module.exports = router;