import PropertyListItem from "./PropertyListItem"
import "./PropertyList.css"

export default function PropertyList({ properties }) {
    return (
        <ul className = "PropertyList">
            {properties.map(property => (
                <PropertyListItem key={property.id} {...property} />
            ))}
        </ul>
    )
}