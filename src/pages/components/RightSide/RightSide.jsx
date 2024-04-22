import React from "react";
import Home from "../../../img/home.png";       
import Noti from "../../../img/noti.png";       
import Comment  from "../../../img/comment.png";       
import { UilSetting } from "@iconscout/react-unicons";      
import './RightSide.css'
import TrendCard from "../trendCard/TrendCard";
const RightSide = () => {
        //const [modalOpened, setModalOpened] = useState(false);
        return (
          <div className="RightSide">
            <div className="navIcons">
              <img src={Home} alt="" />
              <UilSetting />
              <img src={Noti} alt="" />
              <img src={Comment} alt="" />
            </div>
 <TrendCard/>
 </div> )
}

export default RightSide