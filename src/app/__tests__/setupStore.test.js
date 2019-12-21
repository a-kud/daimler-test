import initialState from '../../reducers/initialState'
import setupStore from '../setupStore'

describe('setupStore ->', () => {
  it('should create a store with the supplied initial state', () => {
    const store = setupStore()

    expect(store.getState()).toEqual(initialState)
  })
})
