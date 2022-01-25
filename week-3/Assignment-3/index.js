const express = require('express')
const router = express.Router();
const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.send('Hello, My Server!')
})
app.use(express.static('/sum.html', express.static('html')));
app.get('/sum.html', (req, res) => {
    res.sendFile(__dirname + '/sum.html');
})

app.get('/getData', (req, res) => {
    if (req.query.number > 0) {
        const result = ((1 + Number(req.query.number)) * Number(req.query.number)) / 2;
        res.send(`${result}`);
    } else if (req.query.number) {
        res.send('Wrong Parameter');
    } else {
        res.send('Lack of Parameter');
    }
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})