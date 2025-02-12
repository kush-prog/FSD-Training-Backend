const http = require('http');
const fs = require("fs/promises");

const read = async () => {
    const data = await fs.readFile("./home.html", "utf-8");
    return data;
}

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // res.write("<h1>Hello World</h1>");

    // Calling the read function in the end to read the html code written inside the home.html
    read().then((data) => {
        res.end(data);
    });
});

PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})