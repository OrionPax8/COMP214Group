// https://www.oracle.com/database/technologies/appdev/quickstartnodeonprem.html
const oracledb = require('oracledb');
const employeeModel = require('../models/employee');
const dbConfig = {
    user: 'COMP214_m23_er_78',
    password: 'password',
    connectString: '199.212.26.208:1521/SQLD'
  };

  let binds = [];
  let resultSet = true;
  let options = { resultSet, outFormat: oracledb.OUT_FORMAT_OBJECT };


// async function connectDB() {
//     let connection;
//     let sql = 'SELECT * FROM HR_EMPLOYEES';

//     try {
//         connection = await oracledb.getConnection(dbConfig);
//         console.log("Successfully connected to Oracle Database");
//         result = await connection.execute(sql, binds, options);
//         const rs = result.resultSet;
//         let row;
//         while ((row = await rs.getRow())) {
//             //console.log(row);
//         }
//         await rs.close();

//     } catch (err) {
//         console.error(err);
//     }
//     //     finally {
//     //     if (connection)
//     //     {
//     //       try {
//     //         await connection.close();
//     //       } catch (err) {
//     //         console.error(err);
//     //       }
//     //     }
//     //   }
// }

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




module.exports = { getAllEmployees };
