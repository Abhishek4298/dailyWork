const net = require('net');
const d = new Date();
let server = net.createServer( function (socket) {
	socket.write(d.getFullYear() + '-' + (d.getMonth() < 10 ? '0' : '') + (d.getMonth() + 1) + '-'+ (d.getDate() < 10 ? '0' : '') + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes());
	socket.end('\n');
});

server.listen(+process.argv[2]);

