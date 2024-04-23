import { TodoDataBase, TodoEnum } from "@type/todo";

interface Props {
    todo: TodoDataBase;
}

const isDaily = (
    todo: TodoDataBase
): todo is TodoDataBase & {
    title: string;
    content: string;
} => {
    return todo.type === TodoEnum.DAILY;
};

const isWeekly = (
    todo: TodoDataBase
): todo is TodoDataBase & {
    total: number;
} => {
    return todo.type === TodoEnum.WEEKLY;
};

const isMonthly = (
    todo: TodoDataBase
): todo is TodoDataBase & {
    goal: string;
} => {
    return todo.type === TodoEnum.MONTHLY;
};

const OneTodo: React.FC<Props> = ({ todo }) => {
    if (isDaily(todo)) {
    }

    return <div>:)</div>;
};
export default OneTodo;
