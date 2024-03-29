import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Button from "../button/button.component";
import CartItem from "../cartItem/cartItem.component";

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cartDropdown.styles";

import { selectCartItems } from "../../store/cart/cart.selector";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = useCallback(() => {
    navigate("/checkout");
  }, []);

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}> GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
