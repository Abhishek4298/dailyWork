const http = require('http')
const bl = require('bl')

function httpGet (index) {
//console.log(index);
  http.get(process.argv[index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)
      console.log(data.toString());      
    }));
  });
}
 
for (var i = 2; i < process.argv.length; i++)
  httpGet(i);
