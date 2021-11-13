import React, { useState, useEffect } from "react";
import {
  Container,
  Wrapper,
  FilterContainer,
  Filter,
  FilterText,
  Select,
  Option,
} from "./FiltersElements";
import { publicRequest } from "../../requestMethod";

export const Filters = () => {
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    const getColors = async () => {
      try {
        const res = await publicRequest.get("/colors");
        setColors(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getColors();
    const getSizes = async () => {
      try {
        const res = await publicRequest.get("/sizes");
        setSizes(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getSizes();
  }, []);
  return (
    <Container>
      <Wrapper>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products</FilterText>
            <Select>
              <Option disabled selected>
                Color
              </Option>
              {colors.map((color) => (
                <Option key={color.id_color}>{color.name}</Option>
              ))}
            </Select>
            <Select>
              <Option disabled selected>
                Size
              </Option>
              {sizes.map((size) => (
                <Option key={size.id_size}>{size.name}</Option>
              ))}
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products</FilterText>
            <Select>
              <Option>newest</Option>
              <Option>price (asc)</Option>
              <Option>price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
      </Wrapper>
    </Container>
  );
};
