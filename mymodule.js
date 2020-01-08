let fs = require('fs');
const path = require('path');

module.exports = function (file, ext, callback) {
	fs.readdir(file,function (err,input) {
		if(err) {
			return callback(err);
		}
		input = input.filter(filename => {
			if (path.extname(filename) === '.' + ext) {
			  return filename;
			}
		});
		callback(null, input);
	});
}
