import React from 'react'
import { useState, useEffect} from 'react'
import axios from 'axios'


const BlogPosts = () => {

    const[blogs, setBlogs] = useState([]);

    useEffect(()=>{
        const getData = () =>{
        axios.get("blogposts.json")
        .then(res =>{
            setBlogs(res.data.Posts);
            console.log(res.data.Posts)
        }).catch(error => console.log(error))
    }
    getData();
    }, [])
    console.log(blogs[0])

  return (
    <>
<div className="card mb-3 col-8 offset-2">
  <h5 className="card-text">Latest Blog Post</h5>
  <img className="card-img-top" src="images/ballfield.jpg" alt="" />
  <div className="card-body">
    <h5 className="card-text">{blogs[0]?.Title}</h5>
    <p className="card-text">{blogs[0]?.Author}</p>
    <p className="card-text"><small className="text-muted">{blogs[0]?.Body}</small></p>
  </div>
</div>
    </>
  )
}

export default BlogPosts
