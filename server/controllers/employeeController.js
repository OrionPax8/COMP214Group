const employeeModel = require('../models/employee');
const {getAllEmployees} = require('../services/db');

const getEmployeeList = async (req, res, next) => {
  try {
    let employeeList = await getAllEmployees();
    res.render('index', {
      employeeList
      ,title: 'Employee List'
      , component: 'employees' })

  } catch (err){
    console.log(err);

  }

}

module.exports = { getEmployeeList };
