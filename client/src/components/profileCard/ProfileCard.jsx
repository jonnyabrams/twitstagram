import './profileCard.css'
import Cover from '../../img/assets/cover1.jpeg'
import ProfilePic from '../../img/assets/profile1.jpeg'

const ProfileCard = () => {
  return (
    <div className="profile_card">
      <div className="profile_images">
        <img src={Cover} alt="" />
        <img src={ProfilePic} alt="" />
      </div>
    </div>
  )
}

export default ProfileCard