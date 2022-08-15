import "./post.css";
import Comment from "../../img/assets/comment.png";
import Share from "../../img/assets/share.png";
import Liked from "../../img/assets/like.png";
import Unliked from "../../img/assets/unlike.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { likePost } from "../../redux/api/postRequest";

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);

  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked(!liked);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };

  return (
    <div className="post">
      <img
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
        alt=""
      />

      <div className="post_reactions">
        <img
          src={liked ? Liked : Unliked}
          alt=""
          style={{ cursor: "pointer" }}
          onClick={handleLike}
        />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        Posted by @{data.author}
      </span>
      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likes === 1 ? "1 like" : `${likes} likes`}
      </span>

      <div className="details">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.description}</span>
      </div>
    </div>
  );
};

export default Post;
