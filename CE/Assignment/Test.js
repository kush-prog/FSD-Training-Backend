const http = require('http');
const fs = require("fs/promises");

const server = http.createServer(async (req, res) => {
    
    if(req.url == "/"){
        res.writeHead(200, {'content-type': 'application/json'});
        const fileData = await fs.readFile("./blank.json", "utf-8");
        res.end(fileData);
    }
    else if(req.url == "/home"){
        res.writeHead(200, {'content-type': 'text/html'});
        const homedata = await fs.readFile("./home.html", "utf-8");
        res.end(homedata);
    }

    else{
        res.writeHead(200, {'content-type': 'text/html'});
        const errordata = await fs.readFile("./error.html", "utf-8");
        res.end(errordata);
    }
    
});

PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})