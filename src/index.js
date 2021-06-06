const serverless = require('serverless-http');
const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
const { createLogItem } = require("./utils/createLog");
const {intializeCache} = require('./cache/nodeCache')

const donationRouter = require("./routes/donationRoutes");

app.use("/api/donations", donationRouter);

app.use((err, req, res, next) => {
  if (err.expose === undefined) {
    next(createLogItem("error", "ERR002"));
  } else {
    res.status(err.status).json({ error: err });
  }
});

let server;
const port = 3003;

const setUp = async () => {
  server = app.listen(port);
  (createLogItem("success", "SCC003"))
};
setUp();
intializeCache()

// module.exports = serverless(app)
