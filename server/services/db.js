// https://www.oracle.com/database/technologies/appdev/quickstartnodeonprem.html
const oracledb = require('oracledb');
async function connectDB() {
    let connection;
    try {
        connection = await oracledb.getConnection({ user: "COMP214_m23_er_78", password: "password", connectionString: "199.212.26.208:1521/SQLD" });
        console.log("Successfully connected to Oracle Database");
        result = await connection.execute('select * from hr_jobs', [], { resultSet: true, outFormat: oracledb.OUT_FORMAT_OBJECT });
        const rs = result.resultSet;
        let row;
        while ((row = await rs.getRow())) {
            console.log(row);
        }
        await rs.close();

    } catch (err) {
        console.error(err);
    }
    //     finally {
    //     if (connection)
    //     {
    //       try {
    //         await connection.close();
    //       } catch (err) {
    //         console.error(err);
    //       }
    //     }
    //   }
}

module.exports = { connectDB };
