var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/ocs_athletes.db');

db.serialize(function () {
  db.each('SELECT athlete_id, name, surname FROM Athlete', function (err, row) {
    console.log('User: ', row);
  });
});

db.close();
