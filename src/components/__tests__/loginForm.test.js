import React from 'react'
import { cleanup } from '@testing-library/react'
import LoginForm from '../loginForm'
import renderWithRedux from '../../utils/renderWithRedux'

afterEach(cleanup)

it('renders', () => {
  const { getByTestId } = renderWithRedux(<LoginForm />)
  expect(getByTestId('login-form')).toBeTruthy()
})
