class NewController {
    index(req, res) {
        res.render('new');
    }
}

module.exports = new NewController();
