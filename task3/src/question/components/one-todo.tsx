import type { TodoDataBase } from "@type/todo";
import { isDaily, isMonthly, isWeekly } from "@util/type-guard";

interface OneTodoProps{
  todo: TodoDataBase
}

const OneTodo: React.FC<OneTodoProps> = ({todo}) => {
  
  if (isDaily(todo)) {
    return (
      <div>
        <title>{todo.title}</title>
        <p>{todo.content}</p>
      </div>
    )
  }
  
  if (isWeekly(todo)) return <p>{todo.total.toDateString()}</p>
  
  if (isMonthly(todo)) return <p>{todo.goal}</p>

  return <p>🤦 하...</p>
}
export default OneTodo;
