import express from 'express';
const app = express();
const port = 3000;


app.get('/api', (req, res) => {
    res.send('hello, world');
})

app.listen(port)