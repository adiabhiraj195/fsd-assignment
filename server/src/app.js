const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const router = require("./router/index.js");

const app = express();

app.use(morgan("combined"));
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
}));

app.use(router);

module.exports = app;