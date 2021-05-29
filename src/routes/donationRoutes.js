const express = require("express");
const router = express.Router();
const {
  makeDonation,
  makeResponse,
} = require("../middleware/donationFunctions");

router.post("/donate", makeDonation, makeResponse, (req, res) => {
  res.status(200).json(req.result);
});

module.exports = router;
