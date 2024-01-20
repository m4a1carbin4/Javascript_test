"use strict";

// using fs.

var fs = require('fs');

var input = fs.readFileSync('/dev/stdin').toString().split(' ');

var a = parseInt(input[0]);

var b = parseInt(input[1]);

console.log("a is : " + a + " b is : " + b);

// Using readline

process.stdin.resume();;
process.stdin.setEncoding('utf8');

var data=[]
var reader = require('readline').createInterface({
    input: process.stdin,
    output:process.stdout
});

reader.on('line',(line) => {
    data.push(line);
});

reader.on('close',() =>{
    console.log(Number(data[0]) + Number(data[1]));
    reader.close();
    process.exit();
});

reader.question("what's your name? ",input=>{
    console.log(`your name is : ${input}`)
    reader.close();
});

/* I hate fxxking event */
