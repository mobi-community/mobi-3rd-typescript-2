import { TodoDataBase } from "#types/todo"
import axios from "axios"

const getTodo = async <T = TodoDataBase>(): Promise<T> => {
  const res = await axios.get<T, T>("/")
  console.log(res)
  return res
}

export const TodoApi = async () => await getTodo()
