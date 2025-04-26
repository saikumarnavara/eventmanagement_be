// import express from "express";
const express = require("express");
const dontEnv = require("dotenv");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const UserRoutes = require("./src/routes/UserRoutes");

dontEnv.config();
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyparser.json());
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/users", UserRoutes);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
