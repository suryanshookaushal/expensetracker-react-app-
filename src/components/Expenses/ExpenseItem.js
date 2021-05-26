import './ExpenseItem.css'
import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate'

const ExpenseItem = (props)=>{

    const [title, setTitle] = useState(props.title)

    const buttonHandler = ()=>{
        setTitle("Updated")
    }

    return(
        <div className="expense-item">
            <ExpenseDate time={props.date} />
            <div className="expense-item__description ">
                <h2>{title}</h2>
                <div className="expense-item__price">$ {props.price}</div>
            </div>
            <button onMouseOver={buttonHandler}>Click me</button>
        </div>
    );
}

export default ExpenseItem