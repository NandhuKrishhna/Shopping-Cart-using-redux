import productsReducer from '../slices/productsSlice'
import cartReducer from '../slices/cartSlice'
import wishListReducer from '../slices/wishListSlice'
import { configureStore } from '@reduxjs/toolkit'
// import { logger } from './middleware/logger'


export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
  },
  // middleware: [logger, ],
})
// export const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__?.()
// )

// console.log(store)

// store.dispatch(addCartItem(1))
// store.dispatch(addCartItem(12))

// store.dispatch(increaseCartItemQuantity(12))

// store.dispatch(decreaseCartItemQuantity(12))
// store.dispatch(decreaseCartItemQuantity(12))

// store.dispatch(addWishListItem(18))
// store.dispatch(addWishListItem(11))

// store.dispatch(removeWishListItem(11))
// store.dispatch(removeWishListItem(18));
