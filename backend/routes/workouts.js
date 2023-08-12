const express = require("express");
const router = express.Router();

//
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

// import model
const Workout = require("../models/workoutModel");

// Get All Workouts
router.get("/", getWorkouts);

// Get a Single Workout
router.get("/:id", getWorkout);

// Create New Workout
router.post("/", createWorkout);

// Delete a Single Workout
router.delete("/:id", deleteWorkout);

// Upadte a Single Workout
router.patch("/:id", updateWorkout);

module.exports = router;
