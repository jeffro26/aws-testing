const { createLogItem } = require("../utils/createLog");
const { setItemInCache, timesClientHasDonated } = require("../cache/nodeCache");

const makeDonation = (req, res, next) => {
  if (!req.body.data) {
    createLogItem("error", "ERR001");
  }
  const { customerId, amount, currency } = req.body.data;

  const date = Date.now();

  const key = `${customerId}-${date}`;

  const payload = {
    customerId: customerId,
    currency: currency,
    amount: amount,
  };
  setItemInCache(key, payload);
  next();
};

const makeResponse = (req, res, next) => {
  const { customerId } = req.body.data;
  const count = timesClientHasDonated(customerId);
  if (count < 2) {
    next();
  }
  req.result = { message: "Thank you for giving" };
  next();
};

module.exports = { makeDonation, makeResponse };
