import Chart from '../Chart/Chart'

const ExpenseChart = (props)=>{

    const Datapoints = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'March', value: 0},
        {label: 'April', value: 0},
        {label: 'May', value: 0},
        {label: 'June', value: 0},
        {label: 'July', value: 0},
        {label: 'August', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0}
    ]

    for (const expense of props.Data) {
        const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
        Datapoints[expenseMonth].value += expense.amount;
      }

      return <Chart datapoint = {Datapoints} />
}

export default ExpenseChart