import { all, fork } from 'redux-saga/effects'
import { watchMooviesSearchFieldChange, watchGetMooviesRequest } from './mooviesSaga'

export default function * () {
  yield all([
    fork(watchMooviesSearchFieldChange),
    fork(watchGetMooviesRequest)
  ])
}
