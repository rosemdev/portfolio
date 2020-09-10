const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const {check, validationResult} = require('express-validator');

const app = express()

const port = process.env.PORT || 8081;
const publicDirectoryPath = path.join(__dirname, '../dist');
const urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(express.static(publicDirectoryPath));
app.use(urlencodedParser)

app.get('/rosem',(req, res) => {
    res.send({rosem: 'test'});
});

app.post('/contact', urlencodedParser, [
    check('name')
        .exists().withMessage('defaultValidationErrors.invalidNumberField')
        .isLength({min: 5}).withMessage('defaultValidationErrors.invalidNumberField')
    
], (req, res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        res.json(errors.array());
    }

    res.status(200).json({test: 'from server'});

});

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})

