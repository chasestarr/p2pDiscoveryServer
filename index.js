const http = require('http');
const qs = require('querystring');
const url = require('url');

let users = {};
let server = http.createServer((req, res) => {
  let route = url.parse(req.url).pathname.split('?')[0];
  let parsedUrl = qs.parse(req.url);

  // post request
  if(req.method === 'POST' && route === '/join'){
    let node = parsedUrl;
    users[node.id] = node.ip;
    res.end('posted user...');
  }

  // post request
  if(req.method === 'GET' && route === '/join'){
    let node = parsedUrl;
    if(node.id){
      res.end(JSON.stringify(users[node.id]));
    } else {
      res.rend('unable to retrieve user');
    }
  }
});

server.listen(8000);