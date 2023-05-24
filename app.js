var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");
const { ApolloServer, gql } = require("apollo-server-express");
const typeDefs = require('./schemas/typedefs');
const resolvers = require('./schemas/resolvers');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


async function startServer() {

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app: app });

  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
  
  //default mongoose connection
  await mongoose.connect("mongodb://127.0.0.1:27017/dogo_db", { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('mongoDB is Connected');

  //get Default connection
  var db = mongoose.connection;

  var PORT = 9030;
  app.listen(PORT, () => console.log(`Server is started at ${PORT}`));
}

startServer();