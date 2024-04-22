import React from 'react'
import"./FollowerCard.css"
import { Followers } from '../../../Data/FollowersData'
function FollowerCard() {
  return (
    <div className="FollowersCard">
      
      <h3>Who is following you</h3>

{ Followers.map((follower, id)=>{/*bring list Followers that conatin data and loop through its items by .map,give items name follower and each one an id */
    return(
        <div className="follower">
            <div>
                <img src={follower.img} alt="" className='followerImage' />
                <div className="name">
                    <span>{follower.name}</span>
                    <span>@{follower.username}</span>
                </div>
            </div>
            <button className='button fc-button'>{/*"button" is a class implemented in the App.css,as its for the 
            whole bottuns of the App,"fc-button is to modify button and add/delete some features" */}
                Follow
            </button>
        </div>
    )
})}
    </div>
  )
}

export default FollowerCard