import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate'

import './ExpenceItem.css'
const ExpenceItem=(props)=>{
  
  
    return <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'> <h2>{props.title}</h2></div> 
      <div className='expense-item__price'> ${props.amount}</div> 
      <div className='expense-item__description'><h2> {props.LocationOfExpenditure}</h2></div> 
    </Card >
}


export default ExpenceItem