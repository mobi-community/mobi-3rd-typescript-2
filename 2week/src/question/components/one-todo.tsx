import { TodoDataBase } from "@type/todo";
import DailyTodo from "./dailyTodo";
import WeeklyTodo from "./weeklyTodo";
import MonthlyTodo from "./monthlyTodo";
import { isDailyType, isMonthlyType, isWeeklyType } from "@util/typeGuard";

interface Props {
    todo: TodoDataBase;
}

const OneTodo: React.FC<Props> = ({ todo }) => {
    if (isDailyType(todo)) {
        return <DailyTodo todo={todo} />;
    } else if (isWeeklyType(todo)) {
        return <WeeklyTodo todo={todo} />;
    } else if (isMonthlyType(todo)) {
        return <MonthlyTodo todo={todo} />;
    } else {
        <div>Unknown todo type</div>;
    }
};
export default OneTodo;
