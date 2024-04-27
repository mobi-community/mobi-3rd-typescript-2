import type { TodoDaily, TodoDataBase, TodoMonthly, TodoWeekly } from "@type/todo";
export const isDaily = (todo: TodoDataBase): todo is TodoDaily => 'content' in todo && 'title' in todo
export const isWeekly = (todo: TodoDataBase): todo is TodoWeekly => 'total' in todo
export const isMonthly = (todo: TodoDataBase): todo is TodoMonthly => 'goal' in todo