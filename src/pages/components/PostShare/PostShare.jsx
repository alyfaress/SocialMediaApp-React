import React, { useState, useRef } from "react";
import ProfileImage from "../../../img/profile.jpg";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";


const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files/*this check if event contains a file */ && event.target.files[0]/*the presented file is at index zero(first selected file) */) {
      let img = event.target.files[0];/* event.target.files[0] is the imagevalue we stored it in var img*/
      setImage({ //set by statemethod the url stored in img to an atrribute inside an object
        image: URL.createObjectURL(img),//"URL.createObjectURL()" creates an onject with url in()
      });
    }
  };
  return (
    <div className="PostShare">
        <div className="firstgroup">
      <img src={ProfileImage} alt="" />
    
        <input type="text" placeholder="What's happening" /></div>
        <div className="secondgroup">
          
          <div className="option" style={{ color: "var(--photo)" }}
          onClick={()=>imageRef.current.click()}/*v.imp:we want when photoicon is pressed the imageRef will take 
                                          it to input of type"file" and it will be executed with all its characteristics and methods  */
          >
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>{" "}
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>{" "}
          <div className="option" style={{ color: "var(--shedule)" }}>
            <UilSchedule />
            Shedule
          </div>
          <button className="button ps-button">Share</button>
          <div style={{display:"none"}}>{/*we hide this input of type "file" since we want only its value that we stored in imageRef to use it in photoicon when preesed,however its presence on screen is disturbing so we hide it  */}
           
            <input
                   type="file"//input of this type will allow user to select folder/files from his pc/phone files
                   name="myImage"
                   ref={imageRef}//we use ref inorder to store file selcted bu user in imageRef and use its value in our program(outside input,as to use inputs value we have to reference it first )
                   onChange={onImageChange} /*when the file from input is selected method(onImageChange) will execute*//>
          </div>
        </div>
      {image && (//this means if image exists(has avalue) (&&)means "then execute the following code"

        <div className="previewImage">
          <UilTimes onClick={()=>setImage(null)}/>{/*<UilTimes> this is "X" sign, used to delete image when pressed,and it is placed above image */}
          <img src={image.image} alt="" />{/*display the image under the "X"  */}
        </div>

      )}


      </div>
    
  );
};

export default PostShare;