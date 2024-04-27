import { TodoDataBase } from "@type/todo";

const MonthlyTodo: React.FC<{ todo: TodoDataBase & { goal: string } }> = ({
    todo,
}) => {
    return <div>{todo.goal}</div>;
};
export default MonthlyTodo;
