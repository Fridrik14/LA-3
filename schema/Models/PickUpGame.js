const Schema = require('mongoose').Schema;




module.exports = new Schema({
    start:{type:Date,required:true},
    end:{type:Date,required:true},
    location:Schema.Types.ObjectId,
    registeredPlayers:{type:Array},
    host:Schema.Types.ObjectId
});