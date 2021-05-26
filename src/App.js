import ExpenseDetails from './components/Expenses/ExpenseDetails'
import {useState} from 'react'
import NewExpense from './components/NewExpense/NewExpense'
import './App.css';

const App = ()=>{
  const dummy_expenses = [
    {
    id: 'ed1',
    title: 'Car Insurance',
    date: new Date(2019, 2, 28),
    amount: 294.67
  }, {
    id: 'ed2',
    title: 'Life Insurance',
    date: new Date(2020, 1, 31),
    amount: 500.67,
  }, {
    id: 'ed3',
    title: 'Grocery',
    date: new Date(2021, 2, 28),
    amount: 300.67,
  },{
    id: 'ed4',
    title: 'Shopping',
    date: new Date(2021, 3, 18),
    amount: 494.67,
  }
]

const [expenses, setexpenses] = useState(dummy_expenses)

const expensehandler = (expensedata)=>{
  const expensesin = {
    ...expensedata
  }
  setexpenses(expenses=>{
    return [expensesin,...expenses]
  })
}
  return (
    <div className="App">
      <header className="App-header">
        <NewExpense expensedatainfo={expensehandler}/>
        <ExpenseDetails details = {expenses} />
      </header>
    </div>
  );
}

export default App;
