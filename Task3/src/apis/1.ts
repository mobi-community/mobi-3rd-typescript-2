import { TodoDataBase } from "#types/todo"
import axios from "axios"

interface TypeGetTodo {
  (): Promise<Array<TodoDataBase>>
}

export const getTodo: TypeGetTodo = async () => {
  const res = await axios.get<Array<TodoDataBase>>("/")
  return res.data
}
