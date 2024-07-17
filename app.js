const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/alienDb";

const app = express();

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected...");
});

app.use(express.json())

const alienRouter = require("./routes/aliens.js");
app.use("/aliens", alienRouter);

app.listen("9000", () => {
  console.log("listening....");
});
