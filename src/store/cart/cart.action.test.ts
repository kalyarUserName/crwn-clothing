import {
  setIsCartOpen,
  addItemToCart,
  setCartItems,
  clearItemFromCart,
  removeItemFromCart,
} from "./cart.action";
import { CART_ACTION_TYPE, CartItem } from "./cart.types";

describe("setIsCartOpen action", function () {
  it("should create the setIsCartOpen action", function () {
    const action = setIsCartOpen(true);
    expect(action.type).toEqual(CART_ACTION_TYPE.SET_IS_CART_OPEN);
    expect(action.payload).toEqual(true);
  });
});

describe("addItemToCart action", function () {
  it("should create the addItemToCart action", function () {
    const mockCartItems: CartItem[] = [];
    const mockProductToAdd = {
      id: 1,
      imageUrl: "image.jpg",
      name: "item 1",
      price: 777,
    };
    const action = addItemToCart(mockCartItems, mockProductToAdd);

    expect(action.type).toEqual(CART_ACTION_TYPE.SET_CART_ITEMS);
    expect(action.payload).toEqual([{ ...mockProductToAdd, quantity: 1 }]);
  });
});

describe("setCartItems action", function () {
  it("should create the setCartItems action", function () {
    const mockCartItems: CartItem[] = [
      {
        id: 1,
        imageUrl: "image.jpg",
        name: "item 1",
        price: 777,
        quantity: 0,
      },
    ];
    const action = setCartItems(mockCartItems);

    expect(action.type).toEqual(CART_ACTION_TYPE.SET_CART_ITEMS);
    expect(action.payload).toEqual(mockCartItems);
  });
});

describe("clearItemFromCart action", function () {
  it("should create the clearItemFromCart action", function () {
    const mockCartItems: CartItem[] = [
      {
        id: 1,
        imageUrl: "image.jpg",
        name: "item 1",
        price: 777,
        quantity: 2,
      },
    ];
    const mockProductToClear = {
      id: 1,
      imageUrl: "image.jpg",
      name: "item 1",
      price: 777,
    };
    const action = clearItemFromCart(mockCartItems, mockProductToClear);

    expect(action.type).toEqual(CART_ACTION_TYPE.SET_CART_ITEMS);
    expect(action.payload).toEqual([]);
  });
});

describe("removeItemFromCart action", function () {
  it("should create the removeItemFromCart action", function () {
    const mockCartItems: CartItem[] = [
      {
        id: 1,
        imageUrl: "image.jpg",
        name: "item 1",
        price: 777,
        quantity: 2,
      },
    ];
    const mockProductToRemove = {
      id: 1,
      imageUrl: "image.jpg",
      name: "item 1",
      price: 777,
    };
    const action = removeItemFromCart(mockCartItems, mockProductToRemove);

    expect(action.type).toEqual(CART_ACTION_TYPE.SET_CART_ITEMS);
    expect(action.payload).toEqual([
      {
        id: 1,
        imageUrl: "image.jpg",
        name: "item 1",
        price: 777,
        quantity: 1,
      },
    ]);
  });
});
