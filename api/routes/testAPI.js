var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/ocs_athletes.db');

router.get('/', function (req, res, next) {
  db.serialize(function () {
    db.each('SELECT athlete_id, name, surname FROM Athlete', function (
      err,
      row
    ) {
      res.send(row);
    });
  });

  db.close();
});

module.exports = router;
