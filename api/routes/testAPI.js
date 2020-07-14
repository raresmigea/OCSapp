var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/ocs_athletes.db');

router.get('/', function (req, res, next) {
  db.serialize(function () {
    db.all('SELECT name FROM sqlite_master WHERE type="table"', function (
      err,
      rows
    ) {
      const result = [];
      rows.forEach(
        (table) => awaitdb.run('SELECT * FROM ' + table.name),
        function (err, innerRows) {
          result.push(innerRows);
        }
      );
      // console.log('restult: ', result);
      return res.send(result);
    });
  });
});

module.exports = router;
