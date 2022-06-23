import Posts from '../posts/Posts'
import PostShare from '../postShare/PostShare'
import './postSide.css'

const PostSide = () => {
  return (
    <div className="post_side">
      <PostShare />
      <Posts />
    </div>
  )
}

export default PostSide