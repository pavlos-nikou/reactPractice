import Box from "./Box"
import "./Row.css"
export default function Row({Ydim}){
    const row = []
    for (let i = 0; i < Ydim; i++) {
        row.push(<Box/>)
    }
    return (
        <div className="Row">
            {row}
        </div>
    )
}