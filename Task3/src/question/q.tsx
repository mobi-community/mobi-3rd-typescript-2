import OneTodo from "./components/one-todo"
import { useFetchTodo } from "#hooks/use-fetch-todo"
import { useEffect } from "react"

const Q1Component: React.FC = () => {
  const { isLoading, todo, fetchTodo } = useFetchTodo() // hooks로 상태관리

  useEffect(() => {
    fetchTodo() // 화면 로드시 fetchTodo한번만 진행
  }, [])

  if (isLoading) {
    return <h1>Loading....</h1> // 로딩이 완료되지않았을때 보여줄 것
  }
  return (
    <>
      {todo.map((todo, idx) => (
        <OneTodo {...todo} key={idx} />
      ))}
    </>
  )
}
export default Q1Component
