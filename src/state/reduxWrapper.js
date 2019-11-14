import React from "react"
import { Provider } from "react-redux"
import { createStore as reduxCreateStore } from "redux"
import rootReducer from "."
import { loadState, saveState } from "./localStorage"

const persistedStore = loadState()
const createStore = reduxCreateStore(rootReducer, persistedStore)

createStore.subscribe(() => {
  saveState({
    cart: createStore.getState().cart,
    user: createStore.getState().user,
  })
})

const reduxWrapper = ({ element }) => (
  <Provider store={createStore}>{element}</Provider>
)

export default reduxWrapper
