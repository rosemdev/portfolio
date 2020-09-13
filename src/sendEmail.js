const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
       user: 'e87b724f27a25b',
       pass: '1e1504830cb5b0'
    }
});

const sendEmail = (from, text) => {

    const message = {
        from, // Sender address
        to: 'for@me.com',   // List of recipients
        subject: 'New email from rosem-portfolio!', // Subject line
        text // Plain text body
    };
    
    transport.sendMail(message, function(err, info) {
        if (err) {
          console.log(err, info)
        }
    });
}

module.exports = sendEmail;
