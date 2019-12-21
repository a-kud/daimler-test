import { testAction } from '../../helpers/testHelpers'
import { mooviesSearchFieldChange } from '../mooviesActions'
import { MOOVIES_SEARCH_FIELD_CHANGE } from '../types'

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
})
