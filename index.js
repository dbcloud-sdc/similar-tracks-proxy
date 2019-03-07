const httpProxy = require('http-proxy');
const express = require('express');
const http = require('http');
const path = require('path');
const server = express();
// const port = 3001;

const proxy = httpProxy.createProxyServer({});

server.use('/song/:songID', express.static(path.join(__dirname, '/public/')));

server.get('/api/song/:songID/relatedtracks', (req, res) => {
  // express.static(path.join(__dirname, 'public'));
  proxy.web(req, res, { target: `http://localhost:3000/` }); //this link will need to be configurable for deployment
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