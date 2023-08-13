import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Card from "./Card";
import PopupCard from "./PopupCard";
const Body = () => {
  const [NewColumn, setNewColumn] = useState("false");
  const [workouts, setWorkouts] = useState([]);
  const [workout, setWorkout] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };

    fetchWorkouts();

    // fetchSingleCard();
  }, [workouts]);

  const linkStyle = {
    color: "inherit", // Inherit color from parent
    textDecoration: "none", // Remove underline
  };
  const convertToggle = () => {
    setNewColumn(!NewColumn);
  };

  const handleDelete = async (workoutId) => {
    try {
      const response = await fetch(`/api/workouts/${workoutId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Update the workouts state to remove the deleted task
        setWorkouts((prevWorkouts) =>
          prevWorkouts.filter((workout) => workout._id !== workoutId)
        );
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const todoCount = workouts.filter(
    (workout) => workout.status === "todo"
  ).length;
  const doingCount = workouts.filter(
    (workout) => workout.status === "doing"
  ).length;
  const doneCount = workouts.filter(
    (workout) => workout.status === "done"
  ).length;

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div className="container-cards">
      <div className="list">
        <h1>
          <img src="./icons8-circle-12.png" />
          TODO ({todoCount})
        </h1>
        <div className="cards" style={{ display: "flex", flex: "wrap" }}>
          {workouts
            ? workouts
                .filter((workout) => workout.status === "todo")
                .map((workout) => (
                  <Link style={linkStyle} to={`/${workout._id}`}>
                    <Card
                      key={workout._id}
                      workout={workout}
                      onDelete={handleDelete}
                    />
                  </Link>
                ))
            : null}
        </div>
      </div>

      <div className="list">
        <h1>
          <img src="./icons8-circle-12-puprle.png" />
          DOING ({doingCount})
        </h1>
        <div className="cards" style={{ display: "flex", flex: "wrap" }}>
          {workouts
            ? workouts
                .filter((workout) => workout.status === "doing")
                .map((workout) => (
                  <div onClick={handleClickOpen}>
                    <Link style={linkStyle} to={`/${workout._id}`}>
                      <Card
                        key={workout._id}
                        workout={workout}
                        onDelete={handleDelete}
                      />
                    </Link>
                  </div>
                ))
            : null}
        </div>
      </div>

      <div className="list">
        <h1>
          <img src="./icons8-circle-12-Green.png" />
          DONE ({doneCount})
        </h1>
        <div className="cards" style={{ display: "flex", flex: "wrap" }}>
          {workouts
            ? workouts
                .filter((workout) => workout.status === "done")
                .map((workout) => (
                  <Link style={linkStyle} to={`/${workout._id}`}>
                    <Card
                      key={workout._id}
                      workout={workout}
                      onDelete={handleDelete}
                    />
                  </Link>
                ))
            : null}
        </div>
      </div>

      {NewColumn ? (
        <div className="list">
          <div className="create-new-column" onClick={convertToggle}>
            <h1>+New Column</h1>
          </div>
        </div>
      ) : (
        <div id="inner-add-task">
          <form>
            <i class="fa-solid fa-x" onClick={convertToggle}></i>
            <br />
            <input></input>
            <br />
            <button>Add List</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Body;
