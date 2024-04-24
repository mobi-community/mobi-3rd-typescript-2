import { TodoEnum } from "#const/const" // 절대경로를 사용해서 import

export type TodoDataBase =
  | {
      type: TodoEnum.DAILY
      content: string
      title: string
    }
  | {
      type: TodoEnum.WEEKLY
      total: Date
    }
  | {
      type: TodoEnum.MONTHLY
      goal: string
    }

export type TodoType<T extends TodoEnum> = Extract<TodoDataBase, { type: T }>
