import {
  Name,
  Price,
  Quantity,
  RemoveButton,
  Arrow,
  ImageContainer,
  CheckoutItemContainer,
} from "./checkoutItem.styles";

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";
import { useDispatch } from "react-redux";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const dispatch = useDispatch();
  const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name> {name}</Name>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        {quantity}
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Price> {price}</Price>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
