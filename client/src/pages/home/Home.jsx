import PostSide from '../../components/postSide/PostSide'
import ProfileSide from '../../components/profileSide/ProfileSide'
import './home.css'

const Home = () => {
  return (
    <div className="home">
      <ProfileSide />
      <PostSide />
      <div className="rightSide">Rightside</div>
    </div>
  )
}

export default Home