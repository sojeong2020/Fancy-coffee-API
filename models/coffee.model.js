const db = require('../db/connection');

exports.selectCoffee = async(sort_by = 'calories')=>{
    const result = await db.query(`SELECT * FROM coffee;`)
    return result.rows
}