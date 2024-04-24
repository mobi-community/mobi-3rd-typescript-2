import { TodoDataBase } from "#types/todo"

const OneTodo: React.FC<TodoDataBase> = (todo) => {
  return <div>{todo.type}</div>
}
export default OneTodo
