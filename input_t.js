"use strict";

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
/* test case t input line 1 + t line for input*/ 

for(let i=0;i<input.length -1;i++){ //input.length -1 == t
    const line = input[i+1].split(' ');

    console.log(Number(line[0]) + Number(line[1]));
}