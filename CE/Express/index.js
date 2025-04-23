const express = require('express'); 
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('This is my home page...');
})

app.get('/about', (req, res) => {
    res.send('This is my about page...');
  })

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
})
