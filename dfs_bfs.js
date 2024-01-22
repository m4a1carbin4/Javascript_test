"use strict";

var input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")

var width = parseInt(input.shift());

var height = parseInt(input.shift());

var map = []

for(let line of input){
    map.push(line.split(" "))
}

var check = Array.from({length:height},() => Array.from({length:width}, () => -1))

function bfs(map,check,queue,count){
    const dx = [0,1,0,-1];
    const dy = [1,0,-1,0];

    if(queue.length == 0){
        return
    }

    var data = queue.shift()

    console.log(data.toString())

    var a = data[0]
    var b = data[1]

    check[a][b] = count;

    for(let i=0;i<4;i++){
        if(a+dx[i] >= 0 && a+dx[i] < height && b+dy[i] >= 0 && b+dy[i] < width ){
            var x = a+dx[i];
            var y = b+dy[i];

            if(map[x][y] != "*" && check[x][y] == -1){
                queue.push([x,y]);
                check[x][y] = 0;
            }
        }
    }

    bfs(map,check,queue,count + 1)

}

function dfs(map,check,stack){
    const dx = [0,-1,0,1];
    const dy = [1,0,-1,0];

    if(stack.length == 0){
        return
    }

    var data = stack.pop()

    console.log(data.toString())

    var a = data[0][0]
    var b = data[0][1]

    var count = data[1]

    for(let i=0;i<4;i++){
        if(a+dx[i] >= 0 && a+dx[i] < height && b+dy[i] >= 0 && b+dy[i] < width ){
            var x = a+dx[i];
            var y = b+dy[i];

            if(map[x][y] != "*" && check[x][y] == -1){
                stack.push([[x,y],count+1]);
                check[x][y] = count;
            }
        }
    }

    dfs(map,check,stack)

}

var queue = []

for(let i = 0;i<height;i++){
    for(let j = 0;j<width;j++){
        if(map[i][j] != '*' && check[i][j] == -1){
            queue.push([i,j])
            check[i][j] = 0
            bfs(map,check,queue,1) 
        }
    }
}

for(let line of check){
    console.log(line.toString())
}

var check = Array.from({length:height},() => Array.from({length:width}, () => -1))

var stack = []

for(let i = 0;i<height;i++){
    for(let j = 0;j<width;j++){
        if(map[i][j] != '*' && check[i][j] == -1){
            stack.push([[i,j],1])
            check[i][j] = 0
            dfs(map,check,stack)
        }
    }
}

for(let line of check){
    console.log(line.toString())
}