import { TodoDataBase } from "@type/todo";
import axios from "axios";

export const TodoApi = {
  async getTodo<T extends TodoDataBase[]>() : Promise<T> {
    const res = await axios.get<T>("/");
    return res.data;
  },
};
