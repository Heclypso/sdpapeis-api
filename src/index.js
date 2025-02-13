const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.redirect("https://bxmailer-front.vercel.app");
});

app.get("/newtest", (req, res) => {
    res.redirect("https://bxmailer-front.vercel.app/newtest.html");
});

app.get("/about", (req, res) => {
    res.redirect("https://bxmailer-front.vercel.app/about.html");
});

app.get("/feedback", (req, res) => {
    res.redirect("https://bxmailer-front.vercel.app/feedback.html");
});

module.exports = (req, res) => {
    app(req, res);
};
