const db = require('../db/connection');

exports.selectCoffee = async(sort_by = 'calories',order='asc', choice)=>{

    const validColumns = [
        'coffee_id', 
        'drink',
        'description',
        'img_url',
        'calories',
        'sort',
        'preference',
        'votes',
        'comment_count'
    ];

    const validOrders = ['asc','desc'];

    if(!validColumns.includes(sort_by)){
        return Promise.reject({status:400, msg:'Bad request: Invalid sort_by!'})
    }else if (!validOrders.includes(order)){
        return Promise.reject({status:400,msg:'Bad request: Invalid order!'})
    }

    const queryValue = []

    let queryStr = `
    SELECT coffee.* , COUNT(comments.coffee_id) AS comment_count 
    FROM coffee 
    LEFT JOIN comments ON comments.coffee_id = coffee.coffee_id
    `;

    if(choice){
        const choiceStr=await db.query(`SELECT * 
        FROM tastes 
        UNION
        SELECT *
        FROM options;`)
        const validChoice = choiceStr.rows.map((choice)=>choice.type)
        if(!validChoice.includes(choice)){
            return Promise.reject({status:404, msg: 'non-existent choice!'})
        }

        queryStr += `WHERE coffee.sort=$1 OR coffee.preference=$1`;
        queryValue.push(choice);
    }

    queryStr += `
    GROUP BY coffee.coffee_id
    ORDER BY ${sort_by} ${order}
    ;`;

    const result = await db.query(queryStr,queryValue)
   
    

    return result.rows
}

exports.selectCoffeeById = async(coffee_id)=>{
    const result = await db.query(`
    SELECT coffee.* , COUNT(comments.coffee_id) AS comment_count 
    FROM coffee 
    LEFT JOIN comments ON comments.coffee_id = coffee.coffee_id
    WHERE coffee.coffee_id=$1
    GROUP BY coffee.coffee_id;`,
    [coffee_id])

    if(result.rows.length === 0){
        return Promise.reject({status:404, msg:'not found!!'})
    }

    return result.rows
}

exports.patchCoffee = async(coffee_id,inc_votes)=>{
    const result = await db.query(`
    UPDATE coffee
    SET votes= votes + $2
    WHERE coffee_id=$1
    RETURNING * ;`,
    [coffee_id, inc_votes]
    )
    if(result.rows.length === 0){
        return Promise.reject({status: 404, msg: 'not found!!'})
  
       }       
return result.rows[0]

}