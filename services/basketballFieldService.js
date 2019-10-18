/*
    If the db connection is correct
    and the mutations are correct
    then this is the only thing left
*/

var Client = require('node-rest-client').Client;
var remoteURL = "https://basketball-fields.herokuapp.com/api/basketball-fields";

var client = new Client();

client.get(remoteURL, function (data, response) {return data;});
module.exports = {
    client
};
    
