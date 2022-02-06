// import modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/api");
require("dotenv").config();

const cors = require("cors");

// initalize express app object
const app = express();

app.use(cors());
// setup port
const port = process.env.PORT || 5000;

// connect to database
const uri = process.env.DB;
mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log(err));

// Since mongoose's Promise is deprecated, we override it with Node's Promise
mongoose.Promise = global.Promise;

// make app use exported modules
app.use(bodyParser.json());
app.use("/api", routes);

// handle cors stuff
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Log when app is being run on port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
