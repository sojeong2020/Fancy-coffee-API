const {getComments}=require('../controllers/comments.controller');

const commentsRouter = require('express').Router();


commentsRouter.route('/').get(getComments)


module.exports = commentsRouter;