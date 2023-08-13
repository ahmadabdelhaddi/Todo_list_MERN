import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
function Sidebar() {
  // Theme Dark && light #############################
  const [isLightTheme, setIsLightTheme] = useState(true); // Initially, it's a light theme

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme); // Toggle the theme
  };

  const sidebarStyles = {
    backgroundColor: isLightTheme ? "#2c2c38" : "#3c3752",
    color: isLightTheme ? "white" : "white",
  };
  // Theme Dark && light #############################

  // Hide side bar
  const [sideHide, setSideHide] = useState(true);

  const toggleSide = () => {
    setSideHide(!sideHide);
  };

  const sideHideStyle = {
    width: sideHide ? "70px" : "260px",
  };
  const sidePagesStyle = {
    width: sideHide ? "0" : "240px",
    height: sideHide ? "40px" : "40px",
    alignItems: sideHide ? "center" : "stretch", // Use a valid value here, like "center" or "stretch"
    justifyContent: sideHide ? "center" : "flex-start", // Use a valid value here, like "center" or "flex-start"
  };

  const sideLinkStyles = {
    listStyle: "none",
    textDecoration: "none",
    textUnderlineOffset: "none",
    border: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    color: "#f0f0f0",
    padding: "0 10px",
  };
  return (
    <>
      <div className="sidebar" style={{ ...sidebarStyles, ...sideHideStyle }}>
        <div className="side-pages" style={sidePagesStyle}>
          {sideHide ? "" : <p style={{ color: "#6a707e" }}>All Boards</p>}

          <div className="side-pages-title" style={sidePagesStyle}>
            {sideHide ? (
              <Link style={sideLinkStyles} to={"/tasks"}>
                <img alt="" src="./icons-list-24px.png" />
              </Link>
            ) : (
              <Link style={sideLinkStyles} to={"/tasks"}>
                <img alt="" src="./icons-list-24px.png" />
                Platform Launch
              </Link>
            )}
          </div>

          <div className="side-pages-title" style={sidePagesStyle}>
            {sideHide ? (
              <Link style={sideLinkStyles} to={"/chart"}>
                <img alt="" src="./icons8-area-chart-24.png" />
              </Link>
            ) : (
              <Link style={sideLinkStyles} to={"/chart"}>
                <img alt="" src="./icons8-area-chart-24.png" />
                Marketing Plan
              </Link>
            )}
          </div>

          <div className="side-pages-title" style={sidePagesStyle}>
            {sideHide ? (
              ""
            ) : (
              <Link style={{ ...sideLinkStyles, color: "gray" }} to={"/tasks"}>
                + Create New Board
              </Link>
            )}
          </div>
        </div>
        <div>
          <div className="side-themes">
            {sideHide ? (
              <img
                id="sunTheme"
                alt=""
                style={{ cursor: "pointer" }}
                src={
                  isLightTheme ? "./icons8-sun.png" : "./icons8-moon-24.png "
                }
                onClick={toggleTheme}
              />
            ) : (
              "Theme is Light"
            )}
          </div>
          <p className="side-eye" onClick={toggleSide}>
            {sideHide ? (
              <img
                style={{ display: "flex", justifyContent: "flex-end" }}
                alt=""
                src="./icons8-hide-24.png"
              />
            ) : (
              " Hide Sidebar"
            )}
          </p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
