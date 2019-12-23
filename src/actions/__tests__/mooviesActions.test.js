import { testAction } from '../../helpers/testHelpers'
import {
  mooviesSearchFieldChange,
  setMooviesSearchFieldChange,
  getMooviesRequest,
  getMooviesSuccess,
  getMooviesFailure
} from '../mooviesActions'
import {
  MOOVIES_SEARCH_FIELD_CHANGE,
  SET_MOOVIES_SEARCH_FIELD_CHANGE,
  GET_MOOVIES_REQUEST,
  GET_MOOVIES_SUCCESS,
  GET_MOOVIES_FAILURE
} from '../types'

describe('Moovies Actions', () => {
  const value = 'foo'
  testAction(
    mooviesSearchFieldChange,
    mooviesSearchFieldChange(value),
    {
      type: MOOVIES_SEARCH_FIELD_CHANGE,
      value
    }
  )

  testAction(
    setMooviesSearchFieldChange,
    setMooviesSearchFieldChange(value),
    {
      type: SET_MOOVIES_SEARCH_FIELD_CHANGE,
      value
    }
  )

  testAction(
    getMooviesRequest,
    getMooviesRequest(value),
    {
      type: GET_MOOVIES_REQUEST,
      searchQuery: value
    }
  )

  testAction(
    getMooviesSuccess,
    getMooviesSuccess(value),
    {
      type: GET_MOOVIES_SUCCESS,
      response: value
    }
  )

  testAction(
    getMooviesFailure,
    getMooviesFailure(value),
    {
      type: GET_MOOVIES_FAILURE,
      error: value
    }
  )
})
