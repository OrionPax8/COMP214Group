// https://www.oracle.com/database/technologies/appdev/quickstartnodeonprem.html
const oracledb = require('oracledb');
const employeeModel = require('../models/employee');
const jobModel = require('../models/job');
const managerModel = require('../models/manager');
const departmentModel = require('../models/department');

const dbConfig = {
    user: 'COMP214_m23_er_78',
    password: 'password',
    connectString: '199.212.26.208:1521/SQLD'
  };

  let binds = [];
  let resultSet = true;
  let options = { resultSet, outFormat: oracledb.OUT_FORMAT_OBJECT };

 async function getAllEmployees() {
    let connection;

    try {
        connection = await oracledb.getConnection(dbConfig);

        const sql = `SELECT * FROM HR_EMPLOYEES`;
        const result = await connection.execute(sql, binds, options);
        const rs = result.resultSet;
        const employeeList = [];
        let row;

        while ((row = await rs.getRow())) {
            employeeList.push(new employeeModel(row));
            }
        await rs.close();
      return employeeList;
    } catch (error) {
      console.error('Error retrieving employees:', error);
      throw error;
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (error) {
          console.error('Error closing connection:', error);
        }
      }
    }
  }

  async function getAllJobs() {
    let connection;

    try {
        connection = await oracledb.getConnection(dbConfig);

        const sql = 'SELECT * FROM HR_JOBS';
        const result = await connection.execute(sql, binds, options);
        const rs = result.resultSet;
        const jobList = [];
        let row;

        while ((row = await rs.getRow())) {
          jobList.push(new jobModel(row));
            }
        await rs.close();
      return jobList;
    } catch (error) {
      console.error('Error retrieving jobs:', error);
      throw error;
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (error) {
          console.error('Error closing connection:', error);
        }
      }
    }
  }

  async function getManagers() {
    let connection;

    try {
        connection = await oracledb.getConnection(dbConfig);

        const sql = 'SELECT EMPLOYEE_ID, FIRST_NAME, LAST_NAME FROM HR_EMPLOYEES';
        const result = await connection.execute(sql, binds, options);
        const rs = result.resultSet;
        const managerList = [];
        let row;

        while ((row = await rs.getRow())) {
          managerList.push(new managerModel(row));
            }
        await rs.close();
      return managerList;
    } catch (error) {
      console.error('Error retrieving managers:', error);
      throw error;
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (error) {
          console.error('Error closing connection:', error);
        }
      }
    }
  }

  async function getDepartments() {
    let connection;

    try {
        connection = await oracledb.getConnection(dbConfig);

        const sql = 'SELECT DEPARTMENT_ID, DEPARTMENT_NAME FROM HR_DEPARTMENTS';
        const result = await connection.execute(sql, binds, options);
        const rs = result.resultSet;
        const departmentList = [];
        let row;

        while ((row = await rs.getRow())) {
          departmentList.push(new departmentModel(row));
            }
        await rs.close();
      return departmentList;
    } catch (error) {
      console.error('Error retrieving departments:', error);
      throw error;
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (error) {
          console.error('Error closing connection:', error);
        }
      }
    }
  }

  async function insertEmployee(employee) {
    let connection;
    let hireDate = new Date(employee.HIRE_DATE);
    let salary = +employee.SALARY;
    let managerID = +employee.MANAGER_ID;
    let deptID = +employee.DEPARTMENT_ID;

    try {
        connection = await oracledb.getConnection(dbConfig);

        const result = await connection.execute(
          `BEGIN
            Employee_hire_sp(:p_first_name, :p_last_name, :p_email, :p_salary, :p_hire_date, :p_phone, :p_job_id, :p_manager_id, :p_department_id);
          END;`,
          {// bind variables
            p_first_name: {dir: oracledb.BIND_IN, val: employee.FIRST_NAME, type:oracledb.STRING},
            p_last_name: {dir: oracledb.BIND_IN, val: employee.LAST_NAME, type:oracledb.STRING},
            p_email: {dir: oracledb.BIND_IN, val: employee.EMAIL, type:oracledb.STRING},
            p_salary: {dir: oracledb.BIND_IN, val: salary, type:oracledb.NUMBER},
            p_hire_date: {dir: oracledb.BIND_IN, val: hireDate, type:oracledb.DATE},
            p_phone: {dir: oracledb.BIND_IN, val: employee.PHONE_NUMBER, type:oracledb.STRING},
            p_job_id: {dir: oracledb.BIND_IN, val: employee.JOB_ID, type:oracledb.STRING},
            p_manager_id: {dir: oracledb.BIND_IN, val: managerID, type:oracledb.NUMBER},
            p_department_id: {dir: oracledb.BIND_IN, val: deptID, type:oracledb.NUMBER}
          }
        );

        console.log("Rows inserted " + result.rowsAffected);
      } catch (error) {
        console.error('Error inserting employee:', error);
        throw error;
      } finally {
        if (connection) {
          try {
            await connection.close();
          } catch (error) {
            console.error('Error closing connection:', error);
          }
        }
      }
  }

  async function createJob(job){
    let connection;
    let minSal = job.MIN_SALARY;
    

    try {
      connection = await oracledb.getConnection(dbConfig);

      const result = await connection.execute(
        `BEGIN
          new_job(:p_job_id, :p_job_title, :p_min_salary);
        END;`,
        {// bind variables
          p_job_id: {dir: oracledb.BIND_IN, val: job.JOB_ID, type:oracledb.STRING},
          p_job_title: {dir: oracledb.BIND_IN, val: job.JOB_TITLE, type:oracledb.STRING},
          p_min_salary: {dir: oracledb.BIND_IN, val: minSal, type:oracledb.NUMBER},
        }
      );

      console.log("Job Created " + result.jobTitle);
    } catch (error) {
      console.error('Error creating job:', error);
      throw error;
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (error) {
          console.error('Error closing connection:', error);
        }
      }
    }
  }



async function updateEmployee(employee){
  let connection;
  let salary = +employee.SALARY;
  let empID = +employee.EMPLOYEE_ID;
  try {
    connection = await oracledb.getConnection(dbConfig);

    const result = await connection.execute(
      `BEGIN
        update_employee(:p_employee_id, :p_salary, :p_email, :p_phone)
      END;`,
      {// bind variables
        p_employee_id: {dir: oracledb.BIND_IN, val: empID, type: oracledb.NUMBER},
        p_salary: {dir: oracledb.BIND_IN, val: salary, type: oracledb.NUMBER},
        p_email: {dir: oracledb.BIND_IN, val: employee.EMAIL, type:oracledb.STRING},
        p_phone: {dir: oracledb.BIND_IN, val: employee.PHONE_NUMBER, type:oracledb.STRING}
      });
    console.log("Employees Updated: " + result.rowsAffected);
      } catch (error) {
        console.error('Error inserting employee:', error);
        throw error;
      } finally {
        if (connection) {
          try {
            await connection.close();
          } catch (error) {
            console.error('Error closing connection:', error);
          }
        }
      }
  }

module.exports = { getAllEmployees, getAllJobs, getManagers, getDepartments, insertEmployee, updateEmployee, createJob };
