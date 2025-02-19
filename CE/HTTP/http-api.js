const http = require('http');
const axios = require('axios');
const server = http.createServer(async (req, res) => {
    console.log('New request recieved');
    res.writeHead(200, { 'Content-Type' : 'text/html'});

    // const response = await fetch("https://dummyjson.com/products")
    // const data = await response.json();
    
    const location = "India";
    const response = await axios.get(`https://api.github.com/search/users?q=location:${location}`);
    const users = response.data.items; 

    let frontData = `<html><head></head><body>`;
    users.forEach((user) => {
        frontData += `<div><img src="${user.avatar_url}" width="100" height="100"><p>${user.login}</p></div>`;   
    });
    frontData += `</body></html>`;

    res.end(frontData);
})

PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
