const mongoose = require('mongoose');
const Models = require("./../schema/Models");

// ,()=>{console.log("Connected to database.");}
const connection = mongoose.createConnection('mongodb+srv://Olafur:LabAssignment2@cluster0-paqgp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true,useUnifiedTopology: true });

module.exports = {
    Player: connection.model('Player',Models.Player),
    PickUpGame: connection.model('PickUpGame',Models.PickUpGame)
};