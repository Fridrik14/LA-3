/*
    If the db connection is correct
    and the mutations are correct
    then this is the only thing left
    https://basketball-fields.herokuapp.com/api/basketball-fields
*/

// var Client = require('node-rest-client').Client;
// var remoteURL = "";

// var client = new Client();

// const v = client.get(remoteURL, function (data, response) {return data;});


var https = require('https');

var options = {
    host: 'basketball-fields.herokuapp.com',
    path: '/api/basketball-fields'
}
var request = https.request(options, function (res) {
    var data = '';
    res.on('data', function (chunk) {
        data += chunk;
    });
    res.on('end', function () {
        console.log(data);

    });
});
request.on('error', function (e) {
    console.log(e.message);
});
request.end();



module.exports = {
    
};
    
