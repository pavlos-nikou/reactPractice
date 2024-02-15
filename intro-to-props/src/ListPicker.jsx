export default function ListPicker({itemList}){
    const randomIndex = Math.floor(Math.random()* itemList.length)
    const randomItem = itemList[randomIndex];
    return (
        <>
        <p>the randomized item list is {itemList}</p>
        <p>the chozen item is {randomItem}</p>
        </>
    )
}