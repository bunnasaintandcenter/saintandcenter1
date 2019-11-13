import React from 'react'
import { render, cleanup } from '@testing-library/react'
import FAQsCategory from '../faqsCategory'

afterEach(cleanup)

const data = [
  {
    node: {
      title: 'Hello World',
      content: "<p>Lorem ipsum</p>"
    }
  }
]

it('renders', () => {
  const { getByTestId } = render(<FAQsCategory data={data} />)
  expect(getByTestId('faqs-category')).toBeTruthy()
})
