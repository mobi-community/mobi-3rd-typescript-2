import axios from "axios";
import { TodoDataBase } from "@type/todo";

export const TodoApi = {
    async getTodo(): Promise<TodoDataBase[]> {
        const res = await axios.get<TodoDataBase[]>("/");
        return res.data;
    },
};
