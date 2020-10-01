const https = require('https');


function request(options, data) {
    
    const req = https.request(options, (res) => {
        let data = '';
    
        console.log('Status Code:', res.statusCode);
    
        res.on('data', (chunk) => {
            data += chunk;
        });
    
        res.on('end', () => {
            console.log('Body: ', data);
        });
    
    }).on("error", (err) => {
        console.log("Error: ", err.message);
    });
    
    req.write(data);    
    req.end();

}


module.exports = request;