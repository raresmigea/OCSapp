var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/ocs_athletes.db');

router.get('/', function (req, res, next) {
  db.serialize(function () {
    db.all(
      // 'SELECT name FROM sqlite_master WHERE type="table"',
      'SELECT g.game_id, g.city, g.year, ar.athlete_id, ar.gold, ar.silver, ar.bronze FROM(Game g join AthleteResult ar on g.game_id = ar.game_id) order by g.year desc',
      function (err, rows) {
        return res.send(rows);
      }
    );
  });
});

module.exports = router;
