const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json())

const donationRouter = require("./routes/donationRoutes");

app.use("/api/donate", donationRouter);

let server
const port = 3003

const setUp= async() => {
    server = app.listen(port)
    console.log(`I am listening on ${port}`)

}
setUp()

module.exports ={app, server}
