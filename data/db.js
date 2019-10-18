const mongoose = require('mongoose');
var graphql = require ('graphql');
const schema = require("./../schema/types/index");
const Schema = mongoose.Schema;
/* 
   Cannot do direct duplacation
   mongodb schema and graphql schema
   is not the same
*/

const connection = mongoose.createConnection('mongodb+srv://Olafur:LabAssignment2@cluster0-paqgp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true,useUnifiedTopology: true });

module.exports = {
    player: connection.model('Player',{}),
    pickupGame: connection.model('PickUpGame',{})
};