import { TodoApi } from "#apis/2"
import { TodoDataBase } from "#types/todo"
import { useState } from "react"

export const useFetchTodo = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [todo, setTodo] = useState<Array<TodoDataBase>>([])
  const fetchTodo = async () => {
    setIsLoading(true)
    try {
      const todoArr = await TodoApi()
      setTodo(todoArr)
    } catch (err) {
      console.log("err발생", err)
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, todo, fetchTodo }
}
