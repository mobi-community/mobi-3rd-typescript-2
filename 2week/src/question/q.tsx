import { TodoApi } from "@api/1";
import { TodoDataBase } from "@type/todo";
import { useEffect, useState } from "react";

const Q1Component: React.FC = () => {
    const [todo, setTodo] = useState<TodoDataBase[]>([]);

    useEffect(() => {
        const fetchTodo = async () => {
            const response = await TodoApi.getTodo();
            setTodo(response.data);
            console.log(response);
        };

        fetchTodo();
    }, []);

    return (
        <>
            {todo.map((todo, idx) => (
                <div key={idx}>{todo.type}</div>
            ))}
        </>
    );
};
export default Q1Component;
