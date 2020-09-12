const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const {check, validationResult} = require('express-validator');

const serverValidationErrors = require('./data/serverValidationErrors')

const app = express()

const port = process.env.PORT || 8081;
const publicDirectoryPath = path.join(__dirname, '../dist');
const urlencodedParser = bodyParser.urlencoded({extended: true})

app.use(express.static(publicDirectoryPath));
app.use(urlencodedParser);
app.use(bodyParser.json());


app.get('/rosem',(req, res) => {
    res.send({rosem: 'test'});
});

app.post('/contact', urlencodedParser, [
    check(['name', 'lastName', 'message'])
    .exists().withMessage(serverValidationErrors.valueMissing)
    .not().isEmpty().withMessage(serverValidationErrors.valueMissing)
    .isLength({min: 7, max: 15}).withMessage(serverValidationErrors.tooShort)
    .isLength({max: 15}).withMessage(serverValidationErrors.tooLong),

    check(['phone'])
    .optional()
    .isMobilePhone().withMessage(serverValidationErrors.badInput)
    .isNumeric().withMessage(serverValidationErrors.invalidNumberField),


    check('email')
    .exists().withMessage(serverValidationErrors.valueMissing)
    .isEmail().withMessage(serverValidationErrors.invalidEmail)
    .normalizeEmail(),
], (req, res) => {
    console.log(serverValidationErrors.valueMissing);
    

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    console.log('body:', req.body);
    res.status(200).send(req.body);

});

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})

