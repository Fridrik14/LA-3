const mongoose = require('mongoose');
var graphql = require ('graphql');
const schema = require("./../schema/types/index");
const Schema = mongoose.Schema;
/* 
   Cannot do direct duplacation
   mongodb schema and graphql schema
   is not the same
*/

// https://blog.solutotlv.com/graphql-to-mongodb-or-how-i-learned-to-stop-worrying-and-love-generated-query-apis/
// https://www.compose.com/articles/using-graphql-with-mongodb/

const connection = mongoose.createConnection('mongodb+srv://Olafur:LabAssignment2@cluster0-paqgp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true,useUnifiedTopology: true });

module.exports = {
    Player: connection.model('Player',{}),
    PickUpGame: connection.model('PickUpGame',{})
};