import React from 'react'
import Style from './style.module.css'

const PostHeader = () => {
  return (
    
    <>
        <div className={Style.userInfo + ' ' + 'd-flex justify-content-start align-items-start'}>
            <img src="https://dummyimage.com/40x40/000/fff.png&text=user" alt="" className={Style.avatar}/>
            <p className={Style.userName}>someone shared a post</p>
        </div>
    </>

  )
}

export default PostHeader