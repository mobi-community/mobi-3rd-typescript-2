import type { TodoDataBase } from "@type/todo";
import axios from 'axios';

interface TodoApiSignature {
  getTodo: () => Promise<Array<TodoDataBase>>
}

export const TodoApi: TodoApiSignature = {
  async getTodo() {
    let res = null
    try {
      res = await axios.get("/");
    } catch {
      throw new Error("데이터 패칭 실패 😉") 
    }
    return res.data;
  },
};
