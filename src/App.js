import logo from './logo.svg';
import './App.css';
import PlaygroundComponent from './components/playground.component';


function App() {
  return (
    <div className="App">
      <PlaygroundComponent testProp = "this is a test prop" />
    </div>
  );
}

export default App;
