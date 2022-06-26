import './infoCard.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {UilPen} from '@iconscout/react-unicons'
import ProfileModal from '../profileModal/ProfileModal'
import { useEffect } from 'react'
import * as userApi from '../../redux/api/userRequest.js'

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false)
  const dispatch = useDispatch()
  const params = useParams()
  const profileUserId = params.id
  const [profileUser, setProfileUser] = useState({})
  const { user } = useSelector((state) => state.authReducer.authData)

  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user)
      } else {
        const profileUser = await userApi.getUser(profileUserId)
        setProfileUser(profileUser)
      }
    }
    fetchProfileUser()
  }, [user])

  return (
    <div className="info_card">
      <div className="info_head">
        <h4>Profile info</h4>
        {user._id === profileUserId ? (
          <div>
            <UilPen width='2rem' height='1.2rem' onClick={() => setModalOpened(true)} />
            <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
          </div>
        ) : ("")}
      </div>

      <div className="info">
        <span><b>Location </b></span>
        <span>London</span>
      </div>

      <div className="info">
        <span><b>Status </b></span>
        <span>In a relationship</span>
      </div>

      <div className="info">
        <span><b>Job </b></span>
        <span>Sumo referee</span>
      </div>

      <button className="button logout-button">Logout</button>
    </div>
  )
}

export default InfoCard