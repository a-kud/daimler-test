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
  const wrapper = shallow(<Header />)

  useDispatch.mockImplementation(() => jest.fn())

  it('should render correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
