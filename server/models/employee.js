class Employee {
    constructor(data) {
      this.EMPLOYEE_ID = data.EMPLOYEE_ID;
      this.FIRST_NAME = data.FIRST_NAME;
      this.LAST_NAME = data.LAST_NAME;
      this.EMAIL = data.EMAIL;
      this.PHONE_NUMBER = data.PHONE_NUMBER;
      this.HIRE_DATE = data.HIRE_DATE;
      this.JOB_ID = data.JOB_ID;
      this.SALARY = data.SALARY;
      this.COMMISSION_PCT = data.COMMISSION_PCT;
      this.MANAGER_ID = data.MANAGER_ID;
      this.DEPARTMENT_ID = data.DEPARTMENT_ID;
    }
    
}

module.exports = Employee;