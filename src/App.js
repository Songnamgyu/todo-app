import TodoTemplate  from "./TodoTemplate";
import './components/TodoTemplate.scss'
import TodoInserts from "./components/TodoInsert";
const App = () => {
  return <div>
    <TodoTemplate>
          <TodoInserts/>
    </TodoTemplate>
  </div>
}

export default App;