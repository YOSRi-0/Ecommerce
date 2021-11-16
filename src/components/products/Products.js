import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Filters } from "../filters/Filters";
import { Product } from "./Product";
import { Container, Title, Wrapper } from "./ProductsElements";

import axios from "axios";

const useQuery = () => {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
};

export const Products = (props) => {
  const query = useQuery();
  const gender = query.get("gender");
  const type = query.get("type");

  let filter = "";
  if (props.filter !== undefined) {
    filter = props.filter;
  }
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        let url = "http://localhost:5000/products";
        if (gender) {
          url =
            "http://localhost:5000/category" +
            (gender ? `?main_category=${gender}` : "") +
            (type ? `&submain_category=${type}` : "");
        }
        console.log(url);
        const res = await axios.get(url);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [gender, type]);
  return (
    <Container>
      <Title align={props.align}>{props.title}</Title>
      {filter === "show" && <Filters />}
      <Wrapper>
        {products.map((product) => (
          <Product key={product.id_product} product={product} />
        ))}
      </Wrapper>
    </Container>
  );
};
