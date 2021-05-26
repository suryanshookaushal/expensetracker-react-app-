import './Barchar.css'

const BarChart = (props)=>{

    let per = "0%"

    if(props.maxvalue>0){
        per = Math.round((props.value/props.maxvalue)*100)+'%'
    }
    return (
        <div className="barchart">
            <div className="barchart_fill">
                <div className="barchart_inner" style={{height: per}}></div>
            </div>
            <div className="barchart_label">
                {props.label}
            </div>
        </div>
    )
}

export default BarChart