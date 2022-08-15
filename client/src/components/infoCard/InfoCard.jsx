import "./infoCard.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../profileModal/ProfileModal";
import { useEffect } from "react";
import * as userApi from "../../redux/api/userRequest.js";
import { logout } from "../../redux/actions/authAction";
import axios from "axios";

const InfoCard = () => {
  const currentUser = useSelector((state) => state.authReducer.authData.user);
  const [profileUser, setProfileUser] = useState({});
  const [modalOpened, setModalOpened] = useState(false);
  const dispatch = useDispatch();
  const profileUserId = useParams().id;
  const isCurrentUser = profileUserId === currentUser._id;
  const user = isCurrentUser ? currentUser : profileUser;

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

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="info_card">
      <div className="info_head">
        <h4>Profile info</h4>
        {user._id === profileUserId ? (
          <div>
            <UilPen
              width="2rem"
              height="1.2rem"
              onClick={() => setModalOpened(true)}
            />
            <ProfileModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
              data={user}
            />
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>{user.livesIn}</span>
      </div>

      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>{user.relationship}</span>
      </div>

      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>{user.worksAt}</span>
      </div>

      <button className="button logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default InfoCard;
