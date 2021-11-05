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
	const resetToggle = () => {
		setToggleNab(false);
	};
	const toggle = () => {
		setToggleNab(!toggleNav);
	};
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
					<MenuItem
						to="/register"
						onClick={toggle}
					>
						Register
					</MenuItem>
					<MenuItem
						to="/login"
						onClick={resetToggle}
					>
						Login
					</MenuItem>
					<CartContainer
						to="/cart"
						onClick={resetToggle}
					>
						<RiShoppingCart2Line></RiShoppingCart2Line>
					</CartContainer>
				</Right>
			</Wrapper>
		</Container>
	);
};
