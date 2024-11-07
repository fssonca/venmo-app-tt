const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  const user_id = req.params.id;

  // todo: query activity of the userId in DESC order by time
  res.json({
    user_id,
    activity: [],
  });
});

module.exports = router;
