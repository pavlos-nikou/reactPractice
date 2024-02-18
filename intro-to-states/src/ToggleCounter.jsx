import { useState } from "react"

export default function ToggleCounter() {
    const [isHappy, setIsHappy] = useState(true)
    const [count, setCount] = useState(0)
    const handleClickEvent = () => {
        setIsHappy(!isHappy);
        setCount(count + 1);
    }
    return (
        <div>
            <h1>{isHappy? "😁" : "😞"}</h1>
            <p>you Changed the emoji {count} times.</p>
            <button onClick={handleClickEvent}>change emoji</button>
        </div>
    )
}