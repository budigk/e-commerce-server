if(process.env.NODE_ENV != "production") require("dotenv").config();

const express = require('express');
const errHandler = require('./middlewares/errHandler.js');
const cors = require('cors')
const app = express();
const routes = require('./routes');

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/', routes)
app.use(errHandler);

module.exports = app