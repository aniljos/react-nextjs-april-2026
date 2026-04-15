// <Counter initCount={5} />

import type React from "react"
import { useEffect, useRef, useState, type ChangeEvent } from "react"

type CounterProps = {
    initCount: number
}
// function Counter(props: CounterProps){}

const Counter: React.FC<CounterProps> = ({initCount}) => {

    const [count, setCount] = useState(initCount);
    const clickCount = useRef(0);

    useEffect(() => {
        console.log("count updated...", count);
    }, [count])

    function inc( ){
        //console.log("inc invoked...",evt);
        //setCount(count + 1);
        //setCount(count + 1);
        setCount((count) => count + 1);
        //setCount((count) => count + 1);
        clickCount.current++
        console.log("clickCount", clickCount.current)
        
    }

    function handleChange(evt:ChangeEvent<HTMLInputElement>){ 
        setCount(evt.target.valueAsNumber);
    }

    return (
        <div>
            <h4>Count: {count}</h4>
            <div>
                <button onClick={inc}>++</button> &nbsp;
                <button onClick={() => setCount(count - 1)}>--</button>
                <div>
                    <input type="number" 
                            placeholder="Count" 
                            value={count}
                            onChange={handleChange}/>
                </div>
            </div>
        </div>
    )
}

export default Counter;