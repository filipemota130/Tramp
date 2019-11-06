const express = require('express');
const CoinRouter = express.Router();
const user = require('../models/User');

CoinRouter.route('/').get(function (req, res) {
  res.render('index');
});

CoinRouter.route('/cadastro').get(function (req, res) {
    res.render('cadastro');
});

CoinRouter.route('/cadastro2').get(function (req, res) {
    res.render('cadastro2');
});

CoinRouter.route('/login').get(function (req, res) {
    res.render('login');
});

CoinRouter.route('/create').get(function (req, res) {
    res.render('create');
});

CoinRouter.route('/servicos').get(function (req, res) {
    res.render('servicos');
});

CoinRouter.route('/post').post(function (req, res) {
   const usuario = new user(req.body);
   console.log(usuario);
   res.redirect("/login")

})
module.exports = CoinRouter;

