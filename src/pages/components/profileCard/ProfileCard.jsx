import React from 'react'
import Cover from "../../../img/cover.jpg";
import Profile from "../../../img/profile.jpg";
import "./profileCard.css";

const ProfileCard = () => {
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>
      <div className="ProfileName">
        <span>Zendaya MJ</span>
        <span>Senior UI/UX Designer</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
          <span>Followings</span>
            <span>6,890</span>
            
          </div>
          <div className="vl"></div>
          <div className="follow">
             <span>Followers</span>
            <span>1</span>
           
          </div>
</div><hr/>
</div>
<span>My Profile</span>
    </div>
  );
};
 
export default ProfileCard