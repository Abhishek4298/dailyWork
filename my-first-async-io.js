let fs  = require('fs');
//let data;
let file = process.argv[2];
let ans = 0;
fs.readFile(file,function (err,input) {
        if(err) {
                console.log(err);
        }
        else {
                ans = input.toString().split('\n').length-1;
                console.log(ans);
        }
 });
