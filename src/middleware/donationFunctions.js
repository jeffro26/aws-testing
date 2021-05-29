const { createLogItem } = require("../utils/createLog");

const makeDonation = (req, res, next) => {
  if (!req.body.data) {
    createLogItem("error", "ERR001");
  }
  const { amount, currency } = req.body.data;
  next();
};

module.exports = { makeDonation}
