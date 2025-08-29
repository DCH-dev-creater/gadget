const express = require("express");
const routerAuth = require("./routes/routerAuth");
const routerBanner = require("./routes/routerBanner");

const app = express();

app.use(express.json());
app.use("/v1/", routerAuth);
app.use("/v1/", routerBanner);

module.exports = app;
