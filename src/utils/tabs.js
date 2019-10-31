const tabs = [
  {url: '/', title: 'Dashboard'},
  { url: 'orders', title: 'Orders'},
  { url: 'subscriptions', title: 'Subscriptions'},
  { url: 'payment', title: 'Payment'},
  { url: 'address-book', title: 'Address Book'},
  { action: () => console.log('logout'), title: 'Logout'}
]

export default tabs
