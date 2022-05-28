import { useRootStore } from '../../store'

function TodoRemove({ id }) {
  const { todoStore } = useRootStore()
  const { removeTodo } = todoStore

  return <button className="destroy" onClick={() => removeTodo(id)}></button>
}

export default TodoRemove
