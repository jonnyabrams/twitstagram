import './profileCard.css'
import Cover from '../../img/assets/cover1.jpeg'
import ProfilePic from '../../img/assets/profile1.jpeg'

const ProfileCard = () => {
  const ProfilePage = true

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
            <span>2,543</span>
            <span>Following</span>
          </div>
          <div className="vertical_line"></div>
          <div className="follow">
            <span>843</span>
            <span>Followers</span>
          </div>

          {ProfilePage && (
            <>
              <div className="vertical_line">

              </div>
              <div className="follow">
                <span>3</span>
                <span>posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? '' : <span>My Profile </span>}
    </div>
  )
}

export default ProfileCard