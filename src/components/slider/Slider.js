import React from 'react';
import { RiArrowRightSFill, RiArrowLeftSFill } from 'react-icons/ri';
import {
    Arrow,
    Container,
    ImgContainer,
    Slide,
    Wrapper,
    TextContainer,
    Image,
    Title,
    Description,
    Button,
} from './SliderElements';

export const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                <RiArrowLeftSFill></RiArrowLeftSFill>
            </Arrow>
            <Wrapper>
                <Slide>
                    <ImgContainer>
                        <Image src="https://i.ibb.co/TRFxvsv/cover-5.png" />
                    </ImgContainer>
                    <TextContainer>
                        <Title>summer sale</Title>
                        <Description>
                            don’t compromise our style! get flat 30% off new
                            arrivals
                        </Description>
                        <Button>shop now</Button>
                    </TextContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right">
                <RiArrowRightSFill></RiArrowRightSFill>
            </Arrow>
        </Container>
    );
};
