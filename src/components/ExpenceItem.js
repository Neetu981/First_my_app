
import './ExpenceItem.css'
function ExpenceItem(props){
  
    return <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className='expense-item__description'> <h2>{props.title}</h2></div> 
      <div className='expense-item__price'> ${props.amount}</div> 
      <div className='expense-item__description'><h2> {props.LocationOfExpenditure}</h2></div> 
    </div>
}


export default ExpenceItem