import React from "react";
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
} from "./NavBarElements";
import { useState } from "react";

export const NavBar = () => {
	const [toggleNav, setToggleNab] = useState(false);
	console.log(toggleNav);
	const toggle = () => {
		setToggleNab(!toggleNav);
	};
	return (
		<Container isOpen={toggleNav}>
			<Wrapper>
				<Left isOpen={toggleNav}>
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
				<Center isOpen={toggleNav}>
					<Logo to="/">YOUYOU.</Logo>
					<Hamburger onClick={toggle}>
						<BarsIcon isOpen={toggleNav} />
					</Hamburger>
				</Center>
				<Right isOpen={toggleNav}>
					<MenuItem to="/register">
						Register
					</MenuItem>
					<MenuItem to="/login">Login</MenuItem>
					<CartContainer to="/cart">
						<RiShoppingCart2Line></RiShoppingCart2Line>
					</CartContainer>
				</Right>
			</Wrapper>
		</Container>
	);
};
