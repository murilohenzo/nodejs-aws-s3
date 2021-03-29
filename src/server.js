require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

/**
 * Database setup
 */
mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true
  }
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(3000);