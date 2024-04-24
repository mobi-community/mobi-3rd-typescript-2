import { TodoEnum } from "#const/const"
import OneTodo from "#question/components/one-todo"
import "./App.css"
import { TodoApi } from "./apis/1"

function App() {
  TodoApi()
  return <OneTodo type={TodoEnum.DAILY} content="gdg" title="gdgd" />
}

export default App
