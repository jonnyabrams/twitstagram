import "./profileCard.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfileCard = ({ location, user }) => {
  const currentUser = useSelector((state) => state.authReducer.authData.user);
  const posts = useSelector((state) => state.postReducer.posts);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="profile_card">
      <div className="profile_images">
        <img
          src={
            user?.coverPic
              ? serverPublic + user?.coverPic
              : serverPublic + "defaultCover.jpeg"
          }
          alt=""
        />
        <img
          src={
            user?.profilePic
              ? serverPublic + user?.profilePic
              : serverPublic + "defaultProfile.png"
          }
          alt=""
        />
      </div>

      <div className="profile_name">
        <span>
          {user?.firstname} {user?.lastname}
        </span>
        <span>{user?.worksAt ? user?.worksAt : "Write about yourself"}</span>
      </div>

      <div className="follow_status">
        <hr />
        <div>
          <div className="follow">
            <span>{user?.following?.length}</span>
            <span>Following</span>
          </div>
          <div className="vertical_line"></div>
          <div className="follow">
            <span>{user?.followers?.length}</span>
            <span>Followers</span>
          </div>

          {location === "profilePage" && (
            <>
              <div className="vertical_line"></div>
              <div className="follow">
                <span>
                  {posts.filter((post) => post.userId === user?._id).length}
                </span>
                <span>posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {location === "profilePage" ? (
        ""
      ) : (
        <span>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={`/profile/${currentUser._id}`}
          >
            My Profile
          </Link>
        </span>
      )}
    </div>
  );
};

export default ProfileCard;
