import { call, put, takeLatest } from 'redux-saga/effects'
import { getMooviesFailure, getMooviesSuccess } from '../../actions/mooviesActions'
import { MOOVIES_SEARCH_FIELD_CHANGE, GET_MOOVIES_REQUEST } from '../../actions/types'
import { fetchMoovies } from '../../clients/mooviesClient'
import {
  workGetMooviesRequest,
  watchGetMooviesRequest,
  watchMooviesSearchFieldChange,
  workMooviesSearchFieldChange
} from '../mooviesSaga'

describe('Moovies Saga', () => {
  describe('Watchers', () => {
    describe('watchGetMooviesRequest', () => {
      const watcher = watchGetMooviesRequest()
      it('should watch GET_MOOVIES_REQUEST', () => {
        expect(watcher.next().value).toEqual(takeLatest(GET_MOOVIES_REQUEST, workGetMooviesRequest))
        expect(watcher.next().done).toEqual(true)
      })
    })

    describe('watchMooviesSearchFieldChange', () => {
      const watcher = watchMooviesSearchFieldChange()
      it('should watch MOOVIES_SEARCH_FIELD_CHANGE', () => {
        expect(watcher.next().value).toEqual(takeLatest(MOOVIES_SEARCH_FIELD_CHANGE, workMooviesSearchFieldChange))
        expect(watcher.next().done).toEqual(true)
      })
    })
  })

  describe('Workers', () => {
    describe('workGetMooviesRequest', () => {
      describe('success', () => {
        const worker = workGetMooviesRequest({ searchQuery: 'foo' })

        it('should fetch moovies', () => {
          expect(worker.next().value).toEqual(call(fetchMoovies, 'foo'))
        })

        it('should dispatch success response', () => {
          expect(worker.next({ status: 200, data: { results: [] } }).value).toEqual(put(getMooviesSuccess([])))
          expect(worker.next().done).toEqual(true)
        })
      })

      describe('failure', () => {
        const worker = workGetMooviesRequest({ searchQuery: 'foo' })

        it('should dispatch failure action and return', () => {
          worker.next()
          expect(worker.next({ status: 404, message: 'foo' }).value).toEqual(put(getMooviesFailure('foo')))
          expect(worker.next().done).toEqual(true)
        })
      })
    })
  })
})
