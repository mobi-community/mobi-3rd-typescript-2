import { TodoEnum } from "#const/const"
import { TodoType } from "#types/todo"
import { ReactElement } from "react"

const WeeklyTodo = (todo: TodoType<TodoEnum.WEEKLY>): ReactElement => {
  return (
    <div>
      <h1>매주 할 일</h1>
      <p>Total : {todo.total.toString()}</p>
    </div>
  )
}
export default WeeklyTodo
