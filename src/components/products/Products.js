import React, { useEffect, useState } from 'react';
import { popularProducts } from '../../data';
import { Filters } from '../filters/Filters';
import { Product } from './Product';
import { Container, Title, Wrapper } from './ProductsElements';

import axios from 'axios';

export const Products = (props) => {
    let filter = '';
    if (props.filter !== undefined) {
        filter = props.filter;
    }
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get('http://localhost:5000/products/');
                setProducts(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getProducts();
    }, []);
    return (
        <Container>
            <Title align={props.align}>{props.title}</Title>
            {filter === 'show' && <Filters />}
            <Wrapper>
                {products.map((product) => (
                    <Product key={product.id_product} product={product} />
                ))}
            </Wrapper>
        </Container>
    );
};
