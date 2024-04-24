import "./App.css";

import { TodoDataBase, TodoEnum } from "@type/todo";
import OneTodo from "@question/components/one-todo";

function App() {
    const sample: TodoDataBase = {
        type: TodoEnum.DAILY,
        title: "시작",
        content: "일",
    };

    return (
        <>
            {/* <RouterProvider router={router}></RouterProvider> */}
            <OneTodo todo={sample} />
        </>
    );
}

export default App;
