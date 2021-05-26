import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpensesFilter'
import Card from '../UI/Card'
import './ExpenseDetails.css'
import { useState } from 'react'

const ExpenseDetails = (props)=>{
    const expenses = props.details

    const [selectedyear, setselectedyear] = useState('2020')
    
    const expenseyearinfo = (infoyear)=>{
        setselectedyear(infoyear)
    }

    return(
        <Card className="expenses">
            <ExpenseFilter selectedy={selectedyear} expenseyear={expenseyearinfo}/>
            <ExpenseItem 
                title = {expenses[0].title}
                date = {expenses[0].date}
                price = {expenses[0].amount}
            />
            <ExpenseItem 
                title = {expenses[1].title}
                date = {expenses[1].date}
                price = {expenses[1].amount}
            />
            <ExpenseItem 
                title = {expenses[2].title}
                date = {expenses[2].date}
                price = {expenses[2].amount}
            />
            <ExpenseItem 
                title = {expenses[3].title}
                date = {expenses[3].date}
                price = {expenses[3].amount}
            />
      </Card>
    )
}

export default ExpenseDetails