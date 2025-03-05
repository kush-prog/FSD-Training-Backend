import express from 'express';

const users = [{
    id: 1,
    name: "Kanak",
    age: 20
}];

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send(users);
});

// Middleware to parse the incoming data
app.use(express.json()); 

app.post("/", (req, res) => {
    const body = req.body;
    console.log(body);
    res.send("Server is recieving the data...");
});

app.post("/api/createUser", (req, res) => {
    const { name, age } = req.body;
    const newId = users.length>0 ? users[users.length -1].id+1 : 1;
    users.push({id: newId, name, age});
    res.send("New user is created successfully.");
});

app.get("/api/user/:id", (req, res) => {
    const { id } = req.params;
    const user = users.find(user => user.id == id);
    res.send(user);
});

app.patch("/api/updateUser/:id", (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const index = users.findIndex(user => user.id == id);
    users[index].name = name;
    res.send("User is updated successfully.");
});

app.delete("/api/deleteUser/:id", (req, res) => {
    const { id } = req.params;
    const index = users.findIndex(user => user.id == id);
    users.splice(index, 1);
    res.send("User is deleted successfully.");
});

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
})