import './rightSide.css'
import Comment from '../../img/assets/comment.png'
import Home from '../../img/assets/home.png'
import Notification from '../../img/assets/notification.png'
import { useState } from 'react'
import { UilSetting } from '@iconscout/react-unicons'
import TrendCard from '../trendCard/TrendCard'
import ShareModal from '../shareModal/ShareModal'

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false)

  return (
    <div className="right_side">
      <div className="nav_icons">
        <img src={Home} alt="" />
        <UilSetting />
        <img src={Notification} alt="" />
        <img src={Comment} alt="" />
      </div>

      <TrendCard />

      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  )
}

export default RightSide