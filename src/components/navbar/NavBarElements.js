import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { FaBars } from "react-icons/fa";

export const Container = styled.div`
	height: 80px;
	background-color: #dee2e6;
	color: #343a40;
	padding: 0 5%;
	display: flex;

	transition: height 0.5s ease-in-out;

	${mobile({
		height: (props) => (props.isopen ? "100vh" : "80px"),
	})};
`;

export const Wrapper = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	max-width: 1600px;
	width: 100%;
	margin: 0 auto;
	${mobile({
		flexDirection: "column",
		justifyContent: "flex-start",
	})};
`;

export const Left = styled.div`
	flex: 1;
	display: flex;
	transition: all 0.5s ease-in-out 0.25s;

	${mobile({
		maxHeight: "50px",
		flex: "0",
		margin: "2rem 0",
		order: "2",
		display: (props) => (props.isopen ? "flex" : "none"),
		transition: "all 0.5s ease-in-out",
		opacity: (props) => (props.isopen ? "1" : "0"),
	})};
`;

export const Language = styled.span`
	text-transform: uppercase;
	align-items: center;
`;

export const IoCaretDownContainer = styled.div`
	width: 20px;
	height: 20px;
	display: flex;
	align-items: center;
	cursor: pointer;
`;

export const SearchContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: 1px solid rgba(73, 80, 87, 0.5);
	border-radius: 3px;
	padding: 0.5rem 1rem;
	margin-left: 1rem;

	&:hover {
		border: 1px solid rgba(73, 80, 87, 1);
	}
`;

export const Input = styled.input`
	height: 100%;
	outline: none;
	border: none;
	background: transparent;
`;

export const Center = styled.div`
	flex: 1;
	text-align: center;

	${mobile({
		flex: "0",
		order: "1",
		width: "100%",
		alignSelf: "flex-start",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		margin: "1rem 0",
	})};
`;

export const Logo = styled(Link)`
	font-size: 2rem;
	font-family: "Abril Fatface";
	text-decoration: none;
	color: inherit;
`;

export const Right = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	transition: all 0.5s ease-in-out 0.25s;

	${mobile({
		flex: "0",
		maxHeight: "100px",
		flexDirection: "column",
		justifyContent: "space-between",
		order: 4,
		display: (props) => (props.isopen ? "flex" : "none"),
		opacity: (props) => (props.isopen ? "1" : "0"),
	})};
`;

export const MenuItem = styled(Link)`
	text-decoration: none;
	text-transform: uppercase;
	font-weight: 500;
	color: inherit;
	margin-right: 2rem;
	cursor: pointer;

	&:hover {
		border-bottom: 1px solid #343a40;
	}
	${mobile({ marginRight: "0", marginBottom: "2rem" })}
`;

export const CartContainer = styled(Link)`
	font-size: 1.5rem;
	cursor: pointer;
	text-decoration: none;
	color: inherit;

	&:hover {
		transform: scale(1.1);
	}
`;

export const Hamburger = styled.div`
	display: none;

	${mobile({
		height: "30px",
		width: "30px",
		margin: "auto 0",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "flex-end",
		order: "2",
		cursor: "pointer",
	})}
`;

export const BarsIcon = styled(FaBars)`
	width: 100%;
	height: 100%;
`;
