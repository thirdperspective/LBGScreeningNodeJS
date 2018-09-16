'use strict';
try
{
    /*
    *module dependencies
    */
    var path = require('path');
    var express = require('express');
    const bodyParser = require("body-parser");
    var morgan = require('morgan');
    const logger = require('./applogger');
    /* 
    *routing dependencies
    */
    var approuter = require('./approutes/process')
    var app = express();

    app.onAppStart = function(addr) {
        logger.debug("Web services is now Running on port:", addr.port);
    }
    
    /* 
    *middleware configuration
    */
    app.use('',function(req,res,next){
        logger.debug("middleware configuration are setted");
        next();
    })
    app.use(morgan("dev"));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    /* 
    *Static paths
    */
    app.use('/uploads', express.static('uploads'));

    /* 
    *get service for returning file content
    *problem statement : Write a nodejs server that listens on port 3001 and outputs a file content from any local directory
    */
   app.get("/",function(req,res){
    logger.debug("file content getting operation is called")
    res.sendFile(path.join(__dirname,"./index.html"));
    })
    /* 
    *App routing
    */
    app.use("/route",approuter)
    
    module.exports = app;
}
catch(err)
{
    console.log(err);
}

