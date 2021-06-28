const {coffeeData,commentsData,optionsData,tastesData}=require('../data/test-data/index');
const db = require('../connection');
const format = require('pg-format');
const {formatOptionsData, formatTastesData,formatCoffeeData, formatCommentsData, lookUp } = require('../utils/data-manipulation');

let coffeeLookUp={};


const seed = async ()=>{
    await db.query(`DROP TABLE IF EXISTS tastes, options,  coffee, comments;`)
    //console.log('dropping tables')
    await db.query(`
    CREATE TABLE options(
        milk_type VARCHAR(200) PRIMARY KEY,
        description VARCHAR(1000) NOT NULL
    );`);
//console.log('create options table');
     await db.query(`
    CREATE TABLE tastes(
        type VARCHAR(200) PRIMARY KEY,
        description VARCHAR(1000) NOT NULL
    );`);
   // console.log('create tastes table');

   await db.query(`
    CREATE TABLE coffee(
        coffee_id SERIAL PRIMARY KEY,
        drink VARCHAR(200) NOT NULL,
        description VARCHAR(5000) NOT NULL,
        img_url VARCHAR(2000) default 'https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80',
        calories INT NOT NULL,
        sort VARCHAR(200),
        preference VARCHAR(200),
        votes INT default 0
    );`);
   // console.log('create coffee table');


    await db.query(`
    CREATE TABLE comments(
        comment_id SERIAL PRIMARY KEY,
        author VARCHAR(200)NOT NULL,
        body VARCHAR(5000) NOT NULL,
        votes INT default 0,
        drink_name VARCHAR(100),
        created_at TIMESTAMP DEFAULT NOW(),
        coffee_id INT REFERENCES coffee(coffee_id)
    );`);
    //console.log('create comments table');

 
    //INSERT VALUES

    const optionsValues = formatOptionsData(optionsData);
    const optionsInsert = format(
        `INSERT INTO options
        (milk_type, description)
        VALUES
        %L
        RETURNING *;`,optionsValues
    );
    await db.query(optionsInsert)

    const tastesValues = formatTastesData(tastesData);
    const tastesInsert = format(
        `INSERT INTO tastes
        (type, description)
        VALUES
        %L
        RETURNING *;`,tastesValues
    );
    await db.query(tastesInsert)

   const coffeeValues = formatCoffeeData(coffeeData);
    const coffeeInsert = format(
        `INSERT INTO coffee
        (drink, description, img_url, calories, sort, preference, votes)
        VALUES
        %L
        RETURNING *;`, coffeeValues
    );
        
    await db.query(coffeeInsert)
    .then((result)=>{
        const coffeeRows = result.rows
        coffeeLookUp = lookUp(coffeeRows)
       })  


    const commentsValues = formatCommentsData(commentsData, coffeeLookUp);
    const commentsInsert = format(
        `INSERT INTO comments
        (author, body, votes, drink_name, created_at, coffee_id)
        VALUES
        %L
        RETURNING *;`, commentsValues
    );
    await db.query(commentsInsert)
    

}


module.exports = seed;