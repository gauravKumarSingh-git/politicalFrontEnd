import './App.css';
import AddEvent from './components/event/AddEvent';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <h1>
        <Navbar />
        <AddEvent />
      </h1>
    </div>
  );
}

export default App;
