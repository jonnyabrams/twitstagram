import { useSelector } from "react-redux";
import Feed from "../../components/feed/Feed";
import ProfileSide from "../../components/profileSide/ProfileSide";
import RightSide from "../../components/rightSide/RightSide";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <ProfileSide />
      <Feed />
      <RightSide />
    </div>
  );
};

export default Home;
