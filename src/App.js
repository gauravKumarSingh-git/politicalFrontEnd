import './App.css';
import AddEvent from './components/event/AddEvent';
import AddContact from './components/contact/AddContact';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <h1>
        <Navbar />
        <AddEvent />
        <AddContact/>
      </h1>
    </div>
  );
}

export default App;
