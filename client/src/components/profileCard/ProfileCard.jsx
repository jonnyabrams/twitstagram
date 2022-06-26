import './profileCard.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProfileCard = () => {
  const { user } = useSelector((state) => state.authReducer.authData)
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

  const ProfilePage = false

  return (
    <div className="profile_card">
      <div className="profile_images">
        <img src={user.coverPic ? serverPublic + user.coverPic : serverPublic + 'defaultCover.jpeg' } alt="" />
        <img src={user.profilePic ? serverPublic + user.profilePic : serverPublic + 'defaultProfile.png' } alt="" />
      </div>

      <div className="profile_name">
        <span>{user.firstname} {user.lastname}</span>
        <span>{user.worksAt ? user.worksAt : "Write about yourself" }</span>
      </div>

      <div className="follow_status">
        <hr />
        <div>
          <div className="follow">
            <span>{user.following.length}</span>
            <span>Following</span>
          </div>
          <div className="vertical_line"></div>
          <div className="follow">
            <span>{user.followers.length}</span>
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
      {ProfilePage ? '' : <span><Link style={{ textDecoration: "none", color: "inherit" }} to={ `/profile/${user._id}` }>My Profile</Link></span>}
    </div>
  )
}

export default ProfileCard