import "./App.css";
import AddEvent from "./components/event/AddEvent";
import AddContact from "./components/contact/AddContact";
import Registration from "./components/login/Registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/login/Landing";
import Login from "./components/login/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/home" element={<Login />} />
          <Route path="/addEvent" element={<AddEvent />} />
          <Route path="/contact" element={<AddContact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
