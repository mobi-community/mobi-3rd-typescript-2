import { TodoDataBase } from "@type/todo";

const DailyTodo: React.FC<{
    todo: TodoDataBase & { title: string; content: string };
}> = ({ todo }) => {
    return (
        <div>
            <p>{todo.title}</p>
            <p>{todo.content}</p>
        </div>
    );
};
export default DailyTodo;
