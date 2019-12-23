import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Header from '../Header'

jest.mock('react-redux', () => ({
  ...require.requireActual('react-redux'),
  useDispatch: jest.fn()
}))

describe('Header Component', () => {
  const { useDispatch } = require('react-redux')
  useDispatch.mockImplementation(() => jest.fn())

  const wrapper = shallow(<Header />)
  it('should render correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
