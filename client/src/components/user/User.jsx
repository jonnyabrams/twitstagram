import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unfollowUser } from "../../redux/actions/userAction";

const User = ({ person }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const [following, setFollowing] = useState(
    person.followers.includes(user._id)
  );
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const handleFollow = () => {
    following
      ? dispatch(unfollowUser(person._id, user))
      : dispatch(followUser(person._id, user));

    setFollowing(!following);
  };

  return (
    <div>
      <div className="followers">
        <Link to={`/profile/${person._id}`}>
          <img
            src={
              person.profilePic
                ? serverPublic + person.profilePic
                : serverPublic + "defaultProfile.png"
            }
            alt=""
            className="follower_img"
          />
        </Link>
        <div className="name">
          <span>{person.firstname}</span>
          <span>@{person.username}</span>
        </div>
        <button
          className={
            following ? "button fc-button unfollow_button" : "button fc-button"
          }
          onClick={handleFollow}
        >
          {following ? "Unfollow" : "Follow"}
        </button>
      </div>
    </div>
  );
};

export default User;
