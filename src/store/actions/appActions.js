import axios from '../../axios-base'
import * as actionTypes from './actionTypes'
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

export const setJobsState = jobs => ({
  type: actionTypes.SET_JOBS_STATE,
  jobs
})

export const getAsyncData = (page, query) => async (dispatch, getState) => {
  const {
    app: { size, sort }
  } = getState()

  try {
    dispatch(loadingStart())
    const response = await axios(
      `?size=${size}&sort=${sort}&query=${encodeURIComponent(
        query
      )}&page=${page}`
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

export const getInitData = () => (dispatch, getState) => {
  const {
    app: { page, query }
  } = getState()

  dispatch(getAsyncData(page, query))
}

export const jobSearch = search => (dispatch, getState) => {
  const {
    app: { query }
  } = getState()
  const page = 1

  if (search === query) return

  dispatch(getAsyncData(page, search))
}

export const paginateSearch = currentPage => (dispatch, getState) => {
  const {
    app: { page, query }
  } = getState()

  if (currentPage === page) return

  window.scrollTo(0, 0)
  dispatch(getAsyncData(currentPage, query))
}
