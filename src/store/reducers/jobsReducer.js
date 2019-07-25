import * as actionTypes from '../actions/actionTypes'

const jobsReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.SET_JOBS_STATE:
      return action.jobs
    case actionTypes.CLEAR_JOBS_STATE:
      return []
    default:
      return state
  }
}

export default jobsReducer
