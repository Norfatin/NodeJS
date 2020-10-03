const http = require("http");

const express = require("express");

const app = express();
app.use("/users", (req, res, next) => {
  console.log("second middleware");
  res.send("<h1>Users page for Assignment2</h1>");
});

app.use("/", (req, res, next) => {
  console.log("/ middleware");
  res.send("<h1>Assignment2 page</h1>");
});

app.listen(3000);
