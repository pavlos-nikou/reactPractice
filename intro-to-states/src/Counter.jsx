import { useState } from "react"

export default function Counter({ num }) {
    const [count, setCount] = useState(num)
    const handleClick = ()=>{ setCount(count+1)}
    return (
        <div>
            <p>the count is :{count}</p>
            <button onClick={handleClick}>increment</button>
        </div>
    )
}