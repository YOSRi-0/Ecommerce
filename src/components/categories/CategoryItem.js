import React from 'react';
import { Button } from '../buttons/Button';
import { Container, Image, Informations, Title } from './CategoryItemElements';

export const CategoryItem = ({ categoryItem }) => {
    return (
        <Container>
            <Image src={categoryItem.img} />
            <Informations>
                <Title>{categoryItem.title}</Title>
                <Button>shop now</Button>
            </Informations>
        </Container>
    );
};
