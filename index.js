require("dotenv").config();
const express = require("express");
const server = express();

const PORT = process.env.PORT;

server.listen(PORT, () => console.log(`server is runnig on port : ${PORT}`));

server.get("/", (req, res) => res.send("server is runnig"));

server.get("/user/:id", (req, res) => {
  const userArr = [
    "User One",
    "User Two",
    "User Three",
    "User Four",
    "User Five",
    "User Six",
  ];

  if (req.params.id > userArr.length) {
    return res.send(`please write a number under ${userArr.length}`);
  } else {
    res.send(`username : ${userArr[req.params.id]}`);
  }
});
