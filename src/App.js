// import logo from './logo.svg';
import './App.css';

import NewExpense from './components/newExpense/NewExpense';

import Expenses from './components/Expenses/Expense';

const App=()=> {
  const expenses=[
    {id:'e1',title:'Car Insurance', amount:269.76, date:new Date(2023, 3, 28),LocationOfExpenditure: 'Panipat'},
    {id:'e2',title:'new tv', amount:57.76, date:new Date(2023, 6, 28),LocationOfExpenditure: 'Panipat'},
    {id:'e3',title:'Notebooks', amount:99.76, date:new Date(2023, 2, 28),LocationOfExpenditure: 'Panipat'},
    {id:'e4',title:'New desk', amount:100.76, date:new Date(2023, 9, 28),LocationOfExpenditure: 'Panipat'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <NewExpense/>
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
        <Expenses expense={expenses}></Expenses>
  
      </header>
    </div>
  );
}

export default App;
