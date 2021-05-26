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

    const [showForm, setShowForm] = useState(true);

    const showformHandler = (event)=>{
        event.preventDefault()
        setShowForm(!showForm)
    }
    const cancelbuttonHandler = (binfo)=>{
        setShowForm(!showForm)
    }
    
    let showContent =<form className="showform">
                        <button onClick={showformHandler}>Add New Expense</button>
                    </form>

    if(showForm===false){
        showContent = <ExpenseForm onformsubmit={formSubmithandler} cancelled={cancelbuttonHandler}/>
    }

    return(
        <div className="new_expense">
            {showContent}
        </div>
    )
}

export default NewExpense