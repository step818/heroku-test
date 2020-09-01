const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.send("Welcome home");
});

server.get("/github", (req, res) => {
  res.send("Welcome to githu for real");
});

let PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log("server listening");
});
