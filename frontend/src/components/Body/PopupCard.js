import { useState, useEffect, useParams } from "react";
import { Link } from "react-router-dom";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Card } from "@mui/material";
import "./PopupCard.css";
import DialogTitle from "@mui/material/DialogTitle";
function PopupCard({ handleClose, workout }) {
  const [popupVisible, setPopupVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [workouts, setWorkouts] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [progress_bar, setProgressBar] = useState("");
  const [subtasks, setSubtasks] = useState("");
  const [error, seterror] = useState(null);

  useEffect(() => {
    const fetchSingleCard = async () => {
      try {
        const response = await fetch(`/api/workouts/${workout._id}`, {
          method: "GET",
        });
        const json = await response.json();

        if (response.ok) {
          setWorkouts(json);
          setTitle(json.title); // Update the state with the fetched workout data
          setDescription(json.description); // Update the state with the fetched workout data
          setStatus(json.status); // Update the state with the fetched workout data
          setSubtasks(json.subtasks); // Update the state with the fetched workout data
        } else {
          console.error("Error fetching single workout data");
        } //
      } catch (error) {
        console.error("Error fetching single workout data:", error);
      }
    };

    fetchSingleCard();
  }, [workout._id]);

  const UpadteCard = async () => {
    try {
      const response = await fetch(`/api/workouts/${workout._id}`, {
        method: "PATCH",
      });
    } catch (error) {
      console.error("Error fetching single workout data:", error);
    }
  };

  const linkStyle = {
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
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };
  return (
    <>
      <section className="section-Dialog">
        <div onClick={handleClickOpen}>
          <Card />
        </div>
        <Dialog open={handleClickOpen}>
          <DialogContent id="dialog" className="Containar">
            <div className="closeBtn">
              <Link
                to="/tasks"
                onClick={handleClose}
                className="popup-button-close"
                style={linkStyle}
              >
                X
              </Link>
            </div>
            
            <DialogTitle
              className="DialogTitle"
              style={{
                color: "white",
                padding: "0",
              }}
            >
              {title}
            </DialogTitle>
            <form
              key={workout._id}
              className="cardPopupInfo"
              style={{
                color: "white",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label
                htmlFor="description"
                className="description"
                style={{ marginTop: "20px" }}
              >
                {description}
              </label>

              {/* Subtasks */}

              <label
                htmlFor="subtasks"
                className="subtasks"
                style={{ marginTop: "20px" }}
              >
                <bold>Subtasks (0 of {subtasks})</bold>
              </label>

              {/* Status of task */}

              <label
                htmlFor="status"
                className="status"
                style={{ marginTop: "20px" }}
              >
                Status
                <select
                  id="status"
                  name="status"
                  value={status}
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                  required
                  style={{ display: "flex", flexWrap: "wrap", width: "420px" }}
                >
                  <option value="">Select status</option>
                  <option value="todo">todo</option>
                  <option value="doing">doing</option>
                  <option value="done">done</option>
                </select>
              </label>

              {error && <div className="formError">{error}</div>}
            </form>
            <DialogContentText></DialogContentText>
          </DialogContent>
        </Dialog>
      </section>
    </>
  );
}
export default PopupCard;
