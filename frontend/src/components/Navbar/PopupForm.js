import { useState } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useRef } from "react";

export default function PopupForm({ handleClose }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [progress_bar, setProgressBar] = useState("");
  const [subtasks, setSubtasks] = useState("");
  const [error, seterror] = useState(null);

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleChangeProgress_bar = (e) => {
    setProgressBar(e.target.value);
  };

  const handleChangeSubtasks = (e) => {
    setSubtasks(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const workout = { title, description, status, subtasks, progress_bar };
    const response = await fetch("/api/workouts/", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "content-type": "application/json",
      },
    });

    // Retrieve the response data
    const json = await response.json();

    // Handle response errors
    if (!response.ok) {
      seterror(json.error || "An error occurred.");
    } else {
      setTitle("");
      setDescription("");
      setStatus("");
      seterror(null);
      console.log("The workout was added to the database:", json);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <section className="section-Dialog">
      <Dialog open={handleClickOpen}>
        <DialogContent
          id="dialog"
          style={{
            borderRadius: "16px",
            width: "400px",
            height: "560px",
            backgroundColor: "#2c2c38",
          }}
        >
          <div className="closeBtn">
            <button
              onClick={handleClose}
              className="popup-button-close"
              style={{
                padding: "8px !important",
                height: "10px !important",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#645fc4",
                padding: "5px 10px",
                color: "white",
                borderRadius: "16px",
                border: "none",
                cursor: "pointer",
              }}
            >
              X
            </button>
          </div>
          <DialogTitle
            className="DialogTitle"
            style={{
              color: "white",
              padding: "0",
            }}
          >
            Add New Task{" "}
          </DialogTitle>

          <form
            className="popupForm"
            onSubmit={handleSubmit}
            style={{ color: "white", display: "flex", flexDirection: "column" }}
          >
            <label
              htmlFor="title"
              className="title"
              style={{ marginTop: "10px" }}
            >
              Title
              <input
                id="title"
                name="title"
                type="text"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                required
              />
            </label>

            <label
              htmlFor="description"
              className="description"
              style={{ marginTop: "10px" }}
            >
              Description
              <input
                id="description"
                type="text"
                name="description"
                onChange={handleChangeDescription}
              />
            </label>

            {/* Subtasks */}

            <label
              htmlFor="subtasks"
              className="subtasks"
              style={{ marginTop: "10px" }}
            >
              Subtasks
              <select
                type="text"
                id="subtasks"
                name="subtasks"
                value={subtasks}
                onChange={handleChangeSubtasks}
              >
                <option value="0">Select number Of Tasks</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </label>

            {/* Status of task */}

            <label
              htmlFor="status"
              className="status"
              style={{ marginTop: "10px" }}
            >
              Status
              <select
                id="status"
                name="status"
                value={status}
                onChange={handleChangeStatus}
                required
              >
                <option value="">Select status</option>
                <option value="todo">todo</option>
                <option value="doing">doing</option>
                <option value="done">done</option>
              </select>
            </label>

            {/* Button Create Task */}
            <input
              className="body-button-addTask"
              style={{ marginTop: "10px" }}
              type="submit"
              value="Create Task"
              open={false}
            />
          </form>

          <DialogContentText></DialogContentText>
        </DialogContent>
      </Dialog>
    </section>
  );
}
