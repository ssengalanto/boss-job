import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://search.bossjob.com/api/v1/search/job_filter'
})

export default instance
