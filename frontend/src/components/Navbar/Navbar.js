import React, { useState } from "react";
import "./style.css";
import PopupForm from "./PopupForm";

const Navbar = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  const openForm = () => {
    setPopupVisible(true);
  };

  const closeForm = () => {
    setPopupVisible(false);
  };

  return (
    <>
      <header>
        <div className="container-Header" id="blur">
          <div>
            <h1>Platform Launch</h1>
          </div>

          <div>
            <button className="body-button-addTask" onClick={openForm}>
              + Add New Task
            </button>
          </div>
        </div>
      </header>
      {popupVisible && <PopupForm handleClose={closeForm} />} {/* Pass the closeForm function */}
    </>
  );
};

export default Navbar;
