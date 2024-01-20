"use strict";

const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

var array = new Array();

for(let i=0;i<input.length;i++){
    array[i] = parseInt(input[i]);
};

for(let i=0;i<array.length;i++){
    console.log(array[i]);
};

var array_one = new Array(1,2,3,"four","five");
var array_two = [1,2,3,"four","five"];

var print = "";

for(let i=0;i<array_one.length;i++){
    print += array_one[i].toString();
};

console.log(print);

var print = "";

for(let i=0;i<array_two.length;i++){
    print += array_two[i].toString();
};

console.log(print);

//del data

//delete array_two[1];

var new_arr = array_two.splice(1,1)

var print = "";
for(let i=0;i<new_arr.length;i++){
    print += new_arr[i].toString()+ " ";
};

console.log(`deleted arr : ${print}`);

var print = "";

for(let i=0;i<array_two.length;i++){
    print += array_two[i].toString()+ " ";
};

console.log(`result arr : ${print}`);

// replace data

var new_arr = array_two.splice(1,2,'replace','replace');

var print = "";

for(let i=0;i<new_arr.length;i++){
    print += new_arr[i].toString() + " ";
};

console.log(`deleted arr : ${print}`);

var print = "";

for(let i=0;i<array_two.length;i++){
    print += array_two[i].toString()+ " ";
};

console.log(`replaced arr : ${print}`);

// pop data (stack)

var last_data = array_one.pop();

console.log(`pop data : ${last_data}`)

var print = "";

for(let i=0;i<array_one.length;i++){
    print += array_one[i].toString() + " ";
};

console.log(`${print}`);

// pop 0 data (queue)

var first_data = array_one.shift();

console.log(`pop 0 data : ${first_data}`)

var print = "";

for(let i=0;i<array_one.length;i++){
    print += array_one[i].toString() + " ";
};

console.log(print);

//push data (stack)

array_one.push("pushed")

console.log(`pushed arr : ${array_one.toString()}`)

//push data front

array_one.unshift("pushed front")

console.log(`pushed fornt arr : ${array_one.toString()}`)

// sum array

var sum_array = array_one.concat(array_two);

var print = "";

for(let i=0;i<sum_array.length;i++){
    print += sum_array[i].toString() + " ";
};

console.log(`sum arr : ${print}`);

// multi sum

var sum_array = array_one.concat(array_two,array_one);

var print = "";

for(let i=0;i<sum_array.length;i++){
    print += sum_array[i].toString() + " ";
};

console.log(`multi sum arr : ${print}`);

// arr reverse

console.log(`reversed arr : ${sum_array.reverse()}`)

// array slice

console.log(`slice arr 3~5 : ${sum_array.slice(3,6)}`)