const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const PORT = 3000;

const todosdata = [
    { id: '1', title: 'Workout' },
    { id: '2', title: 'Coding' }
];

app.get('/todos', (req, res) => {
    res.send(todosdata);
})

app.get('/todos/:id', (req, res) => {
    const todoId = req.params.id;
    const todo = todosdata.find(todo => todo.id === todoId);
    res.send(todo);
})

app.post('/todos', (req, res) => {
    const todoId = req.body;
    todosdata.push(todoId)
    res.send(todosdata);
})

app.put('/todos/:id', (req, res) => {
    const todoId = req.params.id;
    const updatedTitle = req.body.title;

    const todoIndex = todosdata.findIndex(todo => todo.id === todoId);

    
    todosdata[todoIndex].title = updatedTitle;
    res.send(todosdata);
})

app.delete('/todos/:id', (req, res) => {
    const todoId = req.params.id;
    const todoIndex = todosdata.findIndex(todo => todo.id === todoId)

    if(todoIndex !== -1){
        todosdata.splice(todoIndex, 1);
        res.send(todosdata);
    } else {
        res.send(404).send('Todo not found');
    }
})



app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})