import "./Box.css"
import { useState } from "react"
export default function Box(){
    const getRandomColor = ()=>{
        let R = Math.floor(Math.random()*255)
        let G = Math.floor(Math.random()*255)
        let B = Math.floor(Math.random()*255)
        return `rgb(${R},${G},${B})`;
    }
    const changeColor = ()=>{
        setRandomColor(getRandomColor());
    }
    const [color, setRandomColor] = useState(getRandomColor())
    // console.log(color);
    return (
        <div className="Box" style={{backgroundColor: color}} onClick={changeColor}></div>
    )
}