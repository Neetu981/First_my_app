import ExpenceItem from "./ExpenceItem";
import './Expense.css'
import Card from "../UI/Card";

const Expenses=(props)=>{
    return(
        <Card className="expense">
         <ExpenceItem title={props.expense[0].title} amount={props.expense[0].amount} date={props.expense[0].date } LocationOfExpenditure={props.expense[0].LocationOfExpenditure}></ExpenceItem>
        <ExpenceItem title={props.expense[1].title} amount={props.expense[1].amount} date={props.expense[1].date } LocationOfExpenditure={props.expense[1].LocationOfExpenditure}></ExpenceItem>
        <ExpenceItem title={props.expense[2].title} amount={props.expense[2].amount} date={props.expense[2].date } LocationOfExpenditure={props.expense[2].LocationOfExpenditure}></ExpenceItem>
        <ExpenceItem title={props.expense[3].title} amount={props.expense[3].amount} date={props.expense[3].date } LocationOfExpenditure={props.expense[3].LocationOfExpenditure}></ExpenceItem>
  
        </Card>
    )
}
export default Expenses