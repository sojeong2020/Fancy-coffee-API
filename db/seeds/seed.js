const {coffeeData,commentsData,optionsData,tastesData}=require('../data/test-data/index');
const db = require('../connection');
const format = require('pg-format');

const seed = async ()=>{
    await db.query(`DROP TABLE IF EXISTS options,tastes,coffee,comments;`)
    console.log('dropping tables')
    await db.query(`
    CREATE TABLE options(
        type VARCHAR(200) PRIMARY KEY,
        description VARCHAR(1000) NOT NULL
    );`);

    await db.query(`
    CREATE TABLE tastes(
        type VARCHAR(200) PRIMARY KEY,
        description VARCHAR(1000) NOT NULL
    );`);

    await db.query(`
    CREATE TABLE coffee(
        coffee_id SERIAL PRIMARY KEY,
        drink VARCHAR(200) NOT NULL,
        description VARCHAR(5000) NOT NULL,
        img_url VARCHAR(2000) default 'https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80',
        calories INT NOT NULL,
        taste VARCHAR(1000) REFERENCES tastes(type),
        option VARCHAR(1000) REFERENCES options(type),
        votes INT default 0
    );`);

    await db.query(`
    CREATE TABLE comments(
        comment_id SERIAL PRIMARY KEY,
        author VARCHAR(200) NOT NULL,
        body VARCHAR(5000) NOT NULL,
        votes INT default 0,
        coffee_id INT REFERENCES coffee(coffee_id),
        created_at TIMESTAMP DEFAULT NOW()
    );`);


}


module.exports = seed;