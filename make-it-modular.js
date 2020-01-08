const firstmodule = require('./mymodule');
let file = process.argv[2];
let ext = process.argv[3];

firstmodule(file, ext, function (err, input) {
	if(err) {
	  return console.error(err);
	}
	input.forEach(function (file1) {
	  console.log(file1);
	});
});
