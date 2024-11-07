const express = require("express");
const app = express();

app.use(express.json()); // <==== parse request body as JSON

const CreateUser = app.post("/create-user", (req, res) => {
  const data = req.body;

  // todo: store the user information in a database (mongo, mysql, etc)

  res.status(201).json({
    ok: true,
  });
});

module.exports = CreateUser;
