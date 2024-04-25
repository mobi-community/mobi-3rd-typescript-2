import OneTodo from "@question/components/one-todo";
import Q1Component from "@question/q";
import { TodoDataBase, TodoEnum } from "@type/todo";

function App() {
    const daily: TodoDataBase = {
        type: TodoEnum.DAILY,
        title: "최하영",
        content: "타입스크립트 쥴라어렵다",
    };

    return (
        <>
            <Q1Component />
            <OneTodo data={daily} />
        </>
    );
}

export default App;
