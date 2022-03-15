// import { Filter } from '@material-ui/icons';
import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 900;
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-size: 20px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 30px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 25px -15px;
  display: flex;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterQuantity = styled.select`
  margin-left: 15px;
  font-size: 20px;
`;

const FilterTitle = styled.span`
  font-size: 25px;
  padding: 20px;
`;

const FilterQuantityOption = styled.option`
font-size: 30px;
`;

const AddContainer = styled.div`
width: 40%;
display: flex;
align-items: center;
justify-content: space-between;
`;

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`;
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`;

const Button = styled.button`
padding:  15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover {
    background-color: #f8f4f4;
}
`;


const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://cdn.shopify.com/s/files/1/0087/6606/2639/products/image_2_20_f5fb74c1-fc47-4f1b-8bea-166d3a5d8efb_550x825.png?v=1642534126" />
        </ImgContainer>
        <InfoContainer>
          <Title>RWANDA IBISI MOUNTAIN</Title>
          <Desc>molasses | cranberry | blackcurrant</Desc>
          <Price>$12/8oz ** $18/12oz ** $23/16oz</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Quantity</FilterTitle>
              <FilterQuantity>
                <FilterQuantityOption>8oz</FilterQuantityOption>
                <FilterQuantityOption>12oz</FilterQuantityOption>
                <FilterQuantityOption>16oz</FilterQuantityOption>
              </FilterQuantity>
            </Filter>
          </FilterContainer>
          <AddContainer>
              <AmountContainer>
                  <Remove/>
                  <Amount>1</Amount>
                  <Add/>
              </AmountContainer>
              <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
