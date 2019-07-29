const initialState = []

const ADD_TO_CART = 'ADD_TO_CART';
const CHANGE_QUANTITY = 'CHANGE_QUANTITY';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const addToCart = item => ({
  type: ADD_TO_CART, item
});

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload]
    case CHANGE_QUANTITY:
      const { index, quantity } = action.payload
      const newState = [...state]
      newState[index] = {...state[index], quantity: quantity}
      return newState
    case REMOVE_FROM_CART:
      const { itemIndex } = action.payload
      const stateWithoutItem = [...state]
      stateWithoutItem.splice(itemIndex, 1)
      return stateWithoutItem
    default:
      return state;
  }
};
