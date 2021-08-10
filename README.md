# FANCY COFFEE API   
### Open source REST API :coffee:

## Background

### I built this project because I love coffee.:heart: 
### This API provides data of many difference types of coffee and so on.

### I wanted to practice PSQL so database is PSQL and I interacted with it using node-postgres.

## Built With

- [Express](https://expressjs.com/)  
- [Node.js](https://nodejs.org/en/)
- [Postgresql](https://www.postgresql.org/docs/)
- [pg-format](https://www.npmjs.com/package/pg-format)
- [Jest](https://jestjs.io/docs/getting-started)

## Endpoints

- GET /api/coffee - get all coffee
![GitHub Logo](/images/coffeeAPIcoffee.jpg)
 
- GET /api/coffee?sort_by=calories
- GET /api/coffee?sort_by=sort
- GET /api/coffee?sort_by=calories&order=desc
- GET /api/coffee?sort_by=preference
- GET /api/coffee?sort_by=calories&order=desc&choice=sweet
- GET /api/coffee?sort_by=calories&order=desc&choice=soy-milk
- GET /api/coffee/:coffee_id
- GET api/coffee/:coffee_id/comments
![GitHub Logo](/images/coffeeAPI1.jpg)

- POST /api/coffee/:coffee_id/comments
```json
{
    "author":"Len",
    "body":"This is the one!.",
    "drink_name":"Coconut Mocha"
}
```
- PATCH /api/coffee/:coffee_id
```json
{
    "inc_vote":5
}
```

- GET /api/tastes
![GitHub Logo](/images/coffeeAPItastes.jpg)

```json
{
  "tastes": [
    {
      "type": "mild",
      "description": "Beginner-friendly coffee as it comes with a lot of milk that neutralizes the bitter taste."
    },
    {
      "type": "strong",
      "description": "It contains a lot of Caffeine."
    },
    {
      "type": "sweet",
      "description": "It contains sweet syrups and is high caloric."
    }
  ]
}
```
- GET /api/options
![GitHub Logo](/images/coffeeAPIoptions.jpg)

 ```json
{
  "options": [
    {
      "milk_type": "semi-skimmed-milk",
      "description": "It is a good source of protein and calcium and usually use for making differrnt kinds of coffee."
    },
    {
      "milk_type": "soy-milk",
      "description": "It is made of soy."
    },
    {
      "milk_type": "oat-milk",
      "description": "It is made of oat."
    },
    {
      "milk_type": "coconut-milk",
      "description": "It is made of coconut."
    },
    {
      "milk_type": "water",
      "description": "pure water"
    }
  ]
}
```
- GET /api/comments
![GitHub Logo](/images/coffeeAPIcomments.jpg)


## Getting started

To run on your local machine use the following commands

```
git clone https://github.com/sojeong2020/Fancy-coffee-API.git
```
```
npm install
```
```
npm start
```
Open http://localhost:9090 to view it in the <a href="https://insomnia.rest/">Insomnia</a>.

Any questions please contact macpark09@gmail.com


