const db = require('../db/connection');

exports.selectComments=async()=>{
    const result = await db.query(`SELECT * FROM comments;`)
    console.log(result.rows)
    return result.rows
}