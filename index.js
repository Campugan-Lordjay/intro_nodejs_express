const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());


app.use((req, res, next) => {
console.log(`${req.method} ${req.url}`);
next();
});


app.get('/', (req, res) => {
res.send('Hello World!');
});

app.get('/about', (req, res) => {
res.send('About Us');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
    });
    
app.post('/submit', (req, res) => {
const data = req.body;
res.send(`Received: ${JSON.stringify(data)}`);
});



const items = ['Apple', 'Banana', 'Guava'];

app.get('/items', (req, res)=>{
res.json(items);
});

app.post('/items', (req, res) =>{
const newItem = req.body.item;
items.push(newItem);
res.json(items);
});

// Start Server
app.listen(port, () => {
console.log(`Server running at http://localhost:${port}`);
});