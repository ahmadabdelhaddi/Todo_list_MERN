// import model
const Workout = require("../models/workoutModel");

// import mongoose
const mongoose = require("mongoose");

// get all workouts
const getWorkouts = async (req, res) => {
  // Find method to get all data and sort it from newest to oldest
  const workouts = await Workout.find({});

  res.status(200).json(workouts);
};

//get a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;

  //   ##################

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: " The Id is " });
  }

  //   #################
  const workouts = await Workout.findById(id);
  res.status(200).json(workouts);

  if (!workouts) {
    res.status(404).json({ error: " This Workout Not Found" });
  }
};

//create new workout

const createWorkout = async (req, res) => {
  const { title, description, subtasks, progress_bar, status } = req.body;
  // Or
  // const newWorkout = req.body;

  //add doc to db
  try {
    // workout object
    // create new document from workout constent
    const workout = await Workout.create({
      title,
      description,
      subtasks,
      progress_bar,
      status,
    });
    //status 200 to say the request is success
    // json return the workout document ..
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  //check id type in mongoose is valid or not
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "This Id Is Not Valid " });
  }

  //find id in the document , and put key and value  in {} .. the (id key) named in mongoose ==> _id
  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(404).json({ error: "No such Workout " });
  }

  res.status(200).json(workout);
};

// update a workout

const updateWorkout = async (req, res) => {
  //get id
  const { id } = req.params;

  //check if valid or not
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "This is Not Valid Id" });
  }

  const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body });

  // if workout not found
  if (!workout) {
    return res.status(404).json({ error: "No such Workout " });
  }

  //send data to mongoose
  res.status(200).json(workout);
};

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
