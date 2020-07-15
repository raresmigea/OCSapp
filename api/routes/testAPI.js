var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/ocs_athletes.db');

router.get('/', function (req, res, next) {
  db.serialize(function () {
    db.all(
      // 'SELECT name FROM sqlite_master WHERE type="table"',
      'SELECT a.athlete_id, a.name, a.surname, a.date_of_birth, a.bio, a.height, a.weight, ap.photo, ap.mime_type,ar.gold, ar.silver, ar.bronze, g.city, g.year FROM(((Athlete a JOIN AthletePhoto ap ON a.photo_id = ap.photo_id) JOIN AthleteResult ar ON a.athlete_id = ar.athlete_id) JOIN Game g ON ar.game_id = g.game_id)',
      function (err, rows) {
        return res.send(rows);
      }
    );
  });
});

module.exports = router;
