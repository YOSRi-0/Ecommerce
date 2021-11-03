import React from 'react';
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
} from './CartElements';
import { Button } from '../../components/buttons/Button';
import { IoIosRemove, IoIosAdd } from 'react-icons/io';

export const Cart = () => {
    return (
        <Container>
            <Wrapper>
                <Top>
                    <Button>continue shopping</Button>
                    <TopLinks>
                        <TopLink>shopping cart(2)</TopLink>
                        <TopLink>your wishlist(0)</TopLink>
                    </TopLinks>
                    <Button theme="dark">checkout now</Button>
                </Top>
                <Bottom>
                    <Info>
                        <ProductCart>
                            <ProductInfo>
                                <Image src="https://i.ibb.co/Y0djRHf/product-1.jpg" />
                                <ProductDetails>
                                    <ProductName>
                                        <b>Product:</b> Thunder Tshirt
                                    </ProductName>
                                    <ProductId>
                                        <b>Id:</b> 2343343266
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
                                        <IoIosRemove />
                                        <PriceAmount>1</PriceAmount>
                                        <IoIosAdd />
                                    </PriceAmountContainer>
                                </PriceAddContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                        </ProductCart>
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
