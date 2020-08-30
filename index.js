const sql = require("mssql");
const { concatSeries } = require("async");
const config = {
    server: 'localhost',
    user : "sa",
    password: "jeanca2020+",
    database: "testdb",
    options: {
        enableArithAbort: true
    }
}

const run = async() => {
    let pool;
    try {
        console.log('Connecton opening...');
        pool = await sql.connect(config);

        const { recordset } = await sql.query("select * from users;");

        console.log(recordset);
    } 
    catch (error) {
        console.error(error);
    }
    finally {
        await pool.close();
        console.log('Connection closed');
    }
}

run();