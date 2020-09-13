const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const {check, validationResult} = require('express-validator');

const serverValidationErrors = require('./data/serverValidationErrors');
const sendEmail = require('./sendEmail');

const app = express()

const port = process.env.PORT || 8081;
const publicDirectoryPath = path.join(__dirname, '../dist');
const index = path.resolve(publicDirectoryPath, 'index.html');
const urlencodedParser = bodyParser.urlencoded({extended: true})

app.use(express.static(publicDirectoryPath));
app.use(urlencodedParser);
app.use(bodyParser.json());

// All GET request handled by INDEX file
app.get('*',(req, res) => {
    res.sendFile(index);
});

app.post('/contact', urlencodedParser, [
    check(['name'])
    .exists().withMessage(serverValidationErrors.valueMissing)
    .notEmpty().withMessage(serverValidationErrors.valueMissing)
    .bail()
    .isLength({min: 7, max: 15}).withMessage(serverValidationErrors.tooShort)
    .isLength({max: 40}).withMessage(serverValidationErrors.tooLong),

    check(['lastName'])
    .exists().withMessage(serverValidationErrors.valueMissing)
    .notEmpty().withMessage(serverValidationErrors.valueMissing)
    .bail()
    .isLength({min: 7, max: 15}).withMessage(serverValidationErrors.tooShort)
    .isLength({max: 40}).withMessage(serverValidationErrors.tooLong),

    check(['email'])
    .exists().withMessage(serverValidationErrors.valueMissing)
    .notEmpty().withMessage(serverValidationErrors.valueMissing)
    .bail()
    .isEmail().withMessage(serverValidationErrors.invalidEmail)
    .normalizeEmail(),

    check(['phone'])
    .optional({checkFalsy: true})
    .isMobilePhone().withMessage(serverValidationErrors.badInput)
    .isNumeric().withMessage(serverValidationErrors.invalidNumberField),


    check('message')
    .exists().withMessage(serverValidationErrors.valueMissing)
    .notEmpty().withMessage(serverValidationErrors.valueMissing)    
    
], (req, res) => {
    console.log(serverValidationErrors.valueMissing);
    

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    res.status(200).send(req.body);

    const emailData ={
        from: {
            name: `${req.body.name} ${req.body.lastName}`,
            address: req.body.email
        },
        text: req.body.message
    }

    const {from, text} = emailData;

    sendEmail(from, text);

});

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})

