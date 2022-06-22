import LogoSearch from '../logoSearch/LogoSearch'
import ProfileCard from '../profileCard/ProfileCard'
import './profileSide.css'

const ProfileSide = () => {
  return (
    <div>
      <div className="profile_side">
        <LogoSearch />
        <ProfileCard />
      </div>
    </div>
  )
}

export default ProfileSide