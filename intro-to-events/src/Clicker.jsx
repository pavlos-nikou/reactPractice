function handleClick(){
    console.log("click");
}

function handlehover(){
    console.log("hovered");
}

export default function Clicker() {
    return (
        <div>
            <p onMouseOver={handlehover}>click the button</p>
            <button onClick={handleClick}>click</button>
        </div>
    )
}