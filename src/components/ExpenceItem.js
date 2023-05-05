
import './ExpenceItem.css'
function ExpenceItem(){
  const expenseDate= new Date(2023, 3, 28);
  const expenseTitle= 'Car Insurance';
  const expenseAmount=269.76;
  const LocationOfExpenditure= 'Panipat';
    return <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'> <h2>{expenseTitle}</h2></div> 
      <div className='expense-item__price'> ${expenseAmount}</div> 
      <div className='expense-item__description'><h2> {LocationOfExpenditure}</h2></div> 
    </div>
}


export default ExpenceItem