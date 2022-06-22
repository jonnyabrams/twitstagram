import './followersCard.css'
import { Followers } from '../../data/followersData'

const FollowersCard = () => {
  return (
    <div className="followers_card">
      <h3>Who is following you?</h3>

      {Followers.map((follower, id) => {
        return (
          <div className="followers">
            <img src={follower.img} alt="" className="follower_img" />
            <div className="name">
              <span>{follower.name}</span>
              <span>@{follower.username}</span>
            </div>
            <button className="button fc-button">
              Follow
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default FollowersCard