import React from 'react'
import {Link} from 'react-router-dom'
import './assets/styles/styles.css'

const App = () => {
  return (
    <>

<div className="card mb-3 col-8">
  {/* <h5 className="card-title">Latest Post</h5> */}
  <img className="card-img-top" src="images/ballfield.jpg" alt="" />
  <div className="card-body">
    <h5 className="headline">Post Title</h5>
    <p className="card-text">by Adam C. MacKinnon</p>
    <p className="card-text"><small className="text-muted">Is this a baseball article? Let's find out..</small></p>
  </div>
</div>
<div className="card mb-3 col-8">
  {/* <h5 className="card-title">RAB Stats</h5> */}
  <img className="card-img-top" src="images/pythoncode.jpg" alt="" />
  <div className="card-body">
    <h5 className="headline">RAB Stats</h5>
    <p className="card-text">Numbers and such</p>
    <p className="card-text"><small className="text-muted">This is the page for stats</small></p>
  </div>
</div>
<div className="card mb-3 col-8">
  {/* <h5 className="card-title">Podcast Feed</h5> */}
  <img className="card-img-top" src="images/ballfield.jpg" alt="" />
  <div className="card-body">
    <h5 className="headline">Latest Podcast Episode</h5>

    <p className="card-text"><small className="text-muted">Is this a baseball article? Let's find out..</small></p>
  </div>
</div>


    </>
  )
}

export default App
