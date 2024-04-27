import type { TodoDataBase } from "@type/todo";
import axios from 'axios';

interface TodoApiSignature {
  getTodo: () => Promise<Array<TodoDataBase>>
}

export const TodoApi: TodoApiSignature = {
  async getTodo() {
    let result = null
    try {
      const response = await axios.get("/");
      result = response.data
    } catch {
      console.error("잇쿵 😉..")
      result = []
    }
    return result;
  },
};
