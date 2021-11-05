import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
	max-width: 1600px;
	margin: 0 auto 3rem;

	${mobile({ margin: "0  auto " })}
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;

	${mobile({ flexDirection: "column" })}
`;

export const Filter = styled.div`
	display: flex;
	align-items: center;

	${mobile({ marginBottom: "1rem" })}
`;

export const FilterText = styled.h3`
	font-size: 1.5rem;
	font-weight: 500;
	${mobile({ fontSize: "1rem" })}
`;

export const Select = styled.select`
	margin-left: 1rem;
	padding: 0.5rem;

	font-size: 1rem;
	text-transform: capitalize;

	${mobile({ marginLeft: ".75rem", padding: ".25rem" })}
`;

export const Option = styled.option``;
