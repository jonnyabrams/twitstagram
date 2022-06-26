import './post.css'
import Comment from '../../img/assets/comment.png'
import Share from '../../img/assets/share.png'
import Liked from '../../img/assets/like.png'
import Unliked from '../../img/assets/unlike.png'
import { useSelector } from 'react-redux'

const Post = ({data}) => {
  const { user } = useSelector((state) => state.authReducer.authData)
  return (
    <div className="post">
      <img src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""} alt="" />

      <div className="post_reactions">
        <img src={data.liked ? Liked : Unliked} alt="" />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>

      <span style={{ color: "var(--gray)", fontSize: '12px' }}>{data.likes} likes</span>

      <div className="details">
        <span><b>{data.name}</b></span>
        <span> {data.description}</span>
      </div>
    </div>
  )
}

export default Post