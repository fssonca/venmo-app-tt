const createUser = require("./app/create-user");
const sendMoney = require("./app/send-money");

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); // <==== parse request body as JSON

// CREATE USER
app.use("/create-user", createUser);

// Send money operation
app.use("/send-money", sendMoney);

app.use("");// user activity

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
