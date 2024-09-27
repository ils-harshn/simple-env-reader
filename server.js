require("dotenv").config();
const express = require("express");
const http = require("http");
const loadSecrets = require("./bin");

const app = express();

const server = http.createServer(app);

app.get("/status", (req, res) => {
  res.json({
    status: "working",
    app_name: process.env.APP_NAME,
    SECRET_VERSION_NAME: process.env.SECRET_VERSION_NAME,
  });
});

loadSecrets().then(() => {
  server.listen(3000, () => {
    console.log(`server is running at 3000`);
  });
});
