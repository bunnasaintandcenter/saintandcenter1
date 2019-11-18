import React from "react"
import { render, cleanup } from "@testing-library/react"
import { StaticQuery } from "gatsby"
import ProductCarousel from "../productCarousel"

afterEach(cleanup)

console.log(StaticQuery)

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      allWcProductsCategories: {
        edges: [...data.allWcProductsCategories.edges],
      },
    })
  )
})

const data = {
  allWcProductsCategories: {
    edges: [
      {
        node: {
          wordpress_id: 16,
          products: [
            {
              name: "Tincture (Monthly)",
              images: [
                {
                  localFile: {
                    childImageSharp: {
                      fluid: {
                        src:
                          "/static/2a4be25bbac6d3a278db682a93330aec/bb156/Screen-Shot-2019-09-19-at-10.00.57-AM.png",
                      },
                    },
                  },
                },
              ],
            },
            {
              name: "Tincture",
              images: [
                {
                  localFile: {
                    childImageSharp: {
                      fluid: {
                        src:
                          "/static/d5cc44bc7307868fa13b0d06b850063d/e2a2a/Tinture1000boxandbottle-Edited9615.jpg",
                      },
                    },
                  },
                },
                {
                  localFile: {
                    childImageSharp: {
                      fluid: {
                        src:
                          "/static/c11caa8987e6079e075a8f520c11aeac/e2a2a/Tinture1000.jpg",
                      },
                    },
                  },
                },
                {
                  localFile: {
                    childImageSharp: {
                      fluid: {
                        src:
                          "/static/37ff04f3c38b94cd5283b59400d69324/e2a2a/Tinture1000box.jpg",
                      },
                    },
                  },
                },
                {
                  localFile: {
                    childImageSharp: {
                      fluid: {
                        src:
                          "/static/7d13f63450fddb43ca3e7764a7cfd433/e2a2a/Tinturedrop.jpg",
                      },
                    },
                  },
                },
              ],
            },
          ],
        },
      },
      {
        node: {
          wordpress_id: 18,
          products: [
            {
              name: "Capsule (Monthly)",
              images: [
                {
                  localFile: {
                    childImageSharp: {
                      fluid: {
                        src:
                          "/static/16075329e81ec59e0e22e8d16e019c3a/a67ac/Screen-Shot-2019-09-19-at-10.01.03-AM.png",
                      },
                    },
                  },
                },
              ],
            },
            {
              name: "Capsule",
              images: [
                {
                  localFile: {
                    childImageSharp: {
                      fluid: {
                        src:
                          "/static/e5b9f84ee47733b589f155df2959cc2f/e2a2a/CapsuleBottleandBox-1.jpg",
                      },
                    },
                  },
                },
                {
                  localFile: {
                    childImageSharp: {
                      fluid: {
                        src:
                          "/static/20d6d59d2e3bdd309143eba388ce75f5/e2a2a/CapsuleBottle-1.jpg",
                      },
                    },
                  },
                },
                {
                  localFile: {
                    childImageSharp: {
                      fluid: {
                        src:
                          "/static/b0b35f64e2217bd14f64e1e128b01a1f/e2a2a/Capsuleandbootle-1.jpg",
                      },
                    },
                  },
                },
                {
                  localFile: {
                    childImageSharp: {
                      fluid: {
                        src:
                          "/static/5b3ea79225b5145112644e5e40dea26a/e2a2a/Capsules-1.jpg",
                      },
                    },
                  },
                },
              ],
            },
          ],
        },
      },
      {
        node: {
          wordpress_id: 17,
          products: [
            {
              name: "Salve (Monthly)",
              images: [
                {
                  localFile: {
                    childImageSharp: {
                      fluid: {
                        src:
                          "/static/9f25ad98686a79695e70675696cb46d2/41df0/Screen-Shot-2019-09-19-at-10.01.09-AM.png",
                      },
                    },
                  },
                },
              ],
            },
            {
              name: "Salve",
              images: [
                {
                  localFile: {
                    childImageSharp: {
                      fluid: {
                        src:
                          "/static/02460a154162764b64aa4b6fcb233e2c/e2a2a/SalveandBox.jpg",
                      },
                    },
                  },
                },
                {
                  localFile: {
                    childImageSharp: {
                      fluid: {
                        src:
                          "/static/a060db2cdcd48527e21c344ee0057f3a/e2a2a/Salve.jpg",
                      },
                    },
                  },
                },
                {
                  localFile: {
                    childImageSharp: {
                      fluid: {
                        src:
                          "/static/40b4ca53a501fb76a67d34422b4a0b3c/e2a2a/salveopen.jpg",
                      },
                    },
                  },
                },
              ],
            },
          ],
        },
      },
    ],
  },
}

it("renders", () => {
  const { getByTestId } = render(<ProductCarousel />)
  expect(getByTestId("product-carousel")).toBeTruthy()
})
