import Row from "./Row";
export default function BoxContainer({ Xdim, Ydim }) {
    const rows = [];
    for (let i = 0; i < Xdim; i++) {
        rows.push(<Row Ydim={Ydim} />)
    }
    return (
        <div>
            {rows}
        </div>
    )
}