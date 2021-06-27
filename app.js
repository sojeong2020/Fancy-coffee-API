const express = require('express');

const {
        handleCustomErrors,
        handlePSQLErrors,
        handleServerErrors ,
        send404

       }=require('./controllers/errors.controller');

const apiRouter = require('./routes/api.router');

const app = express();

app.use(express.json())


app.get('/',(req,res)=>{
    res.status(200).send({msg:'Welcome to Fancy Coffee!'})
})

//Rourters

app.use('/api',apiRouter);



//General errors

app.use(send404);

//error handling middleware

app.use(handleCustomErrors);
app.use(handlePSQLErrors);
app.use(handleServerErrors);


module.exports =app;