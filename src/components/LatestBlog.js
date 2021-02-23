import React from 'react'
import BlogPosts from './BlogPosts'
import {useSelector} from 'react-redux'




const LatestBlog = () => {
let recentPost = useSelector((state) => state.blogs[0])
  return (
    <>
       <div className="card mb-3 col-8 offset-2">
  <h5 className="card-text">Latest Blog Post</h5>
  <img className="card-img-top" src={recentPost.Image} alt="" />
  <div className="card-body">
    <h5 className="card-text">{recentPost.Title}</h5>
    <p className="card-text">{recentPost.Author}</p>
    {/* <p className="card-text"><small className="text-muted">{Body[0]}</small></p> */}
  </div>
</div>
    </>
  )
}

export default LatestBlog
