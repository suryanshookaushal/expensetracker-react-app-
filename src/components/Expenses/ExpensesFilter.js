import './ExpenseFilter.css'
import react, {useState} from 'react'

const ExpenseFilter = (props)=>{

    const selectedHandler = (e)=>{
        props.expenseyear(e.target.value)
    }

    return(
        <div className="expense_filter">
            <div className="header_filter">
                <p>Filter by Year</p>
                <select value={props.selectedy} onChange={selectedHandler}>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
            <div className="graph_filter">
                <div className="expense_graph">
                    </div>
                <div className="expense_graph">
                    </div>
                <div className="expense_graph">
                    </div>
                <div className="expense_graph">
                    </div>
                <div className="expense_graph">
                    </div>
                <div className="expense_graph">
                    </div>
                <div className="expense_graph">
                    </div>
                <div className="expense_graph">
                    </div>
                <div className="expense_graph">
                    </div>
                <div className="expense_graph">
                    </div>
                <div className="expense_graph">
                    </div>
                <div className="expense_graph">
                    </div>
            </div>
        </div>
    )

}

export default ExpenseFilter