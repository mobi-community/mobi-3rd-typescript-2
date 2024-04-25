export enum TodoEnum {
  DAILY = "DAILY",
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY",
}

export interface TodoDaily {
  type: TodoEnum.DAILY;
  content: string;
  title: string;
}
export interface TodoWeekly {
  type: TodoEnum.WEEKLY;
  total: Date;
}
export interface TodoMonthly {
  type: TodoEnum.MONTHLY;
  goal: string;
}
export type TodoDataBase =
  | TodoDaily
  | TodoWeekly
  | TodoMonthly

export type TodoType<T extends TodoEnum = TodoEnum> = Extract<
  TodoDataBase,
  { type: T }
>;
