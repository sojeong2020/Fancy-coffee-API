exports.handleCustomErrors = (err,req,res,next)=>{
    if(err.status){
        res.status(err.status).send({msg: err.msg});
    } else {
        next(err);
    }
};
exports.handlePSQLErrors = (err,req,res,next) =>{
    if(err.code === '22P02' || err.code === '42703'){
        res.status(400).send({msg: 'bad request!!'});
    }else{
        next(err);
    }
};
exports.handleServerErrors = (err,req,res,next)=>{
    console.log(err, 'unhandled error');
    res.status(500).send({msg: 'internal server error'})
};

//General controllers
exports.send404 = (req,res,next) =>{
    res.status(404).send({msg: 'Invalid path!'})
}
