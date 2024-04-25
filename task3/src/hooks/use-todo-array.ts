import { TodoApi } from "@api/1"
import { TodoDataBase } from "@type/todo"
import { useEffect, useState } from "react"

export const useTodoArray = () => {
  const [todoArr, setTodoArr] = useState<Array<TodoDataBase>>()
  
  const loadTodo = async () => {
    let todo: Array<TodoDataBase> = [];
    try {
      todo = await TodoApi.getTodo();
    } catch (e) {
      console.error(e)
      todo = []
    }
    setTodoArr(todo)
  }

  useEffect(() => {
    loadTodo()
  }, [])
  
  return [todoArr]
}