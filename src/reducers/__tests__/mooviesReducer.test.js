import initialState from '../initialState'
import mooviesReducer from '../mooviesReducer'
import { SET_MOOVIES_SEARCH_FIELD_CHANGE } from '../../actions/types'

describe('Moovies Reducer', () => {
  const { moovies: mooviesInitialState } = initialState

  it('should return the correct initial state when state is undefined', () => {
    expect(mooviesReducer(undefined, {})).toEqual(mooviesInitialState)
  })

  it('should return correct state on SET_MOOVIES_SEARCH_FIELD_CHANGE', () => {
    const value = 'foo'
    expect(
      mooviesReducer(mooviesInitialState, { type: SET_MOOVIES_SEARCH_FIELD_CHANGE, value })
    ).toEqual({
      ...mooviesInitialState,
      moovieSearchValue: value
    })
  })
})
