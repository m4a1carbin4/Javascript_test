"use strict";

class tree {
    constructor(value){
        this.value = value;

        this.childs = [];
    }

    insertNode(value){
        const childnode = new tree(value);
        this.childs.push(childnode);
    }

    contains(value) {
        if (this.value == value){
            return true;
        }

        for(let child of this.childs){
            if(child.contains(value)){
                return true;
            }
        }

        return false;
    }
}

const input = require('fs').readFileSync('/dev/stdin').toString().split(" ")

var start = null

for(let num of input){
    if(start == null){
        start = new tree(num)
    }else{
        start.insertNode(num)
    }
}

if(start.contains(1)){
    console.log("find")
}else{
    console.log("not find")
}