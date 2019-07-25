/* eslint-disable camelcase */

const getAppData = data => {
  const { page, size, query, sort, total_num, total_pages } = data

  return {
    page,
    size,
    query,
    sort,
    totalJobs: total_num,
    totalPages: total_pages
  }
}

export default getAppData
