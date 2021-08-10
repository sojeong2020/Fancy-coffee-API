# FANCY COFFEE API   
### Open source REST API :coffee:

## Background

### I built this project because I love coffee.:heart: 
### This API provides data of many difference types of coffee and so on.

### I wanted to practice PSQL so database is PSQL and I interacted with it using node-postgres.

## Built With
<ul>
<li><a href="https://nodejs.org/en/">Node.js</a></li>
<li><a href="https://expressjs.com/">Express.js</a></li>
<li><a href="https://www.postgresql.org/docs/">Postgres</a></li>
<li><a href="https://www.npmjs.com/package/pg-format">pg-format</a></li>
<li><a href="https://jestjs.io/docs/getting-started">jest</a></li>
</ul>
<!-- <p><a href="https://nodejs.org/en/">Node.js</a></p>
<p><a href="https://expressjs.com/">Express.js</a></p>
<p><a href="https://www.postgresql.org/docs/">Postgres</a></p> 
<p><a href="https://www.npmjs.com/package/pg-format">pg-format</a></p>
<p><a href="https://jestjs.io/docs/getting-started">jest</a></p> -->


## Endpoints

![GitHub Logo](/images/coffeeAPI1.jpg)

<ul>
<li> GET /api/coffee - get all coffee </li>
 ```
 <p> {
  "coffee": [
    {
      "coffee_id": 1,
      "drink": "Latte",
      "description": "Latte is comprised of a shot of espresso and steamed milk ",
      "img_url": "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80",
      "calories": 180,
      "sort": "mild",
      "preference": "semi-skimmed-milk",
      "votes": 15,
      "comment_count": "2"
    }
  ]
   }</p>
```
<li> GET /api/coffee?sort_by=calories</li>
<li> GET /api/coffee?sort_by=sort</li>
<li> GET /api/coffee?sort_by=calories&order=desc</li>
<li> GET /api/coffee?sort_by=preference</li>
<li> GET /api/coffee?sort_by=calories&order=desc&choice=sweet</li>
<li> GET /api/coffee?sort_by=calories&order=desc&choice=soy-milk</li>
<li> GET /api/coffee/:coffee_id</li>
<li> GET api/coffee/:coffee_id/comments</li>
<li> POST /api/coffee/:coffee_id/comments</li>
<li> PATCH /api/coffee/:coffee_id</li>

<li> GET /api/tastes</li>
<li> GET /api/options</li>
<li> GET /api/comments</li>
</ul>

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


