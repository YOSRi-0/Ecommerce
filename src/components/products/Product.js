import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { BiSearch } from 'react-icons/bi';
import { Container, Image, Informations, Icon } from './ProductElements';

export const Product = ({ product }) => {
    return (
        <Container>
            <Image src={product.img} />
            <Informations>
                <Icon>
                    <RiShoppingCart2Line />
                </Icon>
                <Icon>
                    <BiSearch />
                </Icon>
                <Icon>
                    <AiOutlineHeart />
                </Icon>
            </Informations>
        </Container>
    );
};
