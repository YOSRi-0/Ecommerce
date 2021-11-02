import React from 'react';
import { popularProducts } from '../../data';
import { Product } from './Product';
import { Container, Title, Wrapper } from './ProductsElements';

export const Products = () => {
    return (
        <Container>
            <Title>Popular Products</Title>
            <Wrapper>
                {popularProducts.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </Wrapper>
        </Container>
    );
};
