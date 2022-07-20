import CheckoutItem from "../../components/checkoutItem/checkoutItem.component";

import {
  HeaderBlock,
  CheckoutHeader,
  CheckoutContainer,
  Total,
} from "./checkout.styles";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import PaymentForm from "../../components/paymentForm/paymentForm.component";

const headerBlocks = ["Product", "Description", "Quantity", "Price", "Remove"];

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);

  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        {/*<HeaderBlock>*/}
        {/*  <span>Product</span>*/}
        {/*</HeaderBlock>*/}
        {/*<HeaderBlock>*/}
        {/*  <span>Description</span>*/}
        {/*</HeaderBlock>*/}
        {/*<HeaderBlock>*/}
        {/*  <span>Quantity</span>*/}
        {/*</HeaderBlock>*/}
        {/*<HeaderBlock>*/}
        {/*  <span>Price</span>*/}
        {/*</HeaderBlock>*/}
        {/*<HeaderBlock>*/}
        {/*  <span>Remove</span>*/}
        {/*</HeaderBlock>*/}
        {headerBlocks.map((headerBlock, index) => (
          <HeaderBlock key={index}>
            <span> {headerBlock}</span>{" "}
          </HeaderBlock>
        ))}
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>
        <h2>Total: ${cartTotal}</h2>
      </Total>
      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;
