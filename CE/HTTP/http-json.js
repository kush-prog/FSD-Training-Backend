const http = require('http');
const fs = require("fs/promises");

const read = async () => {
    
    return data;
}

const server = http.createServer(async (req, res) => {
    res.writeHead(200, {'content-type': 'application/json'});
    const fileData = await fs.readFile("./user.json", "utf-8");
    const parseData = JSON.parse(fileData);

    // const newData = users.map((user) => {
    //     return user.name
    // });

    // let newData = "";
    // users.forEach((user) => {
    //     newData += `${user.name}`;
    // });
    
    res.end(JSON.stringify(parseData));
});

PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})