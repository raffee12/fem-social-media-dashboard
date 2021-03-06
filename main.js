const path = require('path')
const fs = require('fs')
const http = require('http')

const server = http.createServer((req, res)=> {
 let filePath = path.join(__dirname, 'Nuggets',req.url === '/' ?  'nuggets.html' : req.url)
 let extName = path.extname(filePath) 
 let contentType = 'text/html';
 switch(extName) {
    case '.js':
        contentType = 'text/javascript';
        break;
    case '.css':
        contentType = 'text/css';
        break;
    case '.json':
        contentType = 'application/json';
        break;
    case '.png':
        contentType = 'image/png';
        break;
    case '.jpg':
        contentType = 'image/jpg';
        break;
 }
 
fs.readFile(filePath, (err, content) => {
    if(err){
        if(err.code == 'ENOENT'){
            fs.readFile(path.join(__dirname, 'Nuggets', '404.html'), (err, content) => {
              res.writeHead(200, {'Content-Type': 'text/html'})
              res.end(content, 'utf8')
            })
        } else {
               res.writeHead(500)
               res.end(`Sever Error: ${err.code}`)
        }
        } else {
            res.writeHead(200, {'Content-Type': contentType})
            res.end(content, 'utf8')
        } 
    
})
})

const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=> {
    console.log`Server Running On ${PORT}`
})