import './ExpenseForm.css'
import React, { useState } from 'react';


//Two way binding here we are not only submitting the value but also restoring it to defaults
const ExpenseForm = (props)=>{

    const [enteredtitle, setenteredtitle] = useState('');
    const [enteredamount, setenteredamount] = useState('');
    const [entereddate, setentereddate] = useState('');

    const settitleHandler = (event)=>{
        setenteredtitle(event.target.value);
    }
    const setamountHandler = (event)=>{
        setenteredamount(event.target.value);
    }
    const setdateHandler = (event)=>{
        setentereddate(event.target.value);
    }

    const formSubmission = (event)=>{
        event.preventDefault();

        const expenseinfo = {
            title: enteredtitle,
            amount: enteredamount,
            date: new Date(entereddate)
        }

       props.onformsubmit(expenseinfo)
        setenteredtitle('')
        setenteredamount('')
        setentereddate('')
    }

    return(
        <form onSubmit={formSubmission}>
            <div className="expense_formcontrols">
                <div className="expense_formcontrol">
                    <label>Title</label>
                    <input type="text" value={enteredtitle} onChange={settitleHandler}/>
                </div>
                <div className="expense_formcontrol">
                    <label>Amount</label>
                    <input type="number" value={enteredamount} onChange={setamountHandler}/>
                </div>
                <div className="expense_formcontrol">
                    <label>Date</label>
                    <input type="date" min="2019-12-31" max="2022-12-31" value={entereddate} onChange={setdateHandler}/>
                </div>
                </div>
            <div className="expense_formbutton">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm