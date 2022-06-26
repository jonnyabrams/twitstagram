import React from 'react'

const User = ({person}) => {
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <div>
      <div className="followers">
        <img src={ person.profilePic ? serverPublic + person.profilePic : serverPublic + 'defaultProfile.png' } alt="" className="follower_img" />
        <div className="name">
          <span>{person.firstname}</span>
          <span>@{person.username}</span>
        </div>
        <button className="button fc-button">
          Follow
        </button>
      </div>
  </div>
  )
}

export default User