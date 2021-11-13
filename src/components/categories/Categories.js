import React, { useState, useEffect } from "react";
//import { categories } from "../../data";
import { Container, Wrapper, Title } from "./CategoriesElements";
import { CategoryItem } from "./CategoryItem";
import { publicRequest } from "../../requestMethod";

import axios from "axios";

export const Categories = (props) => {
  const [categories, setCategories] = useState([]);
  console.log(categories);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await publicRequest.get("categories");
        setCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);
  return (
    <Container bg={props.bg}>
      <Title>Categories</Title>
      <Wrapper>
        {categories.map((categoryItem) => (
          <CategoryItem
            key={categoryItem.id_category}
            categoryItem={categoryItem}
          />
        ))}
      </Wrapper>
    </Container>
  );
};
