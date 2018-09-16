'use strict';
/* 
*module dependencies
*/
var multer = require('multer');
var express = require("express");
var router = express.Router();
const logger = require('./../applogger');
/* 
*multipart/form-data disk storage handler
*/
const storage = multer.diskStorage({
    destination : function(req,file,cb)
    {
        cb(null,'./upload/');
    },
    filename : function(req,file,cb)
    {
        cb(null,file.originalname);
    }
});
const upload = multer({
    storage : storage
});
/* 
*router for product of two number
*problem statement: Write a nodejs server that serves as a RESTFUL api that 
*takes two parameters in a GET call and produces their product.
*/
router.get('/product/:a/:b',product);
/* 
*router for finding first non repeative character
*problem statement : Write a nodejs server that serves as a RESTFUL  api that 
*accepts a String as an input name and returns the first non-repeating character in the String
*/
router.get('/firstchar/:inputString',firstNonRepeativeChar)
/* 
*router for the uploading file
*problem statement : Write a nodejs server that serves as a RESTFUL  api that 
*accepts a file content and writes them to the disk.
*/
router.post('/uploadFile',upload.single('file-to-upload'),uploadFile);

function product(req,res){
    logger.debug("Product operation with two input operation is called");
    var a = req.params.a;
    var b = req.params.b;
    if(isNaN(a) || isNaN(b))
        res.status(500).send("Please provide number vlaue for product operation");
    res.status(200).send(""+a*b);
}
function firstNonRepeativeChar(req,res){
    logger.debug("First non repeative character operation is called");
    var inputString = req.params.inputString;
    var char = inputString.split('').filter(function (character, index, obj) {
        return obj.indexOf(character) === obj.lastIndexOf(character);
    }).shift();
    res.send(char);
}
function uploadFile (req,res,next){
    //res.file;
    logger.debug("File upload operation is called");
    res.status(200).send("file uploaded successfully");
}

module.exports = router;
