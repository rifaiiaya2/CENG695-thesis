var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");
var cors = require("cors");
require("dotenv").config();
const DBCONNECTION = require("././config/dbConnect");
DBCONNECTION();


//requiring  routes
var itemRouter = require('./routes/item');
var categoryRouter = require('./routes/category');
var contactRouter = require('./routes/contactus');
var roomsRouter = require('./routes/rooms');
var bookRouter = require('./routes/book');
var userRouter = require('./routes/User')




//----using modules middlewares
var app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static('public/images'));

//Creating middleware to use my routes
app.use('/api/item', itemRouter);
app.use('/api/category', categoryRouter);
app.use('/api/contact', contactRouter);
app.use('/api/rooms', roomsRouter);
app.use('/api/book', bookRouter);
app.use("/api/user", userRouter);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
