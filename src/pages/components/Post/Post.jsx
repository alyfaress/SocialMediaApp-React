import React from 'react'
import Comment from '../../../img/comment.png'
import Heart from '../../../img/like.png'
import Share from '../../../img/share.png'
import NotLike from '../../../img/notlike.png'
import './post.css'
const Post = ({data}) => {
  return (
    <div className="Post">
    <img src={data.img} alt="" />

    <div className="postReact">
            <img src={data.liked? Heart: NotLike} alt="" />{/*if liked(indata)is true ,then display Heart(like.png) esle display NotLike is an image of empty hrat */}
            <img src={Comment} alt="" />
            <img src={Share} alt="" />
        </div>
        <span style={{color: "var(--gray)", fontSize: '12px'}}>{data.likes} likes</span>

<div className="detail">
    <span><b>{data.name}</b></span>
    <span> {data.desc}</span>
</div>


</div>
  
)
}

export default Post