export default function Clicker({ message, buttonText }) {
    function handleClick() {
        alert(message)
    }
    return (
        <button onClick={handleClick} props={message}>{buttonText}</button>
    )
}