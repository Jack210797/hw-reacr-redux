import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { ChangeEvent, FormEvent, useState } from 'react'
import { setUserName } from '../redux/userSlice'

const User = () => {
  const userName = useSelector((state: RootState) => state.user.name)
  const dispatch = useDispatch()
  const [newUserName, setNewUserName] = useState('')

  const handleUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewUserName(e.target.value.trim())
  }

  const handleUserNameSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(setUserName(newUserName))
  }
  return (
    <div>
      <h2>User: {userName}</h2>
      <form onSubmit={handleUserNameSubmit}>
        <input type="text" value={newUserName} onChange={handleUserNameChange} />
        <button type="submit">Change user</button>
      </form>
    </div>
  )
}

export default User
