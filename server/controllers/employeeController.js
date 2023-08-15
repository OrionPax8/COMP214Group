const employeeModel = require('../models/employee');
const managerModel = require('../models/manager');
const jobModel = require('../models/job');
const employee = employeeModel.Employee;
const {getAllEmployees, getManagers, getDepartments, getAllJobs, insertEmployee, updateEmployee} = require('../services/db');
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

  insertEmployee(newEmployee);
}

const postEmployeeListPage = async (req,res,next) =>{

  let id = req.params.id;

  console.log(req.body);
  console.log(req.body.salaryField);


  

  let employeeToUpdate = new Employee({
    EMPLOYEE_ID: id,
    SALARY: req.body.salaryField,
    PHONE_NUMBER: req.body.phoneField,
    EMAIL: req.body.emailField
  })

  updateEmployee(employeeToUpdate);

  
}



module.exports = { getEmployeeList, getHirePage, postHirePage, postEmployeeListPage };
