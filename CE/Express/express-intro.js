import express, { request } from 'express';

// Create an express server the variable name of the serever cann be 
// same as used in http mdoule ,i.e. server, but it is not necessary
// to use the same name

// Here we use the express function to create a new express server insead of http.createServer
// The express function returns an object of type express.Application
const app = express();

app.get('/', (request, response) => {
    response.send('Hello World!');
})

app.get('/api/:name', (request, response) => {
    try{
        const data = request.params;
        response.send(`Hello ${Date.name}!`);
    }catch(error){
        console.log(error.message);
    }
})

// http://localhost:3000/api?name=Kush%20Chauhan&rollno=36
app.get ('/api', (request, response) => {
    try{
        const { name, rollno }  = request.query;
        if(!name){
            response.send({
                status: 400,
                message: "Name is required"
            });
            response.status(400).send("Name is required");
        }
        else{
            response.send(`Hello ${name} and your roll is ${rollno}!`);
        }
    }
    catch(err){
        console.log(err.message);
    }
})


const port = 3000;
app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`)
});