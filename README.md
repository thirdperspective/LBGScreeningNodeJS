# LBG Screening NodeJS Project

Problem Statement:

1.Write a nodejs server that listens on port 3001 and outputs a file content from any local directory

2.Write a nodejs server that serves as a RESTFUL api that takes two parameters in a GET call and produces their product.

3.Write a nodejs server that serves as a RESTFUL  api that accepts a String as an input name and returns the first non-repeating character in the String

4.Write a nodejs server that serves as a RESTFUL  api that accepts a file content and writes them to the disk.

Solution:

1.http://localhost:3001		http method : get




2. http://localhost:3001/route/product/2/4	http method : get



3.http://localhost:3001/route/firstchar/harih	http method : get



4.http://localhost:3001/route/uploadfile

http method : post
Key : file-to-upload
Value : any file



Step to start the application:

Step : 1 Download all dependencies. Command : npm install

Step : 2 Start the application. Command : npm start

Step : 3 Unit test the application. Command : npm test