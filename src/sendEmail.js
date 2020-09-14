const request = require('./request');

const options = {
    hostname: 'api.emailjs.com',
    path: '/api/v1.0/email/send',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    }
};


const sendEmail = (template_params) => {


    const emailData = JSON.stringify({
        service_id: 'contact_service',
        template_id: 'template_xjguqro',
        user_id: 'user_gi4mRSNo9TFJA7IhaLO8o',
        template_params,
    });

    request(options, emailData);
};


module.exports = sendEmail;
 



