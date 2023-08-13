//import express (npm i express)
const express = require("express");

//to make the app faster
const app = express();

// middlewear
// express.json() is a built in middleware function in Express, It parses incoming JSON requests and puts the parsed data in req.body.
app.use(express.json());

// import dotenv
require("dotenv").config();

// import Routes
const workoutRoutes = require("./routes/workouts");

// import Mongoose
const mongoose = require("mongoose");


// routes
app.use("/api/workouts", workoutRoutes);

// Connect to MongooseDB
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listeining on port ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
