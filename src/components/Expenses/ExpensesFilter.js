import './ExpenseFilter.css'

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
        </div>
    )

}

export default ExpenseFilter