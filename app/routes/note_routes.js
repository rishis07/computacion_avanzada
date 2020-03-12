module.exports = function (app, db) {
    app.post('/notes', (req, res) => {
        const note = { text: req.body.body, title: req.body.title };

        db.collection('notes').insert(note, (err, result) => {
            if (err) throw err;
            res.send({ 'error': 'Something went wrong' });
            client.close();
        });
    });
};