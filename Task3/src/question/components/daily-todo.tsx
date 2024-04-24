import { TodoEnum } from "#const/const"
import { TodoType } from "#types/todo"
import { ReactElement } from "react"

const DailyTodo = (todo: TodoType<TodoEnum.DAILY>): ReactElement => {
  return (
    <div>
      <h1>매일 해야할 일</h1>
      <p>Title : {todo.title}</p>
      <p>Content : {todo.content}</p>
    </div>
  )
}
export default DailyTodo
