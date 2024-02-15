// export default function DoubleDice() {
//     const rand1 = Math.floor(Math.random()*3)+1
//     const rand2 = Math.floor(Math.random()*3)+1
//     const message = rand1 === rand2 ? "You Win! :)" : "You Lose! :("
//     return (
//         <>
//         <h1>{message}</h1>
//         <p>Num1: {rand1}</p>
//         <p>Num1: {rand2}</p>
//         </>
//     )
// }
// export default function DoubleDice() {
//     const rand1 = Math.floor(Math.random()*3)+1
//     const rand2 = Math.floor(Math.random()*3)+1
//     return (
//         <>
//         <h1>Double Dice</h1>
//         {rand1 === rand2 ? <h2>You Win</h2> : null}
//         <p>Num1: {rand1}</p>
//         <p>Num1: {rand2}</p>
//         </>
//     )
// }
export default function DoubleDice() {
    const rand1 = Math.floor(Math.random() * 3) + 1
    const rand2 = Math.floor(Math.random() * 3) + 1
    const style = {color: rand1 === rand2 ? "green" : "red"}
    return (
        <>
            <h1 style={style} >Double Dice</h1>

            <p>Num1: {rand1}</p>
            <p>Num1: {rand2}</p>
        </>
    )
}