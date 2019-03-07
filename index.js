const httpProxy = require('http-proxy');
const express = require('express');
const http = require('http');
const path = require('path');
const server = express();
const port = 3001;

const proxy = httpProxy.createProxyServer({});

// Create your custom server and just call `proxy.web()` to proxy
// a web request to the target passed in the options
// also you can use `proxy.ws()` to proxy a websockets request

server.use('/song/:songID', (req, res) => {
  proxy.web(req, res, { target: `http://localhost:3000/song/${req.params.songID}` });
  // proxy.web(req, res, { target: `http://localhost:3000/song/${req.params.songID}` });
  // proxy.web(req, res, { target: `http://localhost:3000/song/${req.params.songID}` });
  // proxy.web(req, res, { target: `http://localhost:3000/song/${req.params.songID}` });
});

//this server is listening on the below port
server.listen(5050, () => {
  console.log("listening on port 5050");
});


// Old node code:
// server.use('/scripts',express.static(path.resolve(__dirname, 'node_modules')))
// server.use(express.static(path.join(__dirname, 'public')));
// server.use('/song/:songId',express.static(path.join(__dirname, 'public')));
// server.listen(port, () => {
//   console.log(`server running at port ${port}`);
// });