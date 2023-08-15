const employeeModel = require('../models/employee');
const managerModel = require('../models/manager');
const jobModel = require('../models/job');
const employee = employeeModel.Employee;
const {getAllEmployees, getManagers, getDepartments, getAllJobs, insertEmployee} = require('../services/db');
const Employee = require('../models/employee');

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

const postHirePage = async (req, res, next) =>{

  let newEmployee = new Employee({
    FIRST_NAME: req.body.firstName,
    LAST_NAME: req.body.lastName,
    EMAIL: req.body.email,
    PHONE_NUMBER: req.body.phone,
    HIRE_DATE: req.body.hireDate,
    JOB_ID: req.body.jobID,
    SALARY: req.body.salary,
    MANAGER_ID: req.body.managerID,
    DEPARTMENT_ID: req.body.deptID,
  });

  //console.log(newEmployee);
  insertEmployee(newEmployee);
}



module.exports = { getEmployeeList, getHirePage, postHirePage };
