import React from 'react'
import { render, cleanup } from '@testing-library/react'
import AccountNav from '../accountNav'

afterEach(cleanup)

const tabs = [
  { url: 'orders', title: 'Orders'},
  { url: 'subscriptions', title: 'Subscriptions'},
  { url: 'payment', title: 'Payment'},
  { url: 'address-book', title: 'Address Book'},
  { action: () => console.log('logout'), title: 'Logout'}
]

it('renders', () => {
  const { getByTestId } = render(<AccountNav tabs={tabs} />)
  expect(getByTestId('account-nav')).toBeTruthy()
})

it('renders tabs titles correctly', () => {
  const { getAllByTestId } = render(<AccountNav tabs={tabs} />)
  const renderedTabs = getAllByTestId('tab').map(li => li.textContent)
  const testTabs = tabs.map(t => t.title)
  expect(renderedTabs).toEqual(testTabs)
})
