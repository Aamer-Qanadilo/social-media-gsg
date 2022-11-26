import React from 'react'
import Style from './style.module.css'
import { useContext,useState } from 'react';
import { PostsContext } from '../PostsContext'
import { Col, Container, Row,Image } from 'react-bootstrap';
import {FaRegCommentDots, FaRegHeart,FaShareSquare,FaHeart} from 'react-icons/fa'

const Posts = () => {
const allPosts  = useContext(PostsContext);

const [liked,setLiked] = useState(false);

const handleLike=(id)=>{
    setLiked(!liked);
}
  return (
    <Container>
       <Row>
       {
            allPosts?.posts.map((post,index)=>{
                return (<>
                <Col lg={8}>
                    <div className={Style.postContainer}>
                        <Container fluid>
                            <Row>
                                <Col lg={12}>
                                    <div className={Style.userInfo + ' ' + 'd-flex justify-content-start align-items-start'}>
                                    <img src="https://dummyimage.com/40x40/000/fff.png&text=user" alt="" className={Style.avatar}/>
                                    <p className={Style.userName}>someone shared a post</p>
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <h5 className={Style.postTitle}>{post.title}</h5>
                                    <p className={Style.postDescription}>{post.body}</p>
                                </Col>
                                <Col lg={12}>
                                    <Image src='https://dummyimage.com/540x313/000/fff.png' fluid/>
                                </Col>
                                <Col lg={12}>
                                    <div className={Style.reactionsHolder}>
                                    {liked? <FaHeart className={Style.reaction} onClick={(e,id)=>handleLike(index)}/>: <FaRegHeart className={Style.reaction} onClick={(e,id)=>handleLike(index)}/>}
                                    <span className={Style.likesCount}>{post.reactions}</span>
                                    <FaRegCommentDots className={Style.reaction}/>
                                    <FaShareSquare className={Style.reaction}/>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Col>
                </>)
            })
        }
       </Row>
    </Container>
  )
}

export default Posts