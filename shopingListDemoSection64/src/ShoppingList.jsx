import ShoppingItem from "./ShoppingItem"

export default function ShoppingList({ items }) {
    return (
        <ul>
            {items.map(item => (
                <ShoppingItem {...item} />
            ))}
        </ul>
    )
}