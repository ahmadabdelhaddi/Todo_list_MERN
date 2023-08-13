import React from "react";
import { useState, useEffect } from "react";
import Body from "./Body";
import PopupCard from "./PopupCard";
const Card = ({ workout, onDelete }) => {
  const [popupVisible, setPopupVisible] = useState(false);

  const openForm = () => {
    setPopupVisible(true);
  };

  const closeForm = () => {
    setPopupVisible(false);
  };

  const handleDelete = () => {
    onDelete(workout._id);
  };

  return (
    <>
      <div className="card" onClick={openForm}>
        <h1 style={{ marginTop: "10px", color: "white" }}>{workout.title}</h1>
        <h1 style={{ marginTop: "10px" }}>{` 0 of ${workout.subtasks}`}</h1>
      </div>
      {popupVisible && (
        <PopupCard
          key={workout._id}
          workout={workout}
          handleClose={closeForm}
          onDelete={handleDelete}
        />
      )}
    </>
  );
};

export default Card;
