// import {v1 as uuidv1} from 'uuid'

const initialState = {
    blogs: []
}

//purpose of reducer is to return a new global state
// reducer must be passed into store

const reducerTemplate = (state = initialState, action) => {
  switch(action.type){

      case "LATEST_POST": //this name has to be the same as  the action.type in actions
          return {
              ...state,
            //   blogs: state.Title + action.data
          }
        case "SET_BLOG_DATA":
            return {
                ...state,
                blogs: action.payload
            }
        default:
            return state;
  }
}

export default reducerTemplate
