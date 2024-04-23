import { TodoDataBase } from "@type/todo";

const WeeklyTodo: React.FC<{ todo: TodoDataBase & { total: number } }> = ({
    todo,
}) => {
    return (
        <div>
            <p>{todo.total}</p>
        </div>
    );
};
export default WeeklyTodo;
