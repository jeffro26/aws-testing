const express = require("express");
const router = express.Router();
const { makeDonation } = require("../middleware/donationFunctions");

router.post("/:customerId?", makeDonation, (req, res) => {
  res.status(200).json(req.result);
});

module.exports = router;
