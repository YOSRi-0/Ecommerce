import React, { useState } from 'react';
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
} from './CartElements';
import { IoIosRemove, IoIosAdd } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Cart = () => {
    const [quantity, setQuantity] = useState(1);
    const cart = useSelector((state) => state.cart);

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
                                                    quantity > 1 &&
                                                    setQuantity(quantity - 1)
                                                }
                                            />
                                            <PriceAmount>
                                                {product.quantity}
                                            </PriceAmount>
                                            <IoIosAdd
                                                onClick={() =>
                                                    setQuantity(quantity + 1)
                                                }
                                            />
                                        </PriceAmountContainer>
                                    </PriceAddContainer>
                                    <ProductPrice>
                                        $ {product.price}
                                    </ProductPrice>
                                </PriceDetail>
                            </ProductCart>
                        ))}
                    </Info>
                    <Summary>
                        <SummaryTitle>order summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>
                                estimated shipping
                            </SummaryItemText>
                            <SummaryItemPrice>$ 3.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>shipping discount</SummaryItemText>
                            <SummaryItemPrice>$ -3.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>total</SummaryItemText>
                            <SummaryItemPrice>$ 90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 90</SummaryItemPrice>
                        </SummaryItem>
                        <ButtonCheckout theme="dark">
                            checkout now
                        </ButtonCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
        </Container>
    );
};
