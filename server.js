// server.js
var http = require("http");

var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const CoinRouter = require('./routes/CoinRouter');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var server = app.listen(port);
app.use(bodyParser.json());

var firebaseConfig = {
  apiKey: "AIzaSyBDGf0d3yJD6w8oF2btje7-AfSpHPiKS6s",
  authDomain: "trampme-a9851.firebaseapp.com",
  databaseURL: "https://trampme-a9851.firebaseio.com",
  projectId: "trampme-a9851",
  storageBucket: "trampme-a9851.appspot.com",
  messagingSenderId: "825623893195",
  appId: "1:825623893195:web:56285a92661be4afea374e",
  measurementId: "G-88VGHLYP14"
};

// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);
var defaultFirestore = db.firestore();

console.log("Server running at", server);
module.exports.db = db.database();

app.use(express.static('public'));
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', CoinRouter);

app.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use("/post", CoinRouter);

const admin = require('firebase-admin');
let serviceAccount = require('path/to/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();