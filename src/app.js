const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  return res.send("Hello, Express!");
});

app.get("/user", (req, res) => {
  return res.send("Hello user");
});

app.get("/cars", (req, res) => {
  return res.send("Hello car");
});

app.get("/devs", (req, res) => {
  return res.send("Hello dev Sara");
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
