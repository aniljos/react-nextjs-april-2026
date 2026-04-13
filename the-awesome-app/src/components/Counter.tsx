// <Counter initCount={5} />

import type React from "react"
import { useState, type ChangeEvent, type MouseEvent } from "react"

type CounterProps = {
    initCount: number
}
// function Counter(props: CounterProps){}

const Counter: React.FC<CounterProps> = ({initCount}) => {

    const [count, setCount] = useState(initCount);

    function inc(evt:MouseEvent ){
        //console.log("inc invoked...",evt);
        //setCount(count + 1);
        //setCount(count + 1);
        setCount((count) => count + 1);
        setCount((count) => count + 1);
        console.log("inc invoked...", count);
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