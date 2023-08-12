import React, { useState, useEffect } from "react";
import "./style.css";
import Card from "./Card";
const Body = () => {
  const [NewColumn, setNewColumn] = useState("false");
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };

    fetchWorkouts();
  }, [workouts]);

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
                  <Card
                    key={workout._id}
                    workout={workout}
                    onDelete={handleDelete}
                  />
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
                  <Card
                    key={workout._id}
                    workout={workout}
                    onDelete={handleDelete}
                  />
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
                  <Card
                    key={workout._id}
                    workout={workout}
                    onDelete={handleDelete}
                  />
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
