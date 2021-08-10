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
    "author":"Liam",
    "body":"I Like this one!.",
    "drink_name":"Mocha"
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


- GET /api/options
![GitHub Logo](/images/coffeeAPIoptions.jpg)


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


