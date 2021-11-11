import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoCaretDown } from "react-icons/io5";
import { RiShoppingCart2Line } from "react-icons/ri";
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
  Hamburger,
  BarsIcon,
  CartQuantity,
} from "./NavBarElements";
import { useSelector } from "react-redux";

export const NavBar = () => {
  const [toggleNav, setToggleNab] = useState(false);
  const resetToggle = () => {
    setToggleNab(false);
  };
  const toggle = () => {
    setToggleNab(!toggleNav);
  };

  const quantity = useSelector((state) => state.cart.quantity);

  console.log(quantity);
  return (
    <Container isopen={toggleNav}>
      <Wrapper>
        <Left isopen={toggleNav}>
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
        <Center isopen={toggleNav}>
          <Logo to="/" onClick={resetToggle}>
            YOUYOU.
          </Logo>
          <Hamburger onClick={toggle}>
            <BarsIcon />
          </Hamburger>
        </Center>
        <Right isopen={toggleNav}>
          <MenuItem to="/register" onClick={resetToggle}>
            Register
          </MenuItem>
          <MenuItem to="/login" onClick={resetToggle}>
            Login
          </MenuItem>
          <CartContainer to="/cart" onClick={resetToggle}>
            <CartQuantity>{quantity}</CartQuantity>
            <RiShoppingCart2Line></RiShoppingCart2Line>
          </CartContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};
