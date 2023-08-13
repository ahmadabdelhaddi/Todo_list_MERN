import React from "react";
import "./style.css";
import ChartBodyy from "../../components/Chart/ChartBodyy";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
const HomeTasks = () => {
  return (
    <>
      <div className="container">
        <Sidebar />
        <div>
          <Navbar />
          <ChartBodyy />
        </div>
      </div>
    </>
  );
};

export default HomeTasks;
