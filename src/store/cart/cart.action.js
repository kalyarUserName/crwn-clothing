import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPE } from "./cart.types";

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, boolean);

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem)
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );
  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1)
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  // return back cartitems with matching cart item with reduced quantity

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};
export const removeItemFromCart = (cartItems, productToAdd) => {
  const newCartItems = removeCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};
export const clearItemFromCart = (cartItems, productToClear) => {
  const newCartItems = clearCartItem(cartItems, productToClear);
  return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};
