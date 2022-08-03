import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Posts from '../posts/Posts'
import PostShare from '../postShare/PostShare'
import './feed.css'

const Feed = () => {
  const { user } = useSelector((state) => state.authReducer.authData)
  const params = useParams()

  return (
    <div className="feed">
      { (user._id === params.id || !params.id) && <PostShare /> }
      <Posts />
    </div>
  )
}

export default Feed