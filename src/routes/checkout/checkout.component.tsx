import { useSelector } from "react-redux";

import CheckoutItem from "../../components/checkoutItem/checkoutItem.component";
import PaymentForm from "../../components/paymentForm/paymentForm.component";

import {
  HeaderBlock,
  CheckoutHeader,
  CheckoutContainer,
  Total,
} from "./checkout.styles";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

const headerBlocks = ["Product", "Description", "Quantity", "Price", "Remove"];

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        {headerBlocks.map((headerBlock, index) => (
          <HeaderBlock key={index}>
            <span> {headerBlock}</span>{" "}
          </HeaderBlock>
        ))}
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem
          key={cartItem.id}
          cartItem={cartItem}
          cartItems={cartItems}
        />
      ))}
      <Total>
        <h2>Total: ${cartTotal}</h2>
      </Total>
      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;
