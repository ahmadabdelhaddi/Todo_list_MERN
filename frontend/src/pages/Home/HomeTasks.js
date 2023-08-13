import React from "react";
import "./style.css";
import Body from "../../components/Body/Body";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
const HomeTasks = () => {
  return (
    <>
      <div className="container">
        <Sidebar />
        <div>
          <Navbar />
          <Body />
        </div>
      </div>
    </>
  );
};

export default HomeTasks;
