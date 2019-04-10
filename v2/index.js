
console.log("lodash dependencies");
const _ld = require("lodash");

const numbers = [23, 44,65, 78, 14, 54, 96, 91];
_ld.each(numbers, function (num, i){
    console.log(numbers[i] + " == " +num);
})




console.log("request dependencies");

var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('Google url request statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
});



console.log("express dependencies");
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

//app.listen(port, () => console.log(`Example app listening on port ${port}!`))


console.log("chalk dependencies");
const chalk = require('chalk');
const log = console.log;

log(chalk.blue('Hello') + ' World' + chalk.red('!'));
 
// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));
 
// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));