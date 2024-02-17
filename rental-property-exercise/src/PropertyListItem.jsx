import PropTypes from "proptypes"

export default function PropertyListItem({ id, name, rating, price }) {
    return (
        <li>
            <h2>{name}</h2>
            <h3>{`$${price} per night.`}</h3>
            <h3>rating: {rating}⭐</h3>
        </li>
    )
}
PropertyListItem.propTypes = {
    name: PropTypes.string,
    rating: PropTypes.number,
    price: PropTypes.number
}