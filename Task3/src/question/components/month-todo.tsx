import { TodoEnum } from "#const/const"
import { TodoType } from "#types/todo"
import { ReactElement } from "react"

const MonthTodo = (todo: TodoType<TodoEnum.MONTHLY>): ReactElement => {
  return (
    <div>
      <h1>매달 할 일</h1>
      <p>Goal : {todo.goal}</p>
    </div>
  )
}
export default MonthTodo
