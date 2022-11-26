import React from 'react'
import Style from './style.module.css'
import {FaRegCommentDots, FaRegHeart,FaShareSquare,FaHeart} from 'react-icons/fa'


const PostReactions = ({liked,likeCount,index,handleLike}) => {
  return (
    <>
        <div className={Style.reactionsHolder}>
            {liked? <FaHeart className={Style.reaction} onClick={(e,id)=>handleLike(index)}/>: <FaRegHeart className={Style.reaction} onClick={(e,id)=>handleLike(index)}/>}
            <span className={Style.likesCount}>{likeCount}</span>
            <FaRegCommentDots className={Style.reaction}/>
            <FaShareSquare className={Style.reaction}/>
        </div>
    </>
  )
}

export default PostReactions