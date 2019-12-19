import { combineReducers } from 'redux'
import mooviesReducer from './mooviesReducer'

const rootReducer = combineReducers({
  moovies: mooviesReducer
})

export default rootReducer
