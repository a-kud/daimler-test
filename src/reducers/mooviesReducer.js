import initialState from './initialState'
import { MOOVIES_SEARCH_FIELD_CHANGE } from '../actions/types'

const mooviesReducer = (
  state = initialState.moovies,
  action
) => {
  switch (action.type) {
    case MOOVIES_SEARCH_FIELD_CHANGE: {
      const { value } = action
      return {
        ...state,
        moovieSearchValue: value
      }
    }
    default:
      return state
  }
}

export default mooviesReducer
