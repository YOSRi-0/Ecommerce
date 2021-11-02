import React from 'react';
import { categories } from '../../data';
import { Container, Wrapper, Title } from './CategoriesElements';
import { CategoryItem } from './CategoryItem';

export const Categories = () => {
    return (
        <Container>
            <Title>Categories</Title>
            <Wrapper>
                {categories.map((categoryItem) => (
                    <CategoryItem
                        key={categoryItem.id}
                        categoryItem={categoryItem}
                    />
                ))}
            </Wrapper>
        </Container>
    );
};
