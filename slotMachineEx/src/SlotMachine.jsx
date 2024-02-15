import "./SlotMachine.css"
export default function SlotMachine({ val1, val2, val3 }) {
    const winCondition = val1 === val2 && val1 === val3
    const style = { color: winCondition ? "green" : "red" }
    return (
        <div className="SlotMachine">
            <div>
                <h2>{val1}</h2>
                <h2>{val2}</h2>
                <h2>{val3}</h2>
            </div>
            <h2 style={style} >{winCondition ? "You Win!" : "You Lose :("}</h2>
            {winCondition ? <h3>well done!!</h3> : null}

        </div>
    )
}