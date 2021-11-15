import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { RiShoppingCart2Line } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { Container, Image, Informations, Icon } from "./ProductElements";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartRedux";

export const Product = ({ product }) => {
  const path = `/products/${product.id_product}`;
  const dispatch = useDispatch();
  const quantity = 1;

  const handleClick = (e) => {
    e.preventDefault();
    console.log(product);
    dispatch(addProduct({ ...product, quantity }));
  };
  return (
    <Container>
      <Image src={product.img} />
      <Informations>
        <Icon onClick={handleClick}>
          <RiShoppingCart2Line />
        </Icon>
        <Icon to={path}>
          <BiSearch />
        </Icon>
        <Icon>
          <AiOutlineHeart />
        </Icon>
      </Informations>
    </Container>
  );
};
