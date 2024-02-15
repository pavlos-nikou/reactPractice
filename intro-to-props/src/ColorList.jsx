export default function ColorList({colors}) {
    const lis = colors.map(color => <li style={{color: color}}>{color}</li>)
    return (
        <div>
            <h1>Color List</h1>
            <ul>
                {lis}
            </ul>
        </div>
    );
}