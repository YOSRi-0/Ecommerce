import React from "react";
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
} from "./ProductElements";
import { Button } from "../../components/buttons/Button";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

export const Product = () => {
	return (
		<Container>
			<Wrapper>
				<ImgContainer>
					<Img src="https://i.ibb.co/Y0djRHf/product-1.jpg" />
				</ImgContainer>
				<InfoContainer>
					<Title>Product nomoro 1</Title>
					<Description>
						Lorem ipsum dolor sit amet
						consectetur adipisicing elit.
						Necessitatibus modi cum, vero
						repellendus itaque voluptatum
						incidunt error quis nostrum
						quisquam!
					</Description>
					<Price>$ 20</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>
								Color
							</FilterTitle>
							<FilterColor color="black"></FilterColor>
							<FilterColor color="tomato"></FilterColor>
							<FilterColor color="cornflowerblue"></FilterColor>
						</Filter>
						<Filter>
							<FilterTitle>
								Size
							</FilterTitle>
							<FilterSize>
								<FilterSizeOption>
									S
								</FilterSizeOption>
								<FilterSizeOption>
									XS
								</FilterSizeOption>
								<FilterSizeOption>
									M
								</FilterSizeOption>
								<FilterSizeOption>
									L
								</FilterSizeOption>
								<FilterSizeOption>
									XL
								</FilterSizeOption>
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AmountContainer>
							<IoIosRemove />
							<Amount>1</Amount>
							<IoIosAdd />
						</AmountContainer>
						<Button theme="dark">
							Add To Cart
						</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
		</Container>
	);
};
