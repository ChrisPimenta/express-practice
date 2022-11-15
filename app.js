const res = require('express/lib/response');
const http = require('http');
const { readFileSync } = require('fs');

// get all files
const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

// This is a clear example of one of the many reasons we need Express. With just node , if we want to server a webpage we end up needing to serve the html plus
// Manually defining every single asset to serve as well.

const server = http.createServer((req, res) => {

    switch (req.url) {
        case '/':
            // Write the header - content type defaulted as text/html
            res.writeHead(200, {
                'content-type': 'text/html'
            })

            res.write(homePage)
            break;
        case '/about':
            // Write the header - content type defaulted as text/html
            res.writeHead(200, {
                'content-type': 'text/html'
            })
            res.write('<h1>About</h1>');
            break;
        case '/styles.css':
            res.writeHead(200, {
                'content-type': 'text/css'
            })

            res.write(homeStyles)
            break;
        case '/logo.svg':
            res.writeHead(200, {
                'content-type': 'image/svg+xml'
            })

            res.write(homeImage)
            break;
        case '/browser-app.js':
            res.writeHead(200, {
                'content-type': 'text/javascript'
            })

            res.write(homeLogic)
            break;
        default:
            // Write the header - content type defaulted as text/html
            res.writeHead(404, {
                'content-type': 'text/html'
            })
            res.write('<h1>Not found</h1>');
            break;
    }

    // Always needed
    res.end();
})

// Port 443 is for standard http requests that request html page from the server.
// Specific ports for specific tasks.
server.listen(5000);