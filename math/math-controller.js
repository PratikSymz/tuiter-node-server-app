const MathController = (app) => {
    app.get('/add/:a/:b', (req, res) => {
        const a = parseInt(req.params.a)
        const b = parseInt(req.params.b)
        res.send((a + b).toString())
    })
}

module.exports = MathController