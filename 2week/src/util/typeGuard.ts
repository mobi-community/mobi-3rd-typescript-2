import { TodoDataBase, TodoEnum } from "@type/todo";

export const isDailyType = (
    todo: TodoDataBase
): todo is Extract<TodoDataBase, { type: TodoEnum.DAILY }> => {
    return todo.type === TodoEnum.DAILY;
};

export const isWeeklyType = (
    todo: TodoDataBase
): todo is Extract<TodoDataBase, { type: TodoEnum.WEEKLY }> => {
    return todo.type === TodoEnum.WEEKLY;
};

export const isMonthlyType = (
    todo: TodoDataBase
): todo is Extract<TodoDataBase, { type: TodoEnum.MONTHLY }> => {
    return todo.type === TodoEnum.MONTHLY;
};
