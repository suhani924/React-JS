import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AddEmp from "./pages/AddEmployee";
import ViewEmployee from "./pages/ViewEmployee";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <Link to="/" style={{ marginRight: "20px" }}>Home</Link>
        <Link to="/about" style={{ marginRight: "20px" }}>About</Link>
        <Link to="/add" style={{ marginRight: "20px" }}>Add</Link>
        <Link to="/view">View</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/add" element={<AddEmp />} />
        <Route path="/view" element={<ViewEmployee />} />
      </Routes>
    </>
  );
}

export default App;
