const express = require("express");
const router = express.Router();

router.post(
  "/:customerId?",
  (req, res) => {
    res.status(200).json(req.result);
  }
);

module.exports = router;