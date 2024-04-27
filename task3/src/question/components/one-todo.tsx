import { TodoDataBase } from "@type/todo";

interface Props {
    data: TodoDataBase;
}

// const OneTodo: React.FC<Props> = ({ data }) => {
//     switch (data.type) {
//         case TodoEnum.DAILY:
//             return (
//                 <>
//                     <div>{data.title}</div>
//                     <div>{data.content}</div>
//                 </>
//             );
//         case TodoEnum.WEEKLY:
//             return <div>{data.total.toDateString()}</div>;
//         case TodoEnum.MONTHLY:
//             return <div>{data.goal}</div>;
//     }
// };
// export default OneTodo;

const OneTodo: React.FC<Props> = ({ data }) => {
    if ("title" in data && "content" in data) {
        return (
            <>
                <div>{data.title}</div>
                <div>{data.content}</div>
            </>
        );
    } else if ("total" in data) {
        return <div>{data.total.toDateString()}</div>;
    } else if ("goal" in data) {
        return <div>{data.goal}</div>;
    }
};
export default OneTodo;
