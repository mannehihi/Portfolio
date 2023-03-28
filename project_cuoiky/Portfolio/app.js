const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
var bodyParser = require("body-parser");
var cors = require("cors");
const nodemailer = require("nodemailer");
var sgTransport = require("nodemailer-sendgrid-transport");

require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "man31minh@gmail.com",
    pass: "gnjgnrmdefbivafy",
  },
});

app.post("/sendmail", (req, res) => {
  const { name, email, jobtypes, message } = req.body;

  if (!name) {
    return res.status(400).json({ error: "please add your name" });
  }
  if (!email) {
    return res.status(400).json({ error: "please add your email" });
  }
  if (!jobtypes) {
    return res.status(400).json({ error: "please add your jobtypes" });
  }
  if (!message) {
    return res.status(400).json({ error: "please add your message" });
  }

  const mailOptions = {
    from: "man31minh@gmail.com",
    to: email,
    subject: "Jobs",
    html: `
        <h5>Detail infomation:</h5>
        <ul>
            <li><p>Name: ${name}</p></li>
            <li><p>Email: ${email}</p></li>
            <li><p>Job types: ${jobtypes}</p></li>
            <li><p>Message: ${message}</p></li>
        </ul>
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  res.json({ success: "your email has bent send" });
});

app.get("/test", function (req, res) {
  res.send("Hello World");
});

app.listen(PORT, function (req, res) {
  console.log("server connected");
});
