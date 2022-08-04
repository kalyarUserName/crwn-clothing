import { CART_INITIAL_STATE, cartReducer } from "./cart.reducer";
import { setCartItems, setIsCartOpen } from "./cart.action";
import { AnyAction } from "redux";

describe("cartReducer", function () {
  it("should return initial state", function () {
    expect(cartReducer(undefined, {} as AnyAction)).toEqual(CART_INITIAL_STATE);
  });

  it("should set cartItems", function () {
    const mockItems = [
      {
        id: 1,
        imageUrl: "image.jpg",
        name: "item 1",
        price: 777,
        quantity: 2,
      },
    ];
    expect(
      cartReducer(CART_INITIAL_STATE, setCartItems(mockItems)).cartItems
    ).toEqual(mockItems);
  });

  it("should set IsCartOpen", function () {
    const mockIsCartOpen = true;
    expect(
      cartReducer(CART_INITIAL_STATE, setIsCartOpen(mockIsCartOpen)).isCartOpen
    ).toEqual(mockIsCartOpen);
  });
});
