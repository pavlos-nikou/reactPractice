function handleFormSubmit(e){
    e.preventDefault()
    console.log("form submitted");
}

export default function Form() {
    return (
        <form onSubmit={handleFormSubmit} >
            <button>submit</button>
        </form>
    )
}