
var http = require('http');
var fs = require('fs');


var server = http.createServer();
function control(petic, resp) {
    fs.readFile('index.html',function (err, data){
           resp.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
           resp.write(data);
           resp.end();
       });
}
server.on('request', control);
server.listen(8000); 
 

/*
import React from 'react';
import ReactDOM from 'react-dom';
import ImageGrid from './components/ImageGrid';
import ImageActions from './actions/ImageActions';

setInterval( () => {
    ImageActions.fetchList(),
    console.log('fetcheando papi shulo...')
}, 5000);

ReactDOM.render(<ImageGrid />, document.getElementById('container'))

*/