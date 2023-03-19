let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Tournament = require('../model/tournament');
module.exports.displayTournamentList = (req, res, next) => {
    Tournament.find((err, tournamentList) => {
        if (err) {
            return console.error(err);
        }
        else {
            res.render('tournament/tournamentList', { title: 'Tournament List', tournamentList: tournamentList });
        }
    });
}

module.exports.displayAddTournamentScreen = (req, res, next) => {
    res.render('book/add', { title: 'Create Tournament' })

}

module.exports.processAddTournament = (req, res, next) => {
    // title: String,
    // owner: String,
    // sportType: String,
    // location: String,
    // teamCount: Number
    let newTournament = Tournament({
        "title": req.body.title,
        "owner": req.body.owner,
        "sportType": req.body.sportType,
        "location": req.body.location,
        "teamCount": req.body.teamCount
    });
    Tournament.create(newTournament, (err, Tournament) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/tournamentsList');
        }
    });
}

module.exports.displayEditournamentScreen = (req, res, next) => {
    let id = req.params.id;
    Tournament.findById(id, (err, tournamentToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('tournament/edit', { title: 'Edit Book', book: tournamentToEdit });
        }
    });
}

module.exports.processEditTournament = (req, res, next) => {
    let id = req.params.id
    console.log(req.body);
    let updatedBook = Book({
        "_id": id,
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price
    });
    Book.updateOne({ _id: id }, updatedBook, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/tournamentsList');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;
    Book.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/tournamentsList');
        }
    });
}