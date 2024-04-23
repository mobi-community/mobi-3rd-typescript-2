import { TodoDataBase, TodoEnum } from "@type/todo";
import DailyTodo from "./dailyTodo";
import WeeklyTodo from "./weeklyTodo";
import MonthlyTodo from "./monthlyTodo";

interface Props {
    todo: TodoDataBase;
}

const OneTodo: React.FC<Props> = ({ todo }) => {
    switch (todo.type) {
        case TodoEnum.DAILY:
            return (
                <DailyTodo
                    todo={
                        todo as TodoDataBase & {
                            title: string;
                            content: string;
                        }
                    }
                />
            );
        case TodoEnum.WEEKLY:
            return (
                <WeeklyTodo todo={todo as TodoDataBase & { total: number }} />
            );
        case TodoEnum.MONTHLY:
            return (
                <MonthlyTodo todo={todo as TodoDataBase & { goal: string }} />
            );
        default:
            return <div>Unknown Todo Type</div>;
    }
};
export default OneTodo;
