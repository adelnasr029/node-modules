const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req,res) => {
    // if(req.url == '/'){
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err,content) => {
    //         if(err) throw err;
    //         res.writeHead(200, {'Content-Type': 'text/html'})
    //         res.end(content)// we wanna output the content of the file
    //     }
    //     );
    // }

    // //REST API
    // //let's say we wanna this to be api we will serve json
    // if(req.url == '/api/users'){
    //    const users = [
    //     {name: 'Bob Smith', age: 30},
    //     {name: 'John Doe', age: 30}
    //    ];
    //    res.writeHead(200, {'Content-Type': 'application/json'});
    //    res.end(JSON.stringify(users)) //turn js object into json
    // }

    let filePath = path.join(__dirname,
         'public', req.url === '/'? 'index.html' : req.url
        )

    // Extension of file
    let extname = path.extname(filePath);

    //Initial content type
    let contentType = 'text/html'

    // Check the extension and set the content type
    switch(extname) {
        case '.js': 
        contentType = 'text/javascript'
        break; 
        case '.css':
            contentType = 'application/json';
        break;
        case '.png':
        contentType = 'image/png';
        break;
        case '.jpg': 
        contentType = 'image/jpg'
        break;
    }

    // Read File 
    fs.readFile(filePath, (err, content) => {
        if(err){
            if(err.code == 'ENONT') {
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, {'Content-Type': 'text/html'})
                    res.end(content,'utf' )
                });
            } else{
                // Some Server error
                res.writeHead(500)
                res.end(`Server Error: ${err.code}`)
            }
        } else{
            // Sucess 
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content, 'utf8')
        }
    })
})

const PORT = process.env.PORT || 5000; // however when we deploy this, it is not always is gonna run on 5000 but it's gonna run on whatever our host is gonna decide which is called our environment variable
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})