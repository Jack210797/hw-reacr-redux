import { useSelector } from 'react-redux'
import '../index.css'
import { decrementAsync, incrementAsync } from '../redux/counterSlice'
import { RootState, useAppDispatch } from '../redux/store'

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count)
  const dispatch = useAppDispatch()

  return (
    <div className="container">
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(incrementAsync())}>Increment</button>
      <button onClick={() => dispatch(decrementAsync())}>Decrement</button>
    </div>
  )
}

export default Counter
