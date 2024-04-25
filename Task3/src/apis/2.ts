import { TodoDataBase } from "#types/todo"
import axios from "axios"

export const TodoApi = async <T extends TodoDataBase>(): Promise<Array<T>> => {
  const res = await axios.get<Array<T>>("/")
  return res.data
}
