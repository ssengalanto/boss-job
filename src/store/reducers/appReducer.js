import * as actionTypes from '../actions/actionTypes'

const initialState = {
  loading: false,
  error: null,
  page: 1,
  size: 12,
  query: '',
  total_num: 0,
  total_pages: 0,
  sort: 1
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADING_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.SET_APP_STATE:
      return {
        ...state,
        ...action.data
      }
    case actionTypes.HANDLE_ERROR:
      return {
        ...state,
        error: action.error
      }

    default:
      return state
  }
}

export default appReducer
