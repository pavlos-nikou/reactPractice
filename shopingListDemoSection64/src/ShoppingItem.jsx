export default function ShoppingItem({ id, name, quantity, completed }) {
    return (
        <li key={id}
            style={{
                color: completed ? "grey" : "white",
                textDecoration: completed ? "line-through" : "none"
            }}
        >
            {name} - {quantity}
        </li>
    )
}