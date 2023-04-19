import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Events from "./pages/Events";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <button className="join-us">Join Us</button>
        <Routes>
          <Route path="/events" element={<Events />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
