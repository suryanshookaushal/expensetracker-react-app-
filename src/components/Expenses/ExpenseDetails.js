import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpensesFilter'
import Card from '../UI/Card'
import './ExpenseDetails.css'
import { useState } from 'react'

const ExpenseDetails = (props)=>{
    const expenses = props.details

    const [selectedyear, setselectedyear] = useState('2021')
    
    const expenseyearinfo = (infoyear)=>{
        setselectedyear(infoyear)
    }

    const filteredyear = expenses.filter((expense)=>{
        return expense.date.getFullYear().toString()===selectedyear
    })

    let expenseContent = <p>No Item found</p>

    if(filteredyear.length>0){
        expenseContent = filteredyear.map((value)=>{
            return <ExpenseItem
            key = {value.id}
            title = {value.title}
            date = {value.date}
            price = {value.amount}
            />
        })
    }

    return(
        <Card className="expenses">
            <ExpenseFilter selectedy={selectedyear} expenseyear={expenseyearinfo}/>
            {expenseContent}
      </Card>
    )
}

export default ExpenseDetails