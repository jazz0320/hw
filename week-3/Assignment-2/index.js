const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello, My Server!')
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