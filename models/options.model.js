const db = require('../db/connection');

exports.selectOptions=async()=>{
    const result = await db.query(`SELECT * FROM options;`)
    return result.rows
}