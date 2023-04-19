import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Events from "./pages/Events";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import OurTeam from "./pages/OurTeam";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <button className="join-us">Join Us</button>
        <Routes>
          <Route path="/events" element={<Events />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ourteam" element={<OurTeam />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
