// import express, {} from 'express';
const express = require('express');
const port = 8080;
const app = express();

app.use(express.static('scrabble/scrabbleBoard'));
app.listen(port, function () {
  console.log('server initiates where ', port);
});

app.use(express.static('/scrabble/rules/rules.html'));
