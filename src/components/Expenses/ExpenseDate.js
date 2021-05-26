import './ExpenseDate.css'
import Card from '../UI/Card'

const ExpenseDate = (props)=>{
    const month = props.time.toLocaleString('en-US', {month: 'long'})
    const day = props.time.toLocaleString('en-US', {day: '2-digit'})
    const year = props.time.getFullYear()

    return(
        <Card className="expensedate_item">
            <div className="expensemonth_item">{month}</div>
            <div className="expenseyear_item">{year}</div>
            <div className="expenseday_item">{day}</div>
        </Card>
    );
}

export default ExpenseDate