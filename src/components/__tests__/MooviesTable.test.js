import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import MooviesTable from '../MooviesTable'

jest.mock('react-redux', () => ({
  ...require.requireActual('react-redux'),
  useSelector: jest.fn()
}))

describe('MooviesTable Component', () => {
  const { useSelector } = require('react-redux')
  useSelector
    .mockImplementationOnce(() => [])
    .mockImplementationOnce(() => false)
    .mockImplementationOnce(() => null)

  const wrapper = shallow(<MooviesTable />)
  it('should render correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
