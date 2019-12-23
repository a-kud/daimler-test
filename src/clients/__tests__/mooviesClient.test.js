import axios from 'axios'
import { fetchMoovies } from '../mooviesClient'

jest.mock('axios')

describe('Moovies Client', () => {
  describe('Resolve', () => {
    const mockedResponse = { data: [] }
    it('should resolve fetchMoovies', () => {
      axios.get.mockResolvedValue(mockedResponse)
      fetchMoovies('foo').then(({ data }) => expect(data).toEqual(mockedResponse.data))
    })
  })

  describe('Reject', () => {
    const mockedError = { error: 'foo' }
    it('should reject fetchMoovies', () => {
      axios.get.mockRejectedValue(mockedError)
      fetchMoovies('foo').then(({ mockedError }) => expect(mockedError).toEqual(mockedError.mockedError))
    })
  })
})
