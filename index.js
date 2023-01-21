import { createRequire } from 'module';
const require = createRequire(import.meta.url)
const http = require('http');
const port = 3000;

const server = http.createServer(function(req,res){
})

//server start up 

server.listen(port , function(error){
    if(error){
        console.log('Error msg', error)
    }else{
        console.log('server started sucessfully on port ' + port);

    }
})



