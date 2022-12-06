import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from './PostItem';
import { getPosts } from '../../actions/post';

const Posts = ({ getPosts, post: { posts, loading } }) => {
    useEffect(() =>{
        getPosts();
    }, [getPosts]);

  return loading ? <Spinner /> :  <Fragment>
    <h1 className='large text-priamry'>Posts</h1>
    <p className='lead'>
       <i className='fas fa-user' /> Welcome to the community 
    </p>
    {/* PostForm */}
    <div className='posts'>
        {posts.map(post => (
          <PostItem key = {post._id} post={post} />  
        ))}
    </div>
  </Fragment>
};

const mapStateToProps = state => ({
    posts: state.post
});

export default connect(mapStateToProps, {getPosts})(Posts);