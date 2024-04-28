import { TodoEnum } from '#types/todo';
import OneTodo from './question/components/one-todo';

function App() {
  const main = {
    type: TodoEnum.DAILY,
    content: '내용',
    title: '제목 ',
  };

  return <OneTodo {...main} />;
}

export default App;
