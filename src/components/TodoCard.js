import EditTodo from "./EditTodo";


const TodoCard = ({todoo,del,comp}) => {
    return(
        <div>
            <h1 className={todo.isDone ? "done":""}> {todo.action} </h1>
            <button onClick={() =>comp(todo.id)}>Complete</button>
            <button onClick={() =>del(todo.id)}>Delete</button>
            <EditTodo/>
        </div>
    );
};
export default TodoCard;