const router = require("express").Router();
const db = require("../model/comments");

let emailer = (recipient, subject, message) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'volunteamsters@gmail.com',
            pass: ''
        }
    });

    var mailOptions = {
        from: 'volunteamsters@gmail.com',
        to: recipient,
        subject: subject,
        text: message
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

router.post("/api/message", function (req, res) {

    console.log(req.body)

    db.create(req.body)
    .then(function (response) {
        let emailBot = (input) => {

            let emailList = [];
            for (i = 0; i < input.length; i++) {
                db.Users.findById(input.attendees[i]).select("email").then( (response ) => {
                emailList.push(response);
                }) 
            }
            emailer(emailList.toString, "Test!",
                    `Your event has been changed!  Here are the details \n
                    `, () => {
                });
        }
        emailBot(response);
        
            res.json(response)
        })
    .catch(function (err) {
        console.log(err);
        res.status(422).json(err)
    })

});

module.exports = router