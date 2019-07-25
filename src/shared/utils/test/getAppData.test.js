import getAppData from '../getAppData'
import staticData from '../../content/static.json'

describe('getAppData', () => {
  it('should return a specific key value pairs from a given data', () => {
    const { data } = staticData
    const result = getAppData(data)
    expect(result).toEqual({
      page: 1,
      size: 10,
      total_num: 265,
      total_pages: 43,
      sort: 1,
      query: ''
    })
  })
})
