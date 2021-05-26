import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import React, {useState} from 'react'

const NewExpense = (props)=>{
    const formSubmithandler = (expenseData)=>{
        const expensesinfo = ({
            ...expenseData,
            id: Math.random().toString()
        })
        props.expensedatainfo(expensesinfo)
    }

    const [showForm, setShowForm] = useState(false);

    const showformHandler = (event)=>{
        event.preventDefault()
        setShowForm(!showForm)
    }
    return(
        <div className="new_expense">
            <form className="showform">
                <button onClick={showformHandler}>Add New Expense</button>
            </form>
            {showForm && (
                <ExpenseForm onformsubmit={formSubmithandler}/>
            )}
        </div>
    )
}

export default NewExpense