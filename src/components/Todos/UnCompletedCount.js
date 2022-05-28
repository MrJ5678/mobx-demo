import { observer } from 'mobx-react-lite'

function UnCompletedCount() {
  const { todoStore } = useRootStore()
  const { unCompletedTodosCount } = todoStore

  return (
    <span className="todo-count">
      <strong>{unCompletedTodosCount}</strong> item left
    </span>
  )
}

export default observer(UnCompletedCount)
