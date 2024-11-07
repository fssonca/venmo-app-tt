const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const data = req.body;
  const { sender, receiver, amount, description } = data;

  // todo: query sender balance here -> sender.id
  const sender_balance = 230.45;

  if (sender_balance < amount) {
    // sender does not have enough balance for the transaction
    res.status(500).json({
      ok: false,
      error: {
        message: "user does not have enough funds",
        typeError: "INSUFFICIENT_FUNDS",
      },
    });
  } else {
    // Simulate receiver balance update
    const receiver_current_balance = 100;
    const receiver_new_balance = receiver_current_balance + amount;

    // Transaction data
    const transaction_data = {
      sender: sender.id,
      receiver: receiver.id,
      amount,
      description,
    };

    res.json({ ok: true });
  }
});

module.exports = router;
