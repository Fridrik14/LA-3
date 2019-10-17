const mongoose = require('mongoose');
const schema = require("./../schema/types/index");
const Schema = mongoose.Schema;




const connection = mongoose.createConnection('mongodb+srv://Olafur:LabAssignment2@cluster0-paqgp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true,useUnifiedTopology: true });

module.exports = {
    player: connection.model('Player',{}),
    pickupGame: connection.model('PickUpGame',{})
};