import ProfileLeft from "../../components/profileLeft/ProfileLeft";
import ProfileCard from "../../components/profileCard/ProfileCard";
import Feed from "../../components/feed/Feed";
import RightSide from "../../components/rightSide/RightSide";
import "./profile.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const currentUser = useSelector((state) => state.authReducer.authData.user);
  const [profileUser, setProfileUser] = useState({});
  const profileUserId = useParams().id;
  const isCurrentUser = profileUserId === currentUser._id;
  const user = isCurrentUser ? currentUser : profileUser;
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    if (profileUserId === currentUser._id) {
      return;
    }
    const fetchUser = async () => {
      const res = await axios.get(`/user/${profileUserId}`);
      setProfileUser(res.data);
    };
    fetchUser();
  }, [profileUserId, currentUser]);

  return (
    <div className="profile">
      <ProfileLeft />
      <div className="profile_center">
        <ProfileCard location="profilePage" user={user} />
        <Feed />
      </div>
      <RightSide />
    </div>
  );
};

export default Profile;
