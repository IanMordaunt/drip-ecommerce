import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Coffee</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Coffee:</FilterText>
          <Select>
            <Option disabled selected>
              Roast
            </Option>
            <Option>Light</Option>
            <Option>Medium</Option>
            <Option>Dark</Option>
            <Option>Espresso</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Region
            </Option>
            <Option>Central America</Option>
            <Option>South America</Option>
            <Option>Africa</Option>
            <Option>Middle East</Option>
            <Option>India</Option>
            <Option>Indonesia</Option>
            <Option>Hawaii</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Favorites</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
