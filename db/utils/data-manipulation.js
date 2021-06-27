
exports.formatOptionsData = (optionsData) => {
   const optionsValues= optionsData.map((option)=> {
        return [option.milk_type, option.description];
        })
    return optionsValues;
}

 exports.formatTastesData = (tastesData) =>{
    const tastesValues = tastesData.map((taste)=>{
        return [taste.type, taste.description]
    })
    //console.log(tastesValues)

    return tastesValues;

}

 exports.formatCoffeeData = (coffeeData) =>{
    const coffeeValues = coffeeData.map((eachCoffee)=>{
        return [
            eachCoffee.drink, 
            eachCoffee.description, 
            eachCoffee.img_url, 
            eachCoffee.calories, 
            eachCoffee.sort, 
            eachCoffee.preference, 
            eachCoffee.votes
        ]
    })
    //console.log(coffeeValues)
    return coffeeValues;
}  

 exports.formatCommentsData = (commentsData,coffeeLookUp) =>{
     const commentsValues = commentsData.map((comment)=>{
         return [
             comment.author,
             comment.body,
             comment.votes,
             comment.drink_name,
             comment.created_at,
             coffeeLookUp[comment.drink_name]
            ]
     })
    // console.log(commentsValues)
     return commentsValues;

}  
exports.lookUp = (coffeeRows) => {
   // console.log(coffeeRows)
 coffeeObj={}
 coffeeRows.forEach((each)=>
     coffeeObj[each.drink] = each.coffee_id
 )
 //console.log(coffeeObj)
 return coffeeObj
} 