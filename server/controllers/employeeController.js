const employeeModel = require('../models/employee');
const {getAllEmployees} = require('../services/db');

const getEmployeeList = async (req, res, next) => {
  try {
    let employeeList = await getAllEmployees();
    res.render('employees', {
      employeeList
      ,title: 'Employee List' })

  } catch (err){
    console.log(err);

  }

}

module.exports = { getEmployeeList };
