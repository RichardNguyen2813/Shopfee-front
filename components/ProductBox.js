import styled from "styled-components";
import Button from "@/components/Button";
import Link from "next/link";
import {useContext} from "react";
import {CartContext} from "@/components/CartContext";
import CartIcon from "./icons/CartIcon";

const ProductWrapper = styled.div`
  margin-bottom:30px;
  background-color: #E1BFBF;
  border-radius: 40px;
  margin: 20px;
  padding-bottom:20px;
`;

const WhiteBox = styled(Link)`
  background-color: #E1BFBF;
  padding: 25px;
  height: 140px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  img{
    max-width: 100%;
    max-height: 100px;
  }
`;

const Title = styled(Link)`
  
  font-size:.9rem;
  color:inherit;
  text-decoration:none;
  margin:0;
  text-align: center;
  font-weight: bold;
  margin:10px;
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
`;

const PriceRow = styled.div`
display: flex;
  flex-direction: column;
`;

const Price = styled.div`
font-family: Montserrat;
margin:5px;
  font-size: 1rem;
  font-weight:400;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight:600;
   
  }
`;

export default function ProductBox({_id,title,description,price,images}) {
  const {addProduct} = useContext(CartContext);
  const url = '/product/'+_id;
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <img src={images?.[0]} alt=""/>
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>
            ${price}
          </Price>
          <Button block onClick={() => addProduct(_id)} primary outline>
            Add to cart
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}