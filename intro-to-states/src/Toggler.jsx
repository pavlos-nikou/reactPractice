import { useState } from "react"
import "./Toggler.css"

export default function Toggler() {
    const [happy, setHappy] = useState(true)
    const handleClick = ()=>{
        setHappy(!happy);
    }
    return <p className="Toggler" onClick={handleClick}>{happy ? "😀" : "😞"}</p>
}