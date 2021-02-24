import React from 'react'
import {useSelector} from 'react-redux'




const BlogPosts = () => {

let blogs = useSelector((state => state.blogs))
 

  return (
    <>
    
    {blogs.map(blog =>{
      return(
        <div className="card mb-3 col-8 offset-2">
  {/* <h5 className="card-text">Latest Blog Post</h5> */}
  <img className="card-img-top" src={blog.Image} alt="" />
  <div className="card-body">
    <h5 className="card-text">{blog.Title}</h5>
    <p className="card-text">by: {blog.Author}</p>
    <p className="card-text"><small className="text-muted">{blog.Body}</small></p>
  </div>
</div>
      )
    })}

    </>
  )
}

export default BlogPosts
