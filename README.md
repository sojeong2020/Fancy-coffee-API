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
![GitHub Logo](/images/coffeeAPI3.jpg)
 
- GET /api/coffee?sort_by=calories
- GET /api/coffee?sort_by=sort
- GET /api/coffee?sort_by=calories&order=desc
- GET /api/coffee?sort_by=preference
- GET /api/coffee?sort_by=calories&order=desc&choice=sweet
- GET /api/coffee?sort_by=calories&order=desc&choice=soy-milk
- GET /api/coffee/:coffee_id
- GET api/coffee/:coffee_id/comments
```json
{
  "comments": [
    {
      "comment_id": 1,
      "author": "Craig",
      "body": "I love it!",
      "votes": 2,
      "drink_name": "Latte",
      "created_at": "2021-01-18T10:09:05.410Z",
      "coffee_id": 1
    },
    {
      "comment_id": 5,
      "author": "Craig B",
      "body": "I love it so much!!",
      "votes": 0,
      "drink_name": "Latte",
      "created_at": "2021-08-09T17:28:35.798Z",
      "coffee_id": 1
    }
  ]
}
```

- POST /api/coffee/:coffee_id/comments
- PATCH /api/coffee/:coffee_id

- GET /api/tastes
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
- ```json
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


