import React from 'react';
import {
    Container,
    Wrapper,
    FilterContainer,
    Filter,
    FilterText,
    Select,
    Option,
} from './FiltersElements';

export const Filters = () => {
    return (
        <Container>
            <Wrapper>
                <FilterContainer>
                    <Filter>
                        <FilterText>Filter Products</FilterText>
                        <Select>
                            <Option disabled selected>
                                Color
                            </Option>
                            <Option>Black</Option>
                            <Option>White</Option>
                            <Option>Yellow</Option>
                            <Option>Red</Option>
                            <Option>Green</Option>
                        </Select>
                        <Select>
                            <Option disabled selected>
                                Size
                            </Option>
                            <Option>xs</Option>
                            <Option>s</Option>
                            <Option>m</Option>
                            <Option>l</Option>
                            <Option>xl</Option>
                        </Select>
                    </Filter>
                    <Filter>
                        <FilterText>Sort Products</FilterText>
                        <Select>
                            <Option>newest</Option>
                            <Option>price (asc)</Option>
                            <Option>price (desc)</Option>
                        </Select>
                    </Filter>
                </FilterContainer>
            </Wrapper>
        </Container>
    );
};
