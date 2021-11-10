import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../buttons/Button';
import { Container, Image, Informations, Title } from './CategoryItemElements';

export const CategoryItem = ({ categoryItem }) => {
    return (
        <Container>
            <Image src={categoryItem.img} />
            <Informations>
                <Title>{categoryItem.title}</Title>
                <Link to="/products">
                    <Button>shop now</Button>
                </Link>
            </Informations>
        </Container>
    );
};
