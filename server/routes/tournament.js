let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let tournamentController = require('../controllers/tournament');
//GET ROUTE for the book list page - READ OPERATION
router.get('/',tournamentController.displayTournamentList);
/*GET Route for displaying the Add page - CREATE operation*/
router.get('/add',tournamentController.displayAddTournamentScreen);
/*POST Route for processing the Add page - CREATE operation*/
router.post('/add',tournamentController.processAddTournament);
/*GET Route for displaying the Edit page - UPDATE operation*/
router.get('/edit/:id',tournamentController.displayEditournamentScreen);
/*POST Route for processing the Edit page - UPDATE operation*/
router.post('/edit/:id',tournamentController.processEditTournament);
/*GET to perform Deletion - DELETE operation*/
router.get('/delete/:id',tournamentController.performDelete);
module.exports = router;