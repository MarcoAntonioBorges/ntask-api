require('dotenv').config();
const express = require("express");
const consign = require("consign");

const app = express();

consign({
    verbose: process.env.APP_DEBUG === 'true' || false,
    locale: 'pt-br'
}).include("models")
    .then("libs/middlewares.js")
    .then("routes")
    .then("libs/boot.js")
    .into(app);