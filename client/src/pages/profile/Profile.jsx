import ProfileLeft from '../../components/profileLeft/ProfileLeft'
import ProfileCard from '../../components/profileCard/ProfileCard'
import Feed from '../../components/feed/Feed'
import './profile.css'

const Profile = () => {
  return (
    <div className="profile">
      <ProfileLeft />
      <div className="profile_center">
        <ProfileCard />
        <Feed />
      </div>
    </div>
  )
}

export default Profile