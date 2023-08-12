import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Navbar from "../Navbar/Navbar";

import Body from "../Body/Body";

const Sidebar = () => {
  return (
    <>
      <div className="container">
        <div className="sidebar">
          <div className="side-pages">
            <p style={{ color: "#6a707e" }}>All Boards</p>

            <div className="side-pages-title">
              <img alt="" src="./icons-list-24px.png" />
              <Link className="side-Link" style={{ color: "#6a6f7c" }} to={"/"}>
                Platform Launch
              </Link>
            </div>

            <div className="side-pages-title">
              <img alt="" src="./icons-list-24px.png" />
              <Link
                className="side-Link"
                style={{ color: "#6a6f7c" }}
                to={"/aa"}
              >
                Marketing Plan
              </Link>
            </div>

            <div className="side-pages-title">
              <img alt="" src="./icons-list-24px.png" w />
              <Link className="side-Link" style={{ color: "#6a6f7c" }} to={"/"}>
                Roadmap
              </Link>
            </div>

            <div className="side-pages-title">
              <img alt="" src="./icons-list-24px.png" w />

              <Link className="side-Link" to={"/"} style={{ color: "#4d4b78" }}>
                + Create New Board
              </Link>
            </div>
          </div>
          <div>
            <div className="side-themes">
              <img
                alt=""
                style={{ cursor: "pointer" }}
                src="./icons8-sun.png"
              />
              <img
                alt=""
                style={{ cursor: "pointer" }}
                src="./icons8-moon-24.png"
              />
              <img
                alt=""
                style={{ cursor: "pointer" }}
                src="./icons8-moon-24.png"
              />
            </div>
            <p className="side-eye">
              {/* <img alt="" src="./icons8-hide-24.png" /> */}
              Hide Sidebar
            </p>
          </div>
        </div>
        <div>
          <Navbar />
          <Body />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
