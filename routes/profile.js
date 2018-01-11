module.exports = (app, db) => {
    app.get('/profile', (req, res) => {
        if (req.session.user) {
            res.render("profile", {
                name: req.session.user.name
            })
        } else {
            res.render("login")
        }
    })
}
