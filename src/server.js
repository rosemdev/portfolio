const express = require('express');
const path = require('path');

const app = express()

const port = process.env.PORT || 8081;


const publicDirectoryPath = path.join(__dirname, '../dist')

app.use(express.static(publicDirectoryPath))

app.get('/rosem', (req, res) => {
    res.send({rosem: 'test'});
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})

