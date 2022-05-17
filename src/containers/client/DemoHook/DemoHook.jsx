import React, {useState, useCallback, useMemo} from 'react'
import Counter from './Counter'

export default function DemoHook() {
    const [showCounter, setShowCounter] = useState(true);
    const [randomNumber, setRandomNumber] = useState(0)
    const renderBigChart = () =>{};
    //useCallback dung de cache function
    //[] :khong bao gio tao lai function moi
    // const renderBigChartMemoized = useCallback(() =>{}, []);
    const renderBigChartMemoized = useCallback(() =>{}, [randomNumber]);

    //usememo: tuong tu nhu callBack nhuwng chi cach gia tri return tu funtion thay vi cache ca function nhu useCallback
    const student = useMemo(()=>({
        fullName: 'Vo Thanh Quy',
        clas: 'BC12',
        random: randomNumber,
    }), [randomNumber]);

    console.log('DemoHook > render');
    return (
        <>
            <h1>DemoHook</h1>
            <p>Random Number: {randomNumber}</p>
            <button className="btn btn-success" onClick={()=>setRandomNumber(Math.random())}>Random Number</button>
            <button className="btn btn-danger" onClick={()=>{setShowCounter(false)}}>Remove Counter</button>
            {showCounter && <Counter 
            // srenderBigChart={renderBigChartMemoized} 
            student={student}/>}
        </>
    )
}
