import { useSelector } from "react-redux";
import FollowersCard from "../followersCard/FollowersCard";
import LogoSearch from "../logoSearch/LogoSearch";
import ProfileCard from "../profileCard/ProfileCard";
import "./profileSide.css";

const ProfileSide = () => {
  const { user } = useSelector((state) => state.authReducer.authData);

  return (
    <div>
      <div className="profile_side">
        <LogoSearch />
        <ProfileCard location="homepage" user={user} />
        <FollowersCard />
      </div>
    </div>
  );
};

export default ProfileSide;
