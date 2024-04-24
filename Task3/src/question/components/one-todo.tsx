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
  return checkTodoType(todo) // 아까여기 주저리주저리를 따로분리했는데 
}
export default OneTodo
