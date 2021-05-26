import './Chart.css'
import BarChart from './BarChart'

const Chart = (props)=>{

    const maxpoint = props.datapoint.map((data)=>data.value)
    const max = Math.max(...maxpoint) 

    return (
        <div className="chart">
            {props.datapoint.map((value)=>{
                return <BarChart 
                key = {value.label}
                maxvalue = {max}
                value = {value.value}
                label = {value.label}
                />
            })}
        </div>
    )
}
export default Chart