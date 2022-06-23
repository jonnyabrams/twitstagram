import Posts from '../posts/Posts'
import PostShare from '../postShare/PostShare'
import './feed.css'

const Feed = () => {
  return (
    <div className="feed">
      <PostShare />
      <Posts />
    </div>
  )
}

export default Feed