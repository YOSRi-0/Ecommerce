import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../buttons/Button";
import { Container, Image, Informations, Title } from "./CategoryItemElements";

export const CategoryItem = ({ categoryItem }) => {
  return (
    <Container>
      <Image src={categoryItem.image} />
      <Informations>
        <Title>{categoryItem.submain_category}</Title>
        <Link to="/products">
          <Button>shop now</Button>
        </Link>
      </Informations>
    </Container>
  );
};
