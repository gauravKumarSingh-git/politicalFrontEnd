import "./App.css";
import AddEvent from "./components/event/AddEvent";
import AddContact from "./components/contact/AddContact";
import Registration from "./components/login/Registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/login/Landing";
import Login from "./components/login/Login";
import Home from "./components/login/Home";
import Event from "./components/event/Event";
import Merch from "./components/merchandise/Merch";
import Agenda from "./components/agenda/Agenda";
import Admin from "./components/admin/Admin";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/event" element={<Event />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addEvent" element={<AddEvent />} />
          <Route path="/contact" element={<AddContact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
