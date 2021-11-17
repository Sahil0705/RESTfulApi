const express = require("express");
const MensRanking = require("../src/models/mens.js");
const router = require("../src/routers/men.js");
const app = express();

require("../src/db/conn.js");
const hbs = require('hbs');
app.set("view engine","hbs");

const port = process.env.PORT || 4000;

app.use(express.json());

app.use(router);

app.listen(port,()=>
{
    console.log(`Connection is live at port no ${port}`);
});