const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

router.get('/list', employeeController.getEmployeeList);
router.get('/list/:id', employeeController.getEmployeeList);
router.get('/hire', employeeController.getHirePage);

router.post('/hire', employeeController.postHirePage);
router.post('/list/:id', employeeController.postEmployeeListPage);

module.exports = router;
