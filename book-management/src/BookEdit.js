function BookEdit({book , onEdit}){
    const [title, setTitle] = useState(book.title)

    const handleTitleState = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onEdit(book.id, title)
    }

    return <form className="book-edit" onSubmit={handleSubmit}>
        <label> Title </label>
        <input className="input" value={title} onChange={handleTitleState}/>
        <button className="button is-primary"> Save </button> 
    </form>
}

export default BookEdit