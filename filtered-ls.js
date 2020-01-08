const fs = require('fs');
const path = require('path');
const file = process.argv[2];
const  ext = '.' + process.argv[3];
fs.readdir(file,function(err,input){
	if(err){
		console.log(err);
	}
	input.filter(filename=> {
		return path.extname(filename) === ext
		}).forEach((d1)=>{console.log(d1)});
		
})

