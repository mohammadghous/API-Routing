const express = require("express");

let app = express();

app.get("/", (Request, Response) => {
  Response.send("Home Page");
});

app.get("/about", (Request, Response) => {
  Response.send("About Page");
});

module.exports = app;
