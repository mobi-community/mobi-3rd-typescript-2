import OneTodo from "@question/components/one-todo";
import { TodoDataBase, TodoEnum } from "@type/todo";
import { createBrowserRouter } from "react-router-dom";

const daily: TodoDataBase = {
    type: TodoEnum.DAILY,
    title: "시작",
    content: "일",
};

const weekly: TodoDataBase = {
    type: TodoEnum.WEEKLY,
    total: new Date(),
};
const monthly: TodoDataBase = {
    type: TodoEnum.MONTHLY,
    goal: "dd?",
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <OneTodo todo={daily} />,
    },
    {
        path: "/weekly",
        element: <OneTodo todo={weekly} />,
    },
    {
        path: "/monthly",
        element: <OneTodo todo={monthly} />,
    },
]);
export default router;
