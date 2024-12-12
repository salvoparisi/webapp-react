const connection = require('../data/db.js')

const index = (req, res) => {
    const sql = 'SELECT * FROM `db-webapp`.movies'

    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Errore durante l\'esecuzione della query:', err.message)
            res.status(500).send('Errore nel server')
            return;
        }
        if (results.length == 0) {
            res.status(404).send('Nessun elemento trovato')
            return
        }

        res.json(results);
    });
}

const show = (req, res) => {
    const id = req.params.id;

    const sqlMovie = "SELECT * FROM `db-webapp`.movies WHERE id=?";
    const sqlReviews = "SELECT * FROM `db-webapp`.reviews WHERE movie_id=?";

    connection.query(sqlMovie, [id], (err, movieResults) => {
        if (err) {
            console.error('Errore durante l\'esecuzione della query del film:', err.message);
            res.status(500).send('Errore nel server');
            return;
        }

        if (movieResults.length === 0) {
            res.status(404).send(`Nessun film trovato con ID ${id}`);
            return;
        }

        const movie = movieResults[0];

        connection.query(sqlReviews, [id], (err, reviewResults) => {
            if (err) {
                console.error('Errore durante l\'esecuzione della query delle recensioni:', err.message);
                res.status(500).send('Errore nel server');
                return;
            }

            const response = {
                ...movie,
                reviews: reviewResults
            };

            res.json(response);
        });
    });
};




module.exports = {
    index,
    show,
}