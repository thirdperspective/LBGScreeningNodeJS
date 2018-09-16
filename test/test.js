const assert = require('chai').assert;
const request = require('supertest');

const host_url = 'http://localhost:3001'

var container = request(host_url);

describe('LBG screening sample project test', function() {

    describe('1.Write a nodejs server that listens on port 3001 and outputs a file content from any local directory', function() {
      it('should response while calling', function(done) {
        console.log(host_url);
        container
          .get('/')
          .expect(200, done)
      });
    })

    describe('2.Write a nodejs server that serves as a RESTFUL api that takes two parameters in a GET call and produces their product.',function(){
        it('product of two numbers - positive scenario',function(done){
            container
                .get('/route/product/2/4')
                .expect(200,"8",done);
            
        })
        it('product of numbers with one negative value - positive scenario',function(done){
            container
                .get('/route/product/-2/4')
                .expect(200,"-8",done);
        })
        it('product of numbers with both negative value - positive scenario',function(done){
            container
                .get('/route/product/-2/-4')
                .expect(200,"8",done);
        })
        it('product of numbers with both decimal value - positive scenario',function(done){
            container
                .get('/route/product/2.2/4')
                .expect(200,"8.8",done);
        })
        it('product of two numbers - negative scenario',function(done){
            container
                .get('/route/product/2a/4')
                .expect(500,"Please provide number vlaue for product operation",done)
        })
    })
    
    describe('3.Write a nodejs server that serves as a RESTFUL  api that accepts a String as an input name and returns the first non-repeating character in the String', function() {
        it('first non repetive character for hari', function(done) {
          container
            .get('/route/firstchar/hari')
            .expect(200,"h", done)
        });
        it('first non repetive character for harih', function(done) {
            container
              .get('/route/firstchar/harih')
              .expect(200,"a", done)
        });
        it('first non repetive character for harihari', function(done) {
            container
              .get('/route/firstchar/harihari')
              .expect(200, done)
        });
      })

      describe('4.Write a nodejs server that serves as a RESTFUL  api that accepts a file content and writes them to the disk.', function() {
        it('should response while calling', function(done) {
          console.log(host_url);
          container
            .post('/route/uploadFile')
            .attach('file-to-upload','./test/img.jpg')
            .expect(200,"file uploaded successfully", done)
        });
      })



})