function Todo({id, name, title, isCompleted }) {
    return (
        <>
            <div>
                <input type="checkbox" name={name} id={id} checked={isCompleted} />
                <label>{title}</label>
            </div>
        </>
    )
}

export default Todo
