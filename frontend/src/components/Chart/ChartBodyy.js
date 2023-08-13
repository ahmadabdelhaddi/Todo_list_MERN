import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  scales: {
    x: {
      ticks: {
        stepSize: 1,
      },
    },
  },
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Count of tasks",
    },
  },
};

const labels = ["TODO", "DOING", "DONE"];

export default function ChartBodyy() {
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

  const todoCount = parseInt(
    workouts.filter((workout) => workout.status === "todo").length
  );

  const doingCount = parseInt(
    workouts.filter((workout) => workout.status === "doing").length
  );

  const doneCount = parseInt(
    workouts.filter((workout) => workout.status === "done").length
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Count",
        data: [todoCount, doingCount, doneCount],
        borderColor: "black",
        backgroundColor: "#615fc4",
      },
    ],
  };

  return (
    <div className="chart" style={{ width: "800px" }}>
      <Bar options={options} data={data} />;
    </div>
  );
}
