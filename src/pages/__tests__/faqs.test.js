import React from 'react'
import FAQs from '../faqs.js'
import { StaticQuery } from 'gatsby'
import { render, cleanup } from '@testing-library/react'

afterEach(cleanup)

beforeEach(() => {
    StaticQuery.mockImplementationOnce((mock: any) =>
        mock.render({
            allWcProduct: {
                edges: [
                    {
                        node: {
                            ...data
                        }
                    }
                ]
            }
        })
    )
})

const data = {
  "allWcProducts": {
    "edges": [
      {
        "node": {
          "sku": "",
          "name": "Dog Treats (Monthly)",
          "wordpress_id": 252,
          "description": "",
          "product_variations": [
            {
              "price": "38",
              "attributes": [
                {
                  "option": "5mg (30 count)"
                }
              ],
              "sku": "",
              "id": 254
            }
          ]
        }
      },
      {
        "node": {
          "sku": "",
          "name": "Pet Tincture",
          "wordpress_id": 249,
          "description": "",
          "product_variations": [
            {
              "price": "42",
              "attributes": [
                {
                  "option": "300mg"
                }
              ],
              "sku": "",
              "id": 250
            }
          ]
        }
      },
      {
        "node": {
          "sku": "",
          "name": "Dog Treats",
          "wordpress_id": 247,
          "description": "",
          "product_variations": [
            {
              "price": "38",
              "attributes": [
                {
                  "option": "5mg (30 count)"
                }
              ],
              "sku": "",
              "id": 248
            }
          ]
        }
      },
      {
        "node": {
          "sku": "",
          "name": "Pet Tincture (Monthly)",
          "wordpress_id": 244,
          "description": "",
          "product_variations": [
            {
              "price": "42",
              "attributes": [
                {
                  "option": "300mg"
                }
              ],
              "sku": "",
              "id": 246
            }
          ]
        }
      },
      {
        "node": {
          "sku": "A33122",
          "name": "Capsule (Monthly)",
          "wordpress_id": 168,
          "description": "<p>Nulla eu rhoncus mi. Curabitur gravida elit est, non vulputate massa posuere id. Aliquam a tempus sem. Vestibulum a tincidunt enim. Pellentesque venenatis lacus dictum, facilisis lacus ac, aliquet sem.</p>\n",
          "product_variations": [
            {
              "price": "85",
              "attributes": [
                {
                  "option": "750mg"
                }
              ],
              "sku": "A33122",
              "id": 169
            }
          ]
        }
      },
      {
        "node": {
          "sku": "8b2903",
          "name": "Salve (Monthly)",
          "wordpress_id": 166,
          "description": "",
          "product_variations": [
            {
              "price": "55",
              "attributes": [
                {
                  "option": "400mg"
                }
              ],
              "sku": "8b2903",
              "id": 167
            }
          ]
        }
      },
      {
        "node": {
          "sku": "EEB806",
          "name": "Tincture (Monthly)",
          "wordpress_id": 163,
          "description": "<p>All-natural so you can be all you, all-day, everyday. Saint and Center tinctures are extracted and purified from organically and sustainably grown hemp. No additives, no pesticides, no GMO’s.</p>\n",
          "product_variations": [
            {
              "price": "110",
              "attributes": [
                {
                  "option": "1000mg"
                }
              ],
              "sku": "EEB806",
              "id": 165
            },
            {
              "price": "65",
              "attributes": [
                {
                  "option": "500mg"
                }
              ],
              "sku": "EEB806",
              "id": 164
            }
          ]
        }
      },
      {
        "node": {
          "sku": "8b2904",
          "name": "Salve",
          "wordpress_id": 99,
          "description": "<p><span style=\"font-weight: 400;\">Natural CBD balm made with hemp, eucalyptus, lavender, coconut oil, beeswax. No THC. No chemicals.</span></p>\n",
          "product_variations": [
            {
              "price": "55",
              "attributes": [
                {
                  "option": "400mg"
                }
              ],
              "sku": "8b2904",
              "id": 100
            }
          ]
        }
      },
      {
        "node": {
          "sku": "A33123",
          "name": "Capsule",
          "wordpress_id": 31,
          "description": "<p>Simple CBD softgels with 25mg of pure phytocannabinoids. No sugar. No gluten.</p>\n<p>No THC. No chemicals.</p>\n",
          "product_variations": [
            {
              "price": "85",
              "attributes": [
                {
                  "option": "750mg"
                }
              ],
              "sku": "A33123",
              "id": 32
            }
          ]
        }
      },
      {
        "node": {
          "sku": "EEB805",
          "name": "Tincture",
          "wordpress_id": 27,
          "description": "<p>All-natural so you can be all you, all-day, everyday. Saint and Center tinctures are extracted and purified from organically and sustainably grown hemp. No additives, no pesticides, no GMO’s.</p>\n",
          "product_variations": [
            {
              "price": "110",
              "attributes": [
                {
                  "option": "1000mg"
                }
              ],
              "sku": "TIN-002",
              "id": 30
            },
            {
              "price": "65",
              "attributes": [
                {
                  "option": "500mg"
                }
              ],
              "sku": "TIN-001",
              "id": 29
            }
          ]
        }
      }
    ]
  }
}

it('renders', () => {
  const { getAllByTestId } = render(<FAQs />)
  expect(getAllByTestId('faqs')).toHaveLength(1)
});
