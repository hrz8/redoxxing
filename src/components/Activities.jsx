import { useSelector } from "react-redux";
import Todo from "./Todo";

function Activities() {
    const activities = useSelector((state) => state.todo.activities);
    return (
        <>
            {activities.map(
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
