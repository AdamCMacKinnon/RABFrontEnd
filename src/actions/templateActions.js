//DELETE THIS WHEN YOU START A PROJECT


//this is an action creator and returns an object
export const latestPost = (blogs) => {
  
}

export const setBlogData = (data) => ({
  type: 'SET_BLOG_DATA',
  payload: data
})

export const setStatsData = (stats) =>({
  type: 'SET_STATS_POSTS',
  payload: stats
})


// THIS IS NOT A NAMED EXPORT.  WHEN WE IMPORT INTO OUR COMPONENT WE HAVE TO IMPORT LIKE THIS:

/**
 *  import {increment} from './path
 * 
 * named export:
 * export default increment
 * 
 * import increment from './path'
 */