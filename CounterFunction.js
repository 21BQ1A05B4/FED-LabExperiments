import React, {useState} from "react";

function CounterFunction() {
    const [count, setCount] = useState(0);

    //  Incremental Handler

    const incrementalHandler = () => {
        setCount(count+1);
    };

    //  Decremental Handler

    const decrementalHandler = () => {
        setCount(count-1);
    };

    return (
        <div>
            <button type="button" onClick={incrementalHandler}><h1>+</h1></button>
            &nbsp; &nbsp; &nbsp;
            {count}
            &nbsp; &nbsp; &nbsp;
            <button type="button" onClick={decrementalHandler}><h1>-</h1></button>
        </div>
    )
}

export default CounterFunction;