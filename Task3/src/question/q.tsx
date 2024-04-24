// import { TodoEnum } from "#const/const"
// import { TodoDataBase } from "#types/todo"
// import OneTodo from "./components/one-todo"

import { TodoEnum } from "#const/const"
import { TodoDataBase } from "#types/todo"
import OneTodo from "./components/one-todo"

const Q1Component: React.FC = () => {
  const todoArr: Array<TodoDataBase> = [
    {
      type: TodoEnum.DAILY,
      content: "test",
      title: "testTitle",
    },
    {
      type: TodoEnum.WEEKLY,
      total: new Date(),
    },
    {
      type: TodoEnum.MONTHLY,
      goal: "test goal",
    },
  ]

  return (
    <>
      {todoArr.map((todo, idx) => (
        <OneTodo {...todo} key={idx} />
      ))}
    </>
  )

}
export default Q1Component
