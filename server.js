const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    //lodash
    const num = _.random(0, 20);
    console.log(num);
    


    res.setHeader('Content-Type', 'text/html');

    //send an html file
    if (req.url === '/') {
        fs.readFile('./views/index.html', (err, data) => {
            if (err) {
                console.log(err);
                res.end();
            } else {
                res.write(data);
                res.end();
            }
        });
    } else if (req.url === '/about') { 
        fs.readFile('./views/about.html', (err, data) => {
            if (err) {
                console.log(err);
                res.end();
            } else {
                res.write(data);
                res.end();
            }
        });
    } else {
        fs.readFile('./views/404.html', (err, data) => {
            if (err) {
                console.log(err);
                res.end();
            } else {
                res.write(data);
                res.end();
            }
        });
    }
});

server.listen(3000, 'localhost', (err, res) => {
    console.log(`listening on port 3000 `);
});