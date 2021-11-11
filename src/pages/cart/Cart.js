import React, { useState, useEffect } from "react";
import {
  Container,
  Wrapper,
  Top,
  TopLinks,
  TopLink,
  Bottom,
  Info,
  Summary,
  ProductCart,
  ProductInfo,
  Image,
  ProductDetails,
  ProductName,
  ProductId,
  ProductColor,
  ProductSize,
  PriceDetail,
  PriceAddContainer,
  PriceAmountContainer,
  PriceAmount,
  ProductPrice,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  ButtonCheckout,
  TopButton,
} from "./CartElements";
import { IoIosRemove, IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../../requestMethod";

const KEY =
  "pk_test_51JuESlI01Unj5Zu7eZfIgu2ZTeIryYlht5LHpTPnnbPhJsmREcVDvLL2NpwjXOhUdN0jtawUuwAMVbdKPiQqOTlv00jJyueWO7";

export const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makePayment = async () => {
      try {
        const res = await userRequest.post("/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makePayment();
  }, [stripeToken, cart.total]);

  console.log(cart.total * 100);
  return (
    <Container>
      <Wrapper>
        <Top>
          <Link to="/products">
            <TopButton>continue shopping</TopButton>
          </Link>
          <TopLinks>
            <TopLink>shopping cart(2)</TopLink>
            <TopLink>your wishlist(0)</TopLink>
          </TopLinks>
          <TopButton theme="dark">checkout now</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <ProductCart>
                <ProductInfo>
                  <Image src="https://i.ibb.co/Y0djRHf/product-1.jpg" />
                  <ProductDetails>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>Id:</b> {product.id_product}
                    </ProductId>
                    <ProductColor>
                      <b>Color</b>
                    </ProductColor>
                    <ProductSize>
                      <b>Size:</b> M
                    </ProductSize>
                  </ProductDetails>
                </ProductInfo>
                <PriceDetail>
                  <PriceAddContainer>
                    <PriceAmountContainer>
                      <IoIosRemove
                        onClick={() =>
                          quantity > 1 && setQuantity(quantity - 1)
                        }
                      />
                      <PriceAmount>{product.quantity}</PriceAmount>
                      <IoIosAdd onClick={() => setQuantity(quantity + 1)} />
                    </PriceAmountContainer>
                  </PriceAddContainer>
                  <ProductPrice>$ {product.price}</ProductPrice>
                </PriceDetail>
              </ProductCart>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>order summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>estimated shipping</SummaryItemText>
              <SummaryItemPrice>$ 3.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>shipping discount</SummaryItemText>
              <SummaryItemPrice>$ -3.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="store"
              billingAddress
              shippingAddress
              description={`Your total is ${cart.total}`}
              amout={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <ButtonCheckout theme="dark">checkout now</ButtonCheckout>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};
