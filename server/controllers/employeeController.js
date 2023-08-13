const employeeModel = require('../models/employee');
const managerModel = require('../models/manager');
const jobModel = require('../models/job');
const {getAllEmployees, getManagers, getDepartments, getAllJobs} = require('../services/db');

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

const getHirePage = async (req, res, next) => {
  try {
    let managerList = await getManagers();
    let departmentList = await getDepartments();
    let jobList = await getAllJobs();

    res.render('index', {
      managerList
      ,departmentList
      ,jobList
      ,title: 'Hire Employee'
      , component: 'hire' })

  } catch (err){
    console.log(err);

  }

}



module.exports = { getEmployeeList, getHirePage };
