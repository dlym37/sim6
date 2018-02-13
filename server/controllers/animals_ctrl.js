module.exports = {
    get_animals: (req, res) => {
        const db = req.app.get('db');

        db.get_animals().then(response => {
            console.log('ctrl', response);
            res.status(200).send(response);
        })
    }
}