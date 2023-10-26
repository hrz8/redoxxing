import Todo from "./Todo";

const todos = [
    {
        id: 1,
        title: 'Belanja',
        isCompleted: false,
    },
    {
        id: 2,
        title: 'Cuci Motor',
        isCompleted: true,
    },
    {
        id: 3,
        title: 'Isi Galon',
        isCompleted: false,
    },
    {
        id: 4,
        title: 'Cuci Mobik',
        isCompleted: true,
    }
]

function Activities() {
    return (
        <>
            {todos.map(
                (todo) => <Todo
                    key={`key-${todo.id}`}
                    id={`todo-${todo.id}`}
                    name={`todo-${todo.id}`}
                    isCompleted={todo.isCompleted}
                    title={todo.title} />
                )
            }
        </>
    )
}

export default Activities
