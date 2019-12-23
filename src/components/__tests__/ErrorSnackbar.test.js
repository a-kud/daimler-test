import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ErrorSnackbar from '../ErrorSnackbar'

describe('ErrorSnackbar Component', () => {
  const wrapper = shallow(<ErrorSnackbar />)

  it('should render correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
