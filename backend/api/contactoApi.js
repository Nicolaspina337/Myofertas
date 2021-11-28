const nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "roncososebastian@gmail.com",
    pass: "12345sebas",
  },
});

// enviar correo a un contacto
router.post("/send", (req, res) => {
  let params = req.body;

  var mailOptions = {
    from: "roncososebastian@gmail.com",
    to: params.para,
    subject: params.asunto,
    text: params.mensaje,
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      res.json(error);
    } else {
      res.json(info);
    }
  });
});

module.exports = router;
