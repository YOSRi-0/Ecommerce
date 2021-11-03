import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { IoCaretDown } from 'react-icons/io5';
import { RiShoppingCart2Line } from 'react-icons/ri';
import {
    Container,
    Wrapper,
    Left,
    Right,
    Center,
    Language,
    IoCaretDownContainer,
    Input,
    SearchContainer,
    Logo,
    MenuItem,
    CartContainer,
} from './NavBarElements';

export const NavBar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>
                        EN
                        <IoCaretDownContainer>
                            <IoCaretDown></IoCaretDown>
                        </IoCaretDownContainer>
                    </Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <BiSearch></BiSearch>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo to="/">YOUYOU.</Logo>
                </Center>
                <Right>
                    <MenuItem to="/register">Register</MenuItem>
                    <MenuItem to="/login">Login</MenuItem>
                    <CartContainer to="/cart">
                        <RiShoppingCart2Line></RiShoppingCart2Line>
                    </CartContainer>
                </Right>
            </Wrapper>
        </Container>
    );
};
