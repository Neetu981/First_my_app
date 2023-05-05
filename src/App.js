// import logo from './logo.svg';
import './App.css';

import ExpenceItem from './components/ExpenceItem';

function App() {
  const expense=[
    {id:'e1',title:'Car Insurance', amount:269.76, date:new Date(2023, 3, 28),LocationOfExpenditure: 'Panipat'},
    {id:'e2',title:'new tv', amount:57.76, date:new Date(2023, 6, 28),LocationOfExpenditure: 'Panipat'},
    {id:'e3',title:'Notebooks', amount:99.76, date:new Date(2023, 2, 28),LocationOfExpenditure: 'Panipat'},
    {id:'e4',title:'New desk', amount:100.76, date:new Date(2023, 9, 28),LocationOfExpenditure: 'Panipat'}
  ]
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
        <ExpenceItem title={expense[0].title} amount={expense[0].amount} date={expense[0].date } LocationOfExpenditure={expense[0].LocationOfExpenditure}></ExpenceItem>
        <ExpenceItem title={expense[1].title} amount={expense[1].amount} date={expense[1].date } LocationOfExpenditure={expense[1].LocationOfExpenditure}></ExpenceItem>
        <ExpenceItem title={expense[2].title} amount={expense[2].amount} date={expense[2].date } LocationOfExpenditure={expense[2].LocationOfExpenditure}></ExpenceItem>
        <ExpenceItem title={expense[3].title} amount={expense[3].amount} date={expense[3].date } LocationOfExpenditure={expense[3].LocationOfExpenditure}></ExpenceItem>
  
      </header>
    </div>
  );
}

export default App;
