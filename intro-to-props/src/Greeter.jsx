export default function Greeter({person = "mistery man..............or woman", from="anonymous"}) {
    return (
        <>
        <h1>hello there, {person}</h1>
        <h2>-from {from}</h2>
        </>
    )
}