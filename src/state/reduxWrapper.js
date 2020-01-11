import React from "react"
import { Provider } from "react-redux"
import { createStore as reduxCreateStore } from "redux"
import bugsnag from "@bugsnag/js"
import bugsnagReact from "@bugsnag/plugin-react"
import rootReducer from "."
import { loadState, saveState } from "./localStorage"

const bugsnagClient = bugsnag("6dbbae54b421f28bc764df2c988f7a47")
bugsnagClient.use(bugsnagReact, React)
const ErrorBoundary = bugsnagClient.getPlugin("react")

const persistedStore = loadState()
const createStore = reduxCreateStore(rootReducer, persistedStore)

createStore.subscribe(() => {
  saveState({
    cart: createStore.getState().cart,
    user: createStore.getState().user,
  })
})

const reduxWrapper = ({ element }) => (
  <Provider store={createStore}>
    <ErrorBoundary>{element}</ErrorBoundary>
  </Provider>
)

export default reduxWrapper
