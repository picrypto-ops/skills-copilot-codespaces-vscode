// create a web server that can listen to requests for /comments and send back
// the contents of comments.json
//
// use the fs module to read the contents of comments.json into memory
// parse the contents as JSON
// respond with just the comments array as JSON
//
// to test point your browser at http://localhost:3000/comments
//
// bonus: write the comments.json file using fs.writeFile
// add a new comment to the array
// respond with the updated array
//
// to test point your browser at http://localhost:3000/comments
//
// bonus: accept POST requests containing JSON in the request body
// push the new comment into the comments array
// respond with the updated array
//

var http = require('http');
var fs = require('fs');
var comments = require('./comments.json');

var server = http.createServer(function(req, res) {

    if (req.method === 'GET' && req.url === '/comments') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(comments));
    }

    if (req.method === 'POST' && req.url === '/comments') {
        var body = '';
        req.on('data', function(chunk) {
            body += chunk;
        });
        req.on('end', function() {
            var newComment = JSON.parse(body);
            comments.push(newComment);
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(comments));
        });
    }

},

server.listen(3000);
console.log('server listening on port 3000');

// Path: comments.js
// Compare this snippet from member.js:
// function skillsMember()) {
//     console.log('I am a member of skills.js')
// }
// create a web server that can listen to requests for /comments and send back
// the contents of comments.json
//
// use the fs module to read the contents of comments.json into memory
// parse the contents as JSON
// respond with just the comments array as JSON
//

