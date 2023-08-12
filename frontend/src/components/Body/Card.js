import React from "react";
const Card = ({ workout, onDelete }) => {
  const handleDelete = () => {
    onDelete(workout._id);
  };

  return (
    <>
      <div className="card">
        <i
          class="fa-solid fa-xmark fa-xl"
          style={{ color: "#ffffff" }}
          onClick={handleDelete}
        ></i>
        <h1 style={{ marginTop: "10px", color: "white" }}>{workout.title}</h1>
        <h1 style={{ marginTop: "10px" }}>{` 0 of ${workout.subtasks}`}</h1>
      </div>
    </>
  );
};

export default Card;
