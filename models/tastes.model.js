const db = require('../db/connection');

exports.selectTastes=async()=>{
const result = await db.query(`SELECT * FROM tastes;`)
return result.rows
}