const router = require("express").Router();
const db = require("../model/comments");
const nodemailer = require("nodemailer");

require('dotenv').config()

let emailer = (recipient, subject, message) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'kensen.hirohata@gmail.com',
            pass: process.env.gmailPassword
        }
    });

    var mailOptions = {
        from: 'kensen.hirohata@gmail.com',
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

                let emailList = `${req.body.email}, hirohtk@gmail.com`;

                emailer(
                    emailList,
                    "Kensen's Portfolio Messager",
                    `Hello ${req.body.name}, \n
                    I appreciate you getting in touch with me through my portfolio.  Please lookout for a response from my email address hirohtk@gmail.com.\n
                    Best regards,\n
                    Kensen Hirohata
                    `
                );

            res.json(response)
        })
        .catch(function (err) {
            console.log(err);
            res.status(422).json(err)
        })

});

module.exports = router