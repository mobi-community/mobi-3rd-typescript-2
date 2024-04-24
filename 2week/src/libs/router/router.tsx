import OneTodo from "@question/components/one-todo";
import { TodoDataBase, TodoEnum } from "@type/todo";
import { createBrowserRouter } from "react-router-dom";

const sample: TodoDataBase = {
    type: TodoEnum.DAILY,
    title: "시작",
    content: "일",
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <OneTodo todo={sample} />,
    },
]);
export default router;
