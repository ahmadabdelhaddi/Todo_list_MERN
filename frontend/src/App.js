import "./App.css";
// import to route and install
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeTasks from "./pages/Home/HomeTasks";
import Chart from "./pages/ChartPage/Chart";
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/tasks" element={<HomeTasks />} />
            <Route path="/:id" element={<HomeTasks />} />
            <Route path="/chart" element={<Chart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
