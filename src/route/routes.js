const express = require("express");
const Router = new express.Router();
const projectData = require("../database/model");
const bcrypt = require("bcryptjs");

Router.get("/", (req, res) => {
    res.render('index');
});
Router.get("/register", (req, res) => {
    res.render('register');
});
Router.post("/register", async (req, res) => {

    try {
        const pass = req.body.pass;
        const conPass = req.body.cpass;
        if (pass === conPass) {
            const userData = new projectData({
                name: req.body.name,
                email: req.body.email,
                mobile: req.body.mobile,
                password: pass,
                conPassword: conPass
            });
            const data = await userData.save();
            res.render('mainPage', { name: userData.name })
        } else {
            res.send(" password does not match ")
        }
    } catch (error) {
        res.send("some error occured")
    }
});
Router.get("/login", (req, res) => {
    res.render('login');
});

Router.post("/login", async (req, res) => {
    try {
        const login = await projectData.findOne({ email: req.body.email });
        const logPassword = req.body.pass;
        const checkPass = await bcrypt.compare(logPassword, login.password);
        if (checkPass) {
            res.render('mainPage', {
                name: login.name
            })
        } else {
            res.send("invalid details");
        }

    } catch (error) {
        res.send("input error");
    }
});



module.exports = Router;