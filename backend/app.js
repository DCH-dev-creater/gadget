const express = require("express");
const routerAuth = require("./routes/routerAuth");

const app = express();

app.use(express.json());
app.use("/v1/", routerAuth);

module.exports = app;
