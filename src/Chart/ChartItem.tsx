
import { Idata } from '../App'

interface IChartItem extends Idata{
    maxTimeVal: number
}

export const ChartItem = ({ name, time, maxTimeVal }: IChartItem) => {
    const percent = (time*100) / (maxTimeVal+30);
    return (
        <div className="d-flex mb-2">
            <p className='text-color text me-2 page-name'>{name}</p>
            <div className='rounded chart-line position-relative w-100 flex-grow-1'>
                <div className={`${percent === 0 ? 'chart-line' : 'main-color ' } rounded  chart-line-percent position-absolute d-flex align-items-center justify-content-center`} style={{width:`${percent}%`,height:'100%'}}>
                    <p className='line-text text mb-0'>{time}</p>
                </div>
            </div>
        </div>
    )
}
