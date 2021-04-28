// import express, {} from 'express';
const express = require('express');
const port = 8080;
const app = express();

app.use(express.static('scrabble/scrabbleBoard'));
app.listen(port, function () {
  console.log('server initiates where ', port);
});

// the server may take a few moments to run. Please be patient. :)
