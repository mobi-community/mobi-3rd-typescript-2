import { TodoEnum } from "#const/const"
import { TodoDataBase } from "#types/todo"
import { ReactElement } from "react"
import { DailyTodo, MonthTodo, WeeklyTodo } from "."

const OneTodo: React.FC<TodoDataBase> = (todo) => {
  const checkTodoType = (todo: TodoDataBase): ReactElement => {
    if (todo.type === TodoEnum.DAILY) {
      return <DailyTodo {...todo} />
    }
    if (todo.type === TodoEnum.MONTHLY) {
      return <MonthTodo {...todo} />
    }
    return <WeeklyTodo {...todo} />
  }
  return checkTodoType(todo)
}
export default OneTodo
