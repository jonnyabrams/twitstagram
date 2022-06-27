import './followersCard.css'
import User from '../user/User'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getAllUsers } from '../../redux/api/userRequest'

const FollowersCard = () => {
  const [users, setUsers] = useState([])
  const { user } = useSelector((state) => state.authReducer.authData)

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await getAllUsers()
      setUsers(data)
    }
    fetchUsers()
  }, [])

  return (
    <div className="followers_card">
      <h3>People you may know</h3>

      {users.map((person, id) => {
        if (person._id !== user._id) {
        return <User person={person} key={id} />
        }
      })}
    </div>
  )
}

export default FollowersCard