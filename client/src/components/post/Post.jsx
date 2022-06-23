import './post.css'
import Comment from '../../img/assets/comment.png'
import Share from '../../img/assets/share.png'
import Liked from '../../img/assets/like.png'
import Unliked from '../../img/assets/unlike.png'

const Post = ({data}) => {
  return (
    <div className="post">
      <img src={data.img} alt="" />

      <div className="post_reactions">
        <img src={data.liked ? Liked : Unliked} alt="" />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>

      <span>{data.likes} likes</span>
      <div className="details">
        <span><b>{data.name}</b></span>
        <span> {data.description}</span>
      </div>
    </div>
  )
}

export default Post