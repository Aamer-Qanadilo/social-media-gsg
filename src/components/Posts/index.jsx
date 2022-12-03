import React from 'react'
import Style from './style.module.css'
import { useContext,useState } from 'react';
import { PostsContext } from '../PostsContext'
import { Col, Container, Row,Image } from 'react-bootstrap';
import PostHeader from './PostHeader';
import PostBody from './PostBody';
import PostReactions from './PostReactions';

const Posts = ({selected}) => {
const allPosts  = useContext(PostsContext);

const [liked,setLiked] = useState(false);

const handleLike=(id)=>{
    setLiked(!liked);
}
  return (
    <Container>
       <Row>
       {
            allPosts.filteredPosts.map((post,index)=>{
                return (<>
                <Col lg={8}>
                    <div className={Style.postContainer}>
                        <Container fluid>
                            <Row>
                                <Col lg={12}>
                                    <PostHeader/>
                                </Col>
                                <Col lg={12}>
                                    <PostBody title = {post.title} body = {post.body}/>
                                </Col>
                                <Col lg={12}>
                                    <Image src='https://dummyimage.com/540x313/000/fff.png' fluid/>
                                </Col>
                                <Col lg={12}>
                                    <PostReactions liked = {liked} handleLike = {handleLike} likeCount = {post.reactions} index = {index}/>
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