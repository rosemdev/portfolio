const express = require('express')

const app = express()

const port = process.env.PORT || 8081;

app.get('/', (req, res) => {
    console.log('ydssss', req, res);
    res.send({rosem: 'test'});
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})

