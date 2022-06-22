import FollowersCard from '../followersCard/FollowersCard'
import LogoSearch from '../logoSearch/LogoSearch'
import ProfileCard from '../profileCard/ProfileCard'
import './profileSide.css'

const ProfileSide = () => {
  return (
    <div>
      <div className="profile_side">
        <LogoSearch />
        <ProfileCard />
        <FollowersCard />
      </div>
    </div>
  )
}

export default ProfileSide