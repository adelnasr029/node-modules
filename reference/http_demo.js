const http = require('http')


// Create Server Object
http.createServer((req, res) => {
    // Write response
    res.write('Hello World')
    res.end()
}).listen(5000, () => console.log("Server running on port 5000"))