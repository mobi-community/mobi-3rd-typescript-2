import { TodoDataBase } from "@type/todo";
import axios from "axios";

interface TodoData {
  data : TodoDataBase[];
}

export const TodoApi = {
  async getTodo() :Promise<TodoData>{
    const res = await axios.get<TodoData>("/");
    return res.data;
  },
};

