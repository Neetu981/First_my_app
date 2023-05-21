import React,{useState} from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate'

import './ExpenceItem.css'
const ExpenceItem=(props)=>{
  const [title,setTitle]=useState(props.title)
  console.log('ExpenseItem is evaluated')


  const clickHandler=()=>{
   setTitle('updated!')
   console.log(props.title)
  }
  const [amount,setAmount]=useState(props.amount)

  const amountHandler=()=>{
    setAmount('100')
  }
  
    return <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'> <h2>{title}</h2></div> 
      <div className='expense-item__price'> ${amount}</div> 
      <div className='expense-item__description'><h2> {props.LocationOfExpenditure}</h2></div> 
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={amountHandler}>Change Amount</button>
    </Card >
}


export default ExpenceItem