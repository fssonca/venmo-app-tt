const express = require("express");
const app = express();

const UserRetrieveActivity = app.get(
  "/user/retrieve-activity/:id",
  (req, res) => {
    // todo: query activity of the user in DESC order by time
  }
);
