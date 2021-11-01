import React, { useState } from 'react';
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
import { sliderItems } from '../../data';

export const Slider = () => {
    const [sliderIndex, setSliderIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === 'left') {
            if (sliderIndex === 0) {
                setSliderIndex(sliderItems.length - 1);
            } else {
                setSliderIndex(sliderIndex - 1);
            }
        }
        if (direction === 'right') {
            if (sliderIndex === sliderItems.length - 1) {
                setSliderIndex(0);
            } else {
                setSliderIndex(sliderIndex + 1);
            }
        }
    };

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick('left')}>
                <RiArrowLeftSFill></RiArrowLeftSFill>
            </Arrow>
            <Wrapper>
                {sliderItems.map((sliderItem) => {
                    return (
                        <Slide
                            key={sliderItem.id}
                            index={sliderIndex}
                            bg={sliderItem.bg}
                        >
                            <ImgContainer>
                                <Image src={sliderItem.img} />
                            </ImgContainer>
                            <TextContainer>
                                <Title>{sliderItem.title}</Title>
                                <Description>
                                    {sliderItem.description}
                                </Description>
                                <Button>shop now</Button>
                            </TextContainer>
                        </Slide>
                    );
                })}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick('right')}>
                <RiArrowRightSFill></RiArrowRightSFill>
            </Arrow>
        </Container>
    );
};
