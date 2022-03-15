import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 255px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: #fdc57b;
  margin-bottom: 20px;
  border: solid;
  background-color: #7fa99b;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #fdc57b;
  color: #7fa99b;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
`;

function CategoryItem({ item }) {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
}

export default CategoryItem;
