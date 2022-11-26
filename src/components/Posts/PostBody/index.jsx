import React from 'react'
import Style from './style.module.css'

const PostBody = ({title,body}) => {
  return (
    <>
        <h5 className={Style.postTitle}>{title}</h5>
        <p className={Style.postDescription}>{body}</p>
    </>
  )
}

export default PostBody