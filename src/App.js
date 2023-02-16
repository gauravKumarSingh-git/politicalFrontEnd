import './App.css';
import AddEvent from './components/event/AddEvent';
import AddContact from './components/contact/AddContact';

function App() {
  return (
    <div className="App">
      <h1>
        <AddEvent />
        <AddContact/>
      </h1>
    </div>
  );
}

export default App;
