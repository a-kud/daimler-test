import initialState from './initialState'
import { SET_MOOVIES_SEARCH_FIELD_CHANGE, GET_MOOVIES_SUCCESS, GET_MOOVIES_REQUEST, GET_MOOVIES_FAILURE } from '../actions/types'

const mooviesReducer = (
  state = initialState.moovies,
  action
) => {
  switch (action.type) {
    case SET_MOOVIES_SEARCH_FIELD_CHANGE: {
      const { value } = action
      return {
        ...state,
        moovieSearchValue: value
      }
    }
    case GET_MOOVIES_REQUEST: {
      return {
        ...state,
        isMoovieListLoading: true,
        error: null
      }
    }
    case GET_MOOVIES_FAILURE: {
      const { error } = action
      return {
        ...state,
        isMoovieListLoading: false,
        moovieList: [],
        error
      }
    }
    case GET_MOOVIES_SUCCESS: {
      const { response } = action
      return {
        ...state,
        moovieList: response,
        isMoovieListLoading: false
      }
    }
    default:
      return state
  }
}

export default mooviesReducer
