var getKeys = function (obj) {
    let keys = [];
    for (let key in obj) {
        keys.push(key);
    }
    return keys;
}

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));


MongoClient.connect(db.url, (err, client) => {
    if (err) return console.log(err)
    const database = client.db('notable');

    require('./app/routes')(app, database);
    app.listen(port, () => {
        console.log("Im alive on " + port);
    });
});