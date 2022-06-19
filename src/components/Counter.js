import React, { useEffect, useRef, useState } from "react";

const Counter = (props) => {
    const [counter, setCounter] = useState(0);
    const [amount, setAmount] = useState(1);

    const amountRef = useRef(1)

    useEffect(() => {
        console.log("Component Mount");

        const everySecond = setInterval(() => {
            setAmount((prev) => prev + 1);
        }, 1000);

        return () => {
            console.log("Component Unmount");
            clearInterval(everySecond);
        }
    }, [])

    useEffect(() => {
        console.log("Counter changed");

        return () => {
            console.log("Destoyed");
        }
    }, [counter])


    return (
        <div style={{ textAlign: "center" }}>
            Counter: {counter}
            <button onClick={() => { setCounter(counter + amount) }}> + </button>
            <input ref={amountRef} onChange={() => { setAmount(++amountRef.current.value) }} ></input>
        </div>

    )
}

export default Counter;