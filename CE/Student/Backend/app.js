const express = require('express')
const cors = require ('cors')
const fs = require ('fs/promises')
const app = express();
const port = 3000
const users=[]
app.use(cors())
app.use(express.json())

const readData  = async () => {
    users = JSON.parse(await fs.readFile('./data.json', 'utf-8'));   
}

app.get('/users', (req, res)=>{
    res.json(users);
})
app.post('/users', (req, res)=>{
    const new_user = {
        id: users.length+1,
        name: req.body.name,
        age: req.body.age
    }
    users.push(new_user);
    res.status(201).json({message:"Data Saved"});
})
app.listen(port, ()=>{
    console.log(`App is running at: ${port}`);
})