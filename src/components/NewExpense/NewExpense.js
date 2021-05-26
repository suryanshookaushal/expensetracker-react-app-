import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props)=>{
    const formSubmithandler = (expenseData)=>{
        const expensesinfo = ({
            ...expenseData,
            id: Math.random().toString()
        })
        props.expensedatainfo(expensesinfo)
    }

    return(
        <div className="new_expense">
            <ExpenseForm onformsubmit={formSubmithandler}/>
        </div>
    )
}

export default NewExpense