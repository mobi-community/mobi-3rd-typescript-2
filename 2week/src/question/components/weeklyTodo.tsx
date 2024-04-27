import { TodoDataBase } from "@type/todo";

const WeeklyTodo: React.FC<{ todo: TodoDataBase & { total: Date } }> = ({
    todo,
}) => {
    return (
        <div>
            <p>{todo.total.toLocaleDateString()}</p>
        </div>
    );
};
export default WeeklyTodo;
