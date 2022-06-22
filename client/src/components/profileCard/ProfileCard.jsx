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

      <div className="profile_name">
        <span>Dwight Rortugal</span>
        <span>Chief Royal Food Taster</span>
      </div>

      <div className="follow_status">
        <hr />
        <div>
          <div className="follow">
            <span>12,543</span>
            <span>Followers</span>
          </div>
          <div className="vertical_line"></div>
          <div className="follow">
            <span>843</span>
            <span>Following</span>
          </div>
        </div>
        <hr />
      </div>

      <span>
        My Profile
      </span>
    </div>
  )
}

export default ProfileCard