const sqlite3 = require('sqlite3').verbose();

module.exports.select = (path, table, where) => {
    var db = new sqlite3.Database(path, sqlite3.OPEN_READONLY, (err) => {
        if (err) {
            console.error(err.message);
        }
    });

    return new Promise(function (resolve, reject) {
        let sqlInFields = `SELECT * FROM [${table}] WHERE ${where}`;
        db.all(sqlInFields, (err, rows) => {
            if (err) {
                console.error(err.message);
                reject(err);
            } else {
                resolve(rows);
            }
        });

        db.close((err) => {
            if (err) {
                console.error(err.message);
            }
        });
    });
}