# FANCY COFFEE API :coffee:


## Background

I built this REST API because I love coffee.:heart: 
This API provides data of many difference types of coffee and so on.

I wanted to practice PSQL so database is PSQL and I interacted with it using node-postgres.

## Built With

<p><a href="https://nodejs.org/en/">Node.js</a></p>
<p><a href="https://expressjs.com/">Express.js</a></p>
<p><a href="https://www.postgresql.org/docs/">Postgres</a></p> 
<p><a href="https://www.npmjs.com/package/pg-format">pg-format</a></p>
<p><a href="https://jestjs.io/docs/getting-started">jest</a></p>


## Endpoints
<ul>
<li> GET /api/coffee - get all coffee </li>
<li> GET /api/coffee?sort_by=calories</li>
<li> GET /api/coffee?sort_by=sort</li>
<li> GET /api/coffee?sort_by=calories&order=desc</li>
<li> GET /api/coffee?sort_by=preference</li>
<li> GET /api/coffee?sort_by=calories&order=desc&choice=sweet</li>
<li> GET /api/coffee?sort_by=calories&order=desc&choice=soy-milk</li>
<li> GET /api/coffee/:coffee_id</li>
<li> </li>
<li> </li>
<li> </li>
<li> </li>
<li> </li>


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


