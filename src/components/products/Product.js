import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { BiSearch } from 'react-icons/bi';
import { Container, Image, Informations, Icon } from './ProductElements';

export const Product = ({ product }) => {
    const path = `/products/${product.id_product}`;
    return (
        <Container>
            <Image src={product.title} />
            <Informations>
                <Icon>
                    <RiShoppingCart2Line />
                </Icon>
                <Icon to={path}>
                    <BiSearch />
                </Icon>
                <Icon>
                    <AiOutlineHeart />
                </Icon>
            </Informations>
        </Container>
    );
};
