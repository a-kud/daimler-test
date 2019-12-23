import { call, put, takeLatest, delay } from 'redux-saga/effects'
import { setMooviesSearchFieldChange, getMooviesFailure, getMooviesSuccess, getMooviesRequest } from '../actions/mooviesActions'
import { MOOVIES_SEARCH_FIELD_CHANGE, GET_MOOVIES_REQUEST } from '../actions/types'
import { fetchMoovies } from '../clients/mooviesClient'

export function * workMooviesSearchFieldChange ({ value }) {
  yield delay(600)
  yield put(setMooviesSearchFieldChange(value))
  yield put(getMooviesRequest(value))
}

export function * watchMooviesSearchFieldChange () {
  yield takeLatest(MOOVIES_SEARCH_FIELD_CHANGE, workMooviesSearchFieldChange)
}

export function * workGetMooviesRequest ({ searchQuery }) {
  const response = yield call(fetchMoovies, searchQuery)

  if (response.status >= 200 && response.status < 300) {
    yield put(getMooviesSuccess(response.data.results))
    return
  }
  yield put(getMooviesFailure(response.message))
}

export function * watchGetMooviesRequest () {
  yield takeLatest(
    GET_MOOVIES_REQUEST,
    workGetMooviesRequest
  )
}
