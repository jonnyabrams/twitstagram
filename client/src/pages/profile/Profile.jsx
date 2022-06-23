import ProfileLeft from '../../components/profileLeft/ProfileLeft'
import ProfileCard from '../../components/profileCard/ProfileCard'
import Feed from '../../components/feed/Feed'
import RightSide from '../../components/rightSide/RightSide'
import './profile.css'

const Profile = () => {
  return (
    <div className="profile">
      <ProfileLeft />
      <div className="profile_center">
        <ProfileCard />
        <Feed />
      </div>
      <RightSide />
    </div>
  )
}

export default Profile