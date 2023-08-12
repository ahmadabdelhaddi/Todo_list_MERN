import "./App.css";
// import to route and install
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Sidebara from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Sidebar />} />
            <Route path="/aa" element={<Sidebara />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
