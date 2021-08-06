require("dotenv").config();
const { name } = require("ci-info");
const express = require("express");
const server = express();
const userData = require("./user.json");

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
    res.send(`please write a number under ${userArr.length}`);
  } else {
    res.send(`username : ${userArr[req.params.id]}`);
  }
});

server.get("/profile/:id", (req, res) => {
  if (req.params.id >= userData.length) {
    res.send(`please write a number between 0 and ${userData.length - 1}`);
  } else {
    res.send(
      `User : ${userData[req.params.id].name} 
      ${userData[req.params.id].profileEmoji}`
    );
  }
});
