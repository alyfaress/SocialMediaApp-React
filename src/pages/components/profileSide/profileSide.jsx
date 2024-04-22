import React from 'react'
import FollowerCard from '../FollowersCard/FollowerCard'
import LogoSearch from '../logo-search/LogoSearch'
import ProfileCard from '../profileCard/ProfileCard'
import "./profileSide.css"
function ProfileSide() {
  return (
    <div className="profileSide">
        
        <LogoSearch/>
       <ProfileCard/>
       <FollowerCard />
            </div>
  )
}

export default ProfileSide


