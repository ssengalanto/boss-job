import * as actionTypes from './actionTypes'

export const setJobsState = jobs => ({
  type: actionTypes.SET_JOBS_STATE,
  jobs
})

export const clearJobs = () => ({
  type: actionTypes.CLEAR_JOBS_STATE
})
