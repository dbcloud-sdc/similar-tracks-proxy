require('newrelic');
const httpProxy = require('http-proxy');
const express = require('express');
const http = require('http');
const path = require('path');
const server = express();

const proxy = httpProxy.createProxyServer({});

server.get('/api/song/:songID/relatedtracks', (req, res) => {
  proxy.web(req, res, { target: `http://172.31.87.163` }); //Related Tracks Private IP
});

server.get('/api/song/:songID/description', (req, res) => {
  proxy.web(req, res, { target: `http://172.31.23.21` }); //Description Private IP
});

server.get('/api/song/:songID/TODO:', (req, res) => {
  proxy.web(req, res, { target: `TODO:` }); //this link will need to be configurable for deployment
});

server.get('/api/song/:songID/TODO:', (req, res) => {
  proxy.web(req, res, { target: `TODO:` }); //this link will need to be configurable for deployment
});

server.get('/api/song/:songID/TODO:', (req, res) => {
  proxy.web(req, res, { target: `TODO:` }); //this link will need to be configurable for deployment
});


//this server is listening on the below port
server.listen(5050, () => {
  console.log("listening on port 5050");
});


var uncaughterrors = 0;
process.on('uncaughtException', function (err) {
  // console.error(err.stack);
  uncaughterrors++;
  console.log(`uncaught errors: ${uncaughterrors}`);
});
