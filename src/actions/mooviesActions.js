import { MOOVIES_SEARCH_FIELD_CHANGE, SET_MOOVIES_SEARCH_FIELD_CHANGE, GET_MOOVIES_REQUEST, GET_MOOVIES_SUCCESS, GET_MOOVIES_FAILURE } from './types'

export const mooviesSearchFieldChange = value => ({
  type: MOOVIES_SEARCH_FIELD_CHANGE,
  value
})

export const setMooviesSearchFieldChange = value => ({
  type: SET_MOOVIES_SEARCH_FIELD_CHANGE,
  value
})

export const getMooviesRequest = searchQuery => ({
  type: GET_MOOVIES_REQUEST,
  searchQuery
})

export const getMooviesSuccess = response => ({
  type: GET_MOOVIES_SUCCESS,
  response
})

export const getMooviesFailure = error => ({
  type: GET_MOOVIES_FAILURE,
  error
})
