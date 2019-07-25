import axios from '../../axios-base'
import * as actionTypes from './actionTypes'
import { setJobsState, clearJobs } from './jobsActions'
import getAppData from '../../shared/utils/getAppData'
import getJobsData from '../../shared/utils/getJobsData'

export const loadingStart = () => ({
  type: actionTypes.LOADING_START
})

export const loadingStop = () => ({
  type: actionTypes.LOADING_STOP
})

export const handleError = error => ({
  type: actionTypes.HANDLE_ERROR,
  error
})

export const setAppState = data => ({
  type: actionTypes.SET_APP_STATE,
  data
})

export const getInitData = () => async (dispatch, getState) => {
  const {
    app: { page, size, query }
  } = getState()

  try {
    dispatch(loadingStart())
    const response = await axios(
      `?size=${size}&query=${encodeURIComponent(query)}&page=${page}`
    )
    const appData = getAppData(response.data.data)
    const jobsData = getJobsData(response.data.data.jobs)

    dispatch(setAppState(appData))
    dispatch(setJobsState(jobsData))
    dispatch(loadingStop())
  } catch (error) {
    dispatch(handleError(error))
    dispatch(loadingStop())
  }
}

export const searchJobs = search => async (dispatch, getState) => {
  const {
    app: { page, size, query }
  } = getState()

  if (search === query) return

  try {
    dispatch(loadingStart())
    dispatch(clearJobs())
    const response = await axios(
      `?size=${size}&query=${encodeURIComponent(search)}&page=${page}`
    )
    const appData = getAppData(response.data.data)
    const jobsData = getJobsData(response.data.data.jobs)

    dispatch(setAppState(appData))
    dispatch(setJobsState(jobsData))
    dispatch(loadingStop())
  } catch (error) {
    dispatch(handleError(error))
    dispatch(loadingStop())
  }
}
