// import logo from './logo.svg';
import './App.css';

import ExpenceItem from './components/ExpenceItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>lets get started!</h2>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <ExpenceItem></ExpenceItem>
      </header>
    </div>
  );
}

export default App;
