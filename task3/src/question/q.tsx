import { useTodoArray } from '@hook/use-todo-array';
import OneTodo from './components/one-todo';

const Q1Component: React.FC = () => {
  const [todoArr] = useTodoArray()

  return (
    <>
      { todoArr?.map((todo) => <OneTodo {...{todo}} />) }
    </>
  );
};
export default Q1Component;
