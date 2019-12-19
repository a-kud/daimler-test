import initialState from './initialState'

const mooviesReducer = (
  state = initialState.moovies,
  action
) => {
  switch (action.type) {
    default:
      return state
  }
}

export default mooviesReducer
