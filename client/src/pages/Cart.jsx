
import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import Product from "../components/Product";

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

const Product = styled.div`
display: flex;
justify-content: space-between;
border-bottom: solid lightgray;
border-width: 0.1px;

`;

const ProductDetail = styled.div`
flex: 2;
display: flex;

`;

const Image = styled.img`
width: 200px;

`;

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;

`;

const ProductName = styled.span`


`;

const ProductId = styled.span`


`;

const ProductQuantity = styled.span`


`;

const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const ProductAmountContainer = styled.div`
display: flex;
align-content: center;
margin-bottom: 20px;
`;

const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
`;

const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
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
                          <ProductName><b>Product: </b>Ikonic - Mexico Washed</ProductName>
                          <ProductId><b>ID: </b>93813718293</ProductId>
                          <ProductQuantity><b>Quantity: </b>12oz</ProductQuantity>
                      </Details>
                      </ProductDetail>
                      <PriceDetail>
                          <ProductAmountContainer>
                              <Add/>
                              <ProductAmount>2</ProductAmount>
                              <Remove/>
                          </ProductAmountContainer>
                          <ProductPrice>$ 20</ProductPrice>
                      </PriceDetail>
                  </Product>
                  <Product>
                      <ProductDetail>
                          <Image src="https://iconikcoffee.com/wp-content/uploads/2020/11/singleRetail1.png" />
                      <Details>
                          <ProductName><b>Product: </b>Ikonic - Mexico Washed</ProductName>
                          <ProductId><b>ID: </b>93813718293</ProductId>
                          <ProductQuantity><b>Quantity: </b>12oz</ProductQuantity>
                      </Details>
                      </ProductDetail>
                      <PriceDetail>
                          <ProductAmountContainer>
                              <Add/>
                              <ProductAmount>2</ProductAmount>
                              <Remove/>
                          </ProductAmountContainer>
                          <ProductPrice>$ 20</ProductPrice>
                      </PriceDetail>
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
