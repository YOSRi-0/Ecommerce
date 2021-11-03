import React from 'react';
import { popularProducts } from '../../data';
import { Filters } from '../filters/Filters';
import { Product } from './Product';
import { Container, Title, Wrapper } from './ProductsElements';

export const Products = (props) => {
    let filter = '';
    if (props.filter !== undefined) {
        filter = props.filter;
    }
    console.log(props.align);
    return (
        <Container>
            <Title align={props.align}>{props.title}</Title>
            {filter === 'show' && <Filters />}
            <Wrapper>
                {popularProducts.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </Wrapper>
        </Container>
    );
};
