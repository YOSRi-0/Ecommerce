import React, { useEffect, useState } from 'react';
import {
    Container,
    Wrapper,
    ImgContainer,
    Img,
    InfoContainer,
    Title,
    Description,
    Price,
    FilterContainer,
    Filter,
    FilterTitle,
    FilterColor,
    FilterSize,
    FilterSizeOption,
    AddContainer,
    AmountContainer,
    Amount,
} from './ProductElements';
import { Button } from '../../components/buttons/Button';
import { IoIosAdd, IoIosRemove } from 'react-icons/io';
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../../requestMethod';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cartRedux';

export const Product = () => {
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get('/products/' + id);
                setProduct(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getProduct();
    }, [id]);

    const handleClick = () => {
        dispatch(addProduct({ ...product, quantity }));
    };

    return (
        <Container>
            <Wrapper>
                <ImgContainer>
                    <Img src="https://i.ibb.co/Y0djRHf/product-1.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product?.title}</Title>
                    <Description>{product?.description}</Description>
                    <Price>$ {product?.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"></FilterColor>
                            <FilterColor color="tomato"></FilterColor>
                            <FilterColor color="cornflowerblue"></FilterColor>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <IoIosRemove
                                onClick={() =>
                                    quantity > 1 && setQuantity(quantity - 1)
                                }
                            />
                            <Amount>{quantity}</Amount>
                            <IoIosAdd
                                onClick={() => setQuantity(quantity + 1)}
                            />
                        </AmountContainer>
                        <Button theme="dark" onClick={handleClick}>
                            Add To Cart
                        </Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
        </Container>
    );
};
