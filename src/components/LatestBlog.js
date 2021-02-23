import React from 'react'



const LatestBlog = ({Image, Title, Author}) => {
  return (
    <>
       <div className="card mb-3 col-8 offset-2">
  <h5 className="card-text">Latest Blog Post</h5>
  <img className="card-img-top" src={Image} alt="" />
  <div className="card-body">
    <h5 className="card-text">{Title}</h5>
    <p className="card-text">{Author}</p>
    {/* <p className="card-text"><small className="text-muted">{Body[0]}</small></p> */}
  </div>
</div>
    </>
  )
}

export default LatestBlog
