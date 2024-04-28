import { TodoDataBase, TodoEnum } from '#types/todo';

const OneTodo: React.FC<TodoDataBase> = (todo) => {
  if (todo.type === TodoEnum.DAILY) {
    console.log(`title : ${todo.title} , content : ${todo.content}`);
  } else if (todo.type === TodoEnum.MONTHLY) {
    console.log(`goal : ${todo.goal} `);
  } else if (todo.type === TodoEnum.WEEKLY) {
    console.log(` total : ${todo.total}`);
  }
  return <h1>{todo.type}</h1>;
};
export default OneTodo;

// if(todo.type === TodoEnum.DAILY)
// todo.type === TodoEnum.WEEKLY; 여기 영록님이 todo. .으로 접근했잖아요 .으로접근하는건 객체아닌가요?
//todo는 객체에요
// 어떤객체냐면 영록님이 어떤타입이올거다 라고선언한 TodoDataBase의 키값을가지고있는
// todo.type === TodoEnum.MONTHLY;
// 같이 하는게좋아보여요 지금 ㅈ가 바로답을안알려드리는건 이런 과정을 혼자서도 할수있어야하기때문에
// 어떻게 풀어나가는지 보여드리는거거든요 ts가처음이라 좀어색할게요
// vs오류인가 일단경로문제가 계속떠서 화면이보이는지를모르겠네요 이거는 이따 ;vite에서 안넣은거 너볼게요
