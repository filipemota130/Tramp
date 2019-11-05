const express = require('express');
const CoinRouter = express.Router();
const admin = require('firebase-admin');

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

const Coin = require('../models/Coin.model');

const Usuario = require('../models/Usuario.model');

CoinRouter.route('/post').post(function (req, res) {
   const usuario = new Usuario(req.body);
   firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    console.log(errorCode);
    var errorMessage = error.message;
    console.log(errorMessage)
    // ...
  });
   console.log(usuario);
   res.redirect("/login")

})
module.exports = CoinRouter;

