const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const data = req.body;

  // todo: store the user information in a database (mongo, mysql, etc)

  res.status(201).json({
    ok: true,
  });
});

module.exports = router;
