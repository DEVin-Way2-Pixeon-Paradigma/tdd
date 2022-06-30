import logo from './logo.svg';
import './App.css';
import Radio from './components/Radio';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <Radio label="teste" value="teste" name="teste" labelFor="teste" labelColor="yellow"/>
        </a>
        
      </header>
      <Radio label="Laranja" value="laranja" name="frutas" labelFor="laranja" />
      <Radio label="Maça" value="maça" name="frutas" labelFor="maça"/>
      <Radio label="Melancia" value="melancia" name="frutas" labelFor="melancia"/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
