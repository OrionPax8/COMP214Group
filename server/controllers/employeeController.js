const employeeModel = require('../models/employee');
const managerModel = require('../models/manager');
const jobModel = require('../models/job');
const employee = employeeModel.Employee;
const {getAllEmployees, getManagers, getDepartments, getAllJobs, insertEmployee, updateEmployee, verifySalary, getSalaryMessage} = require('../services/db');
const Employee = require('../models/employee');

const getEmployeeList = async (req, res, next) => {
  try {

    let employeeList = await getAllEmployees();
    res.render('index', {
      employeeList,
      messages: req.flash(),
      title: 'Employee List'
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
      ,messages: req.flash()
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
  try{
    let salaryTest = await getSalaryMessage(newEmployee);

    if(!salaryTest){
    await insertEmployee(newEmployee);
      req.flash('success', 'Hire Successful!');
      res.redirect('/employee/hire');
    } else {
      req.flash('error', salaryTest);
      res.redirect('/employee/hire');
    }
  }
  catch(error){
    console.log(error);
  }

  
}

const postEmployeeListPage = async (req,res,next) =>{

  let id = req.params.id;

  

  let employeeToUpdate = new Employee({
    EMPLOYEE_ID: id,
    SALARY: req.body.salaryField,
    PHONE_NUMBER: req.body.phoneField,
    EMAIL: req.body.emailField,
    JOB_ID: req.body.jobIDField
  })

  try{
    let salaryTest = await getSalaryMessage(employeeToUpdate);

    if(!salaryTest){
    await updateEmployee(employeeToUpdate);
    req.flash('success', 'Update Successful!');
    res.redirect('/employee/list');
    } else {
      req.flash('error', salaryTest);
      res.redirect('/employee/list');      
    }
  }
  catch(error){
    console.log(error);
  }
  
}



module.exports = { getEmployeeList, getHirePage, postHirePage, postEmployeeListPage };
