const http = require('http');
const appExpress = require ('./appExpress');

const server = http.createServer(appExpress);

server.listen(3000, () => {
 console.log('http://localhost:3000 is ok');
});
