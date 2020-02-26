const router = require("express").Router();
const db = require("../model/comments");

router.post("/api/message", function (req, res) {

    console.log(req.body)

    db.create(req.body)
    .then(function (response) {
            res.json(response)
        })
    .catch(function (err) {
        console.log(err);
        res.status(422).json(err)
    })

});

module.exports = router