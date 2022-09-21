import { Idata } from "../App"
import { ChartItem } from "./ChartItem"

interface IChart {
    data: Idata[],
    maxTimeVal: number
}

export const Chart = ({ data, maxTimeVal }: IChart) => {
    return (
        <div className='d-flex flex-column'>
            {data.map((item,index)=>{
                return <ChartItem time={item.time} name={item.name} maxTimeVal={maxTimeVal} key={`${item.name}${index}`}/> 
            })}
        </div>
    )
}
