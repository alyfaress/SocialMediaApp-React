import React from 'react'
import"./posts.css"
import {PostsData} from '../../../Data/PostsData'
import Post from '../Post/Post'
 function Posts() {
  return (
    <div className='Posts'>
 {PostsData.map((post,id)=>{//iterate through the list(that has 3 items and give each of them name post and an id),so 3 components will be returned
      return <Post data={post} id={id}/> //pass the component  2 props the item in list which we called post,and its id

 })}

    </div>
  )
}

export default Posts