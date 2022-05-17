import React, {useState, useEffect, memo} from 'react'

function Counter() {
    const [count, setCount] = useState(0); // useState tra ve mang co 2 phan tu, value cua state ddang qli va ptu tuong duong voi
    //ham setState cuar class ( de cap nhat setState)
    
    // const value = state[0];
    // const setState = state[1];
    const [loading, setLoading] = useState(false);
    // const [state, setState] = useState({
    //     count: 0,
    //     loading: false,
    //     listMovie: [],
    // })

    //componentDidMount + componentDidUpdate
    useEffect(()=>{
        console.log('Chay lan dau va tat ca lan component re-render');
    })

    //componentDidMount (nen callApi o day)
    //[] : mang dependencies
    useEffect(()=>{
        console.log('Chi chay mot lan duy nhat');
        //componentWillUnmount
        return ()=>{
            console.log('Chi chay khi component mat khoi dom');

        }
    }, []) // chay lai khi count thay doi

    useEffect(()=>{
        console.log('Chay lan dau va chi chay lai khi gia tri cua bien trong mang dependencies thay doi');
    }, [count, loading])
    console.log('Counter > render');



    return (
        <div>
            <h1>Counter</h1>
            <p>Current number is {count}</p>
            <button className="btn btn-success" onClick={()=>setCount(count + 1)}>+</button>
        </div>
    )
}

export default memo(Counter)

// memo: HOC (Higher Order Component)
//Su dung ky thuat memozation
//Giong poor component cua class