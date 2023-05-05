import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import './ExpenceItem.css'
function ExpenceItem(props){
  
  
    return <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <ExpenseDetails title={props.title}
       amount={props.amount} 
       LocationOfExpenditure={props.LocationOfExpenditure}/>
    </div>
}


export default ExpenceItem