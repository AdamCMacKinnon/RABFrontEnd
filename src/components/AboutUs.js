import React, { Component } from 'react'

class AboutUs extends Component {
  render() {
    return (
      <>
    <div className="card mb-3 col-8 offset-2">
  {/* <h5 className="card-title">Podcast Feed</h5> */}
  <img className="card-img-top" src="images/waveform.png" alt="" />
  <div className="card-body">
    <h5 className="card-text">About Us</h5>

    <p className="card-text"><small className="text-muted">A little about our Team:</small></p>
  </div>
</div>
      </>
    )
  }
}

export default AboutUs
