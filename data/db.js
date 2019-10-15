const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb+srv://Olafur:LabAssignment2@cluster0-paqgp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true,useUnifiedTopology: true });

module.exports = {};