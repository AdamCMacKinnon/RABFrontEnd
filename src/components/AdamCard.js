import React from 'react'
import AboutUs from './AboutUs'

const AdamCard = () => {
  return (
    <>
    < AboutUs />
    <div className="card mb-3 col-8 offset-2">
  {/* <h5 className="card-title">Podcast Feed</h5> */}
  <img className="card-img-top" src="images/picture.jpg" alt="" />
  <div className="card-body">
    <h5 className="card-text">Adam C. MacKinnon</h5>
    <p className="card-text"><small className="text-muted">Founder, Senior Writer</small></p>
    <p className="card-text">An avid Braves fan, but lover of the game wherever it's played.  Contributing writer for Call to the Pen and Baseball Almanac. 
    His first book "Baseball for Kids: A Young Fan's Guide to the History of the Game" is out now.</p>
    
  </div>
</div>
    </>
  )
}

export default AdamCard
