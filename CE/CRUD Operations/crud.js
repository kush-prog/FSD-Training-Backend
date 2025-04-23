const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
const database = [{id:1,name:"khushi",age:21},
    {id:2,name:"dev",age:15},
]
//Create(C) POST
app.post('/users',(req,res)=>{
    const newuser ={
        id:database.length+1,
        name:req.body.name,
        age:req.body.age
    }
    database.push(newuser);
    res.status(201).json(newuser);
})
//Read(R) GET-->read all data

app.get('/users',(req,res)=>{
    res.json(database);
});

app.get('/users/:id',(req,res)=>{
    const user = database.find((user)=>user.id === parseInt(req.params.id));
    if(!user){
        return res.status(404).json({message:"User not found"});
    }
    res.json(user);
})

app.put('/users/:id',(req,res)=>{
    const user = database.find((user)=>user.id === parseInt(req.params.id));
    if(!user){
        return res.status(404).json({message:"User not found"});
    }
    user.name = req.body.name;
    user.age = req.body.age;
    res.json(user);
})

app.delete('/users/:id',(req,res)=>{
    const userIndex = database.findIndex((user)=>user.id === parseInt(req.params.id));
    if(userIndex === -1){
        return res.status(404).json({message:"User not found"});
    }
    database.splice(userIndex,1);
    res.status(204).send();
})


app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})