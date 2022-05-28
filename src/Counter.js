import { observer } from 'mobx-react-lite'
import { useRootStore } from './store'

function Counter() {
  const { counterStore } = useRootStore()
  const { count, increment, decrement } = counterStore
  return (
    <div>
      <button onClick={increment}>increment</button>
      <button>{count}</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default observer(Counter)
