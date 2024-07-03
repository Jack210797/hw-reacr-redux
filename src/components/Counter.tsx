import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/actions'
import { CounterState } from '../redux/types'
import '../index.css'

const Counter = () => {
  const count = useSelector((state: CounterState) => state.count)
  const dispatch = useDispatch()
  return (
    <div className="container">
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter
