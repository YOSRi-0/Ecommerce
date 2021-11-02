import React from 'react';
import {
    Container,
    Wrapper,
    Left,
    Center,
    Right,
    Logo,
    Description,
    SocialContainer,
    SocialIcon,
    Title,
    List,
    ListItem,
    ContactItem,
} from './FooterElements';
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaPinterest,
} from 'react-icons/fa';
import { MdRoom, MdPhone, MdMail } from 'react-icons/md';

export const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>YOUYOU.</Logo>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Iusto ut vitae illum hic similique nostrum
                        explicabo voluptates quia sequi consequatur?
                    </Description>
                    <SocialContainer>
                        <SocialIcon color="#3b5998">
                            <FaFacebook />
                        </SocialIcon>
                        <SocialIcon color="#bd081c">
                            <FaPinterest />
                        </SocialIcon>
                        <SocialIcon color="#55acee">
                            <FaTwitter />
                        </SocialIcon>
                        <SocialIcon color="#e1306c;">
                            <FaInstagram />
                        </SocialIcon>
                    </SocialContainer>
                </Left>
                <Center>
                    <Title>Useful Links</Title>
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Cart</ListItem>
                        <ListItem>Men Fashion</ListItem>
                        <ListItem>Women Fashion</ListItem>
                        <ListItem>Order Tracking</ListItem>
                        <ListItem>Wishlist</ListItem>
                        <ListItem>Terms</ListItem>
                    </List>
                </Center>
                <Right>
                    <Title>Contact</Title>
                    <ContactItem>
                        <MdRoom
                            style={{ marginRight: '1rem', fontSize: '1.25rem' }}
                        />
                        4807 Stonecoal Road
                    </ContactItem>
                    <ContactItem>
                        <MdPhone
                            style={{ marginRight: '1rem', fontSize: '1.25rem' }}
                        />
                        419-600-5804
                    </ContactItem>
                    <ContactItem>
                        <MdRoom
                            style={{ marginRight: '1rem', fontSize: '1.25rem' }}
                        />
                        contact@youyou.com
                    </ContactItem>
                </Right>
            </Wrapper>
        </Container>
    );
};
