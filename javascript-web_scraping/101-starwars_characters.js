#!/usr/bin/node
/*
const request = require('request');
const args = process.argv;
let dicList = {};

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

request(`https://swapi-api.hbtn.io/api/films/${args[2]}`, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    const charEnd = data.characters;
    const loopTime = charEnd.length;
    for (let i = 0; i < loopTime; i++) {
