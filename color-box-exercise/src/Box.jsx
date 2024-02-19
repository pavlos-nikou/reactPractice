import "./Box.css"
import { useState } from "react"
export default function Box(){
    const getRandomColor = ()=>{
        R = Math.floor(Math.random()*255)
        G = Math.floor(Math.random()*255)
        B = Math.floor(Math.random()*255)
        return `rgb(${R},${G},${B}`;
    }
    let color = getRandomColor();
    // console.log(R,G,B);
    // const [color, setColor] = useState(`RGB(${R,G,B})`)
    return (
        <div className="Box"></div>
    )
}