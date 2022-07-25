import { FC } from "react";

import { Name, CartItemContainer, ItemDetails, Price } from "./cartItem.styles";
import { CartItem as _CartItem } from "../../store/cart/cart.types";
type CartItemProps = {
  cartItem: _CartItem;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <Price>
          {quantity} x ${price}
        </Price>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
