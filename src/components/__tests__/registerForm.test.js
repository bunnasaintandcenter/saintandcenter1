import React from 'react'
import { cleanup } from '@testing-library/react'
import RegisterForm from '../registerForm'
import renderWithRedux from '../../utils/renderWithRedux'

afterEach(cleanup)

it('renders', () => {
  const { getByTestId } = renderWithRedux(<RegisterForm />)
  expect(getByTestId('register-form')).toBeTruthy()
})
