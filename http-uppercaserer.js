t http = require('http');
const map = require('through2-map');

let server = http.createServer(function (req,res) {
	if(req.method === 'POST') {
	  req.pipe(map(function (chunk) {
	    res.write(chunk.toString().toUpperCase());
	  }));
	}	  
});

server.listen(+process.argv[2]);
