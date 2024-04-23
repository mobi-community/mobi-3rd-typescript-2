import { TodoDataBase } from "@type/todo.ts";
import axios from "axios";

interface ApiResponse {
    data: TodoDataBase[];
}

export const TodoApi = {
    async getTodo(): Promise<TodoDataBase[]> {
        const res = await axios.get<ApiResponse>("/");
        return res.data.data;
    },
};
