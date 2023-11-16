const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 8080;

app.use(bodyParser.json());

let notes = [];

app.get('/notes', (req, res) => {
    res.json({notes});
});
app.post('/notes', (req, res) => {
    const {title, content} =req.body;
    const newNote = {title, content}

    notes.push(newNote);
    res.json({message: 'Note added Successfully', note: newNote})
})

app.listen(port, () => {
    console.log(`server is running successfully on localhost ${port}`)
})