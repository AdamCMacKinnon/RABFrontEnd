import React from 'react'
import AboutUs from './AboutUs'

const AdamCard = () => {
  return (
    <>
    < AboutUs />
      <div className="cardBio col-6 offset-3">
  <img className="card-img-top" src="images/picture.jpg" alt="" />
  <div className="card-body">
    <h5 className="cardBio-text">Adam C. MacKinnon</h5>
    <p className="cardBio-text">Founder, Senior Writer</p>
    <p className="cardBio-text">Contributor:</p>
    <p className="cardBio-text">"Call To The Pen"</p>
    <img className="adamcardimage" src="images/cttplogo.jpeg" alt=""/>
    <p className="cardBio-text">"Baseball Almanac"</p>
    <img className="adamcardimage" src="images/bbalmanaclogo.jpeg" alt=""/>
    <p className="cardBio-text">Author: "Baseball For Kids: A Young Fan's Guide to the History of the Game"</p>
    <img className="adamcardimagebbfk" src="images/bbfk.jpg" alt=""/>

  </div>
</div>
    </>
  )
}

export default AdamCard
