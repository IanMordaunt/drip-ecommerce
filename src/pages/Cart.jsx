// import { Title } from "@material-ui/icons";
// import { Info } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Product from "../components/Product";

const Container = styled.div`

`;

const Wrapper = styled.div`
padding: 20px;

`;

const Title = styled.h1`
font-weight: 300;
text-align: center;
`;

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between; 
padding: 20px;
`;

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props => props.type === "filled" && "none"};
background-color: ${props => props.type === "filled" ? "black" : "transparent"};
color: ${props => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
display: flex;
`;

const TopText = styled.div`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`;

const Bottom = styled.div`
display: flex;
justify-content: space-between;
`;

const Info = styled.div`
flex: 3;
`;

const Summary = styled.div`
flex: 1;

`;




const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>
              <TopButton>CONTINUE SHOPPING</TopButton>
              <TopTexts>
                  <TopText>Shopping Bag (2)</TopText>
                  <TopText>Your Wishlist (0)</TopText>
              </TopTexts>
              <TopButton type="filled">CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
              <Info>
                  <Product>
                      <ProductDetail>
                          <Image src="https://iconikcoffee.com/wp-content/uploads/2020/11/singleRetail1.png" />
                      <Details>
                          <ProductName><b>Product:</b>Ikonic - Mexico Washed</ProductName>
                          <ProductId><b>ID:</b>93813718293</ProductId>
                          <ProductRegion><b>ID:</b>93813718293</ProductId>
                          <ProductId><b>ID:</b>93813718293</ProductId>
                      </Details>
                      </ProductDetail>
                      <PriceDetail></PriceDetail>
                  </Product>
              </Info>
              <Summary>summary</Summary>
          </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
