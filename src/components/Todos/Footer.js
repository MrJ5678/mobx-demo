import { observer } from 'mobx-react-lite'
import { useRootStore } from '../../store'
import UnCompletedCount from './UnCompletedCount'

function Footer() {
  const { todoStore } = useRootStore()
  const { changeFilterCondition, filterCondition, clearCompletedTodos } =
    todoStore
  return (
    <footer className="footer">
      <UnCompletedCount />
      <ul className="filters">
        {['All', 'Active', 'Completed'].map((item, idx) => (
          <li key={idx}>
            <button
              className={filterCondition === item ? 'selected' : ''}
              onClick={() => changeFilterCondition(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
      <button className="clear-completed" onClick={clearCompletedTodos}>
        Clear completed
      </button>
    </footer>
  )
}

export default observer(Footer)
