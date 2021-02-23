import React from 'react'
import {Link} from 'react-router-dom'
import './assets/styles/styles.css'
import LatestBlog from './components/LatestBlog'
import RabStats from './components/RabStats'
import AboutUs from './components/AboutUs'
import {useEffect} from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {setBlogData} from './actions/templateActions'

const App = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    const getData = () =>{
    axios.get("blogposts.json")
    .then(res =>{
        dispatch(setBlogData(res.data.Posts));
    }).catch(error => console.log(error))
}
getData();
}, [])



  return (
    <>
<Link to='/blog'>
<LatestBlog />
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
