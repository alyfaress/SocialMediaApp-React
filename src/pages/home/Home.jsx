import React from 'react'
import "./Home.css"
import ProfileSide from '../components/profileSide/profileSide'
import PostSide from '../components/PostSide/PostSide'
import RightSide from '../components/RightSide/RightSide'

function Home() {
  return (
    <div className="Home">
{/*the home page is divided into 3 side:profile side,postside,3rdside*/}
    <ProfileSide/>
    <PostSide/>  
    <RightSide/>    

    </div>
  )
}

export default Home