import React from 'react'
import {Link} from 'react-router-dom'
import './assets/styles/styles.css'
import BlogPosts from './components/BlogPosts'
import RabStats from './components/RabStats'
import AboutUs from './components/AboutUs'

const App = () => {

  return (
    <>
<Link to='/blog'>
<BlogPosts />
</Link>
<Link to='/rab_stats'>
<RabStats />
</Link>
<Link to='/about_us'>
<AboutUs />
</Link>


    </>
  )
}

export default App
