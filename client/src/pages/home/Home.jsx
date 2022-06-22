import ProfileSide from '../../components/profileSide/ProfileSide'
import './home.css'

const Home = () => {
  return (
    <div className="home">
      <ProfileSide />
      <div className="postSide">Posts</div>
      <div className="rightSide">Rightside</div>
    </div>
  )
}

export default Home