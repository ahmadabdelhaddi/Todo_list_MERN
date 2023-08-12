//import mongoose
const mongoose = require("mongoose");

// import schema from mongoose
const Schema = mongoose.Schema;

//cerate new object from schema
const workoutSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    subtasks: {
      type: String,
      require: true,
    },
    progress_bar: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

// name of collection , name of document
module.exports = mongoose.model("workout", workoutSchema);
