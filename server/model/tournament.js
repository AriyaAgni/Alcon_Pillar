let mongoose = require('mongoose');
let tournamentModel = mongoose.Schema({
    title: String,
    owner: String,
    sportType: String,
    location: String,
    teamCount: Number
},
{
    collection:"tournaments"
});

module.exports = mongoose.model('tournament',tournamentModel);