import { useEffect, useState } from 'react';
import './App.css';
import { Chart } from './Chart/Chart';

export interface Idata {
  name: string,
  time: number
}

function App() {
  const [data, setData] = useState<Idata[]>(
    [{ name: "Landing Page", time: 7.4 },
    { name: "Configurator", time: 0.1 },
    { name: "Check-out", time: 7.0 },
    { name: "Deal", time: 3.8 }]
  );
  const [maxTimeVal, setMaxTimeVal] = useState(0);
  const [timeID,seTimeID] = useState<number | null>(null);

  
  const changeDataRandomly = () => {
    const dataCopy = [...data];
    dataCopy.forEach(item=>{
      item.time = +((Math.random() * (50 - 0) + 0).toFixed(1));
    })
    setData(dataCopy);
  }
  const addTimeOut = ()=>{
    seTimeID( setTimeout(()=>{
      changeDataRandomly()
    },53000) as unknown as number
    );
    
  }
  const clearPrevTimer = ()=>{
    if(timeID !== null){
      clearTimeout(timeID);
      seTimeID(null);
    }
  };

  useEffect(() => {
    
    const maxTime = Math.max(...data.map(item => item.time));
    setMaxTimeVal(maxTime);
    clearPrevTimer()
    addTimeOut();  
  }, [data])

  return (
    <div className='mt-5 mx-4 mx-xl-auto d-flex flex-column app'>
      <h1 className='title text-color mb-3'>SPENT TIME (SECONDS) </h1>
      <Chart data={data} maxTimeVal={maxTimeVal} />
      <button className='rounded button-style main-color mt-3 text align-self-center ' onClick={changeDataRandomly}>
        Update Data
      </button>
    </div>
  );
}

export default App;
